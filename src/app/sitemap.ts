import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase' // Adjust path if your client export is different

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient();
  const baseUrl = 'https://dished.co.ke';

  // 1. Define Static Routes (Public pages)
  const staticRoutes = [
    '',           
    '/map',       
    '/all-restauarants',       
    '/about-us',     
    '/contact',   
    '/terms',   
    '/sitemap',   
    '/privacy',   
    '/contact',   
    '/press',   
    '/restaurants',   
    '/restaurants/features',   
    '/restaurants/pricing',   
    '/restaurants/resources',   
    '/restaurants/how-it-works',   
    '/auth/login',   
    '/auth/signup',   
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  // 2. Fetch Restaurant Data
  const { data: restaurants } = await supabase
    .from('restaurant_profile')
    .select('slug, updated_at')
    .eq('is_visible', true);

  // 3. Generate Dynamic Routes (4 URLs per Restaurant)
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  if (restaurants) {
    restaurants.forEach((rest) => {
      const slug = rest.slug;
      const lastMod = rest.updated_at ? new Date(rest.updated_at) : new Date();

      // A. Main Profile (Highest Priority)
      dynamicRoutes.push({
        url: `${baseUrl}/profile/?id=${slug}`,
        lastModified: lastMod,
        changeFrequency: 'weekly',
        priority: 0.9,
      });

      // B. Menu Page
      dynamicRoutes.push({
        url: `${baseUrl}/profile/menu/?id=${slug}`,
        lastModified: lastMod,
        changeFrequency: 'weekly',
        priority: 0.8,
      });

      // C. Reservations Page (High frequency change)
      dynamicRoutes.push({
        url: `${baseUrl}/profile/reservations/?id=${slug}`,
        lastModified: new Date(), // Always fresh
        changeFrequency: 'always', 
        priority: 0.8,
      });

      // D. Reviews Page
      dynamicRoutes.push({
        url: `${baseUrl}/profile/reviews/?id=${slug}`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.7,
      });
    });
  }

  return [...staticRoutes, ...dynamicRoutes];
}