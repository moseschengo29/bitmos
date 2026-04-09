import { MetadataRoute } from 'next'

// If you are fetching data from a DB/CMS, you might need to remove this or set it to 'auto'
export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Update this to your actual production domain
  const baseUrl = 'https://bitmos.co.ke';

  // 1. Define Static Core Routes
  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' },
    { route: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { route: '/case-studies', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/contact-us', priority: 0.8, changeFrequency: 'yearly' },
    { route: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFrequency as any,
    priority,
  }));

  // 2. Generate Dynamic Routes (e.g., Blog Posts or Case Studies)
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  /* // EXAMPLE: Fetching Case Studies from a CMS or Database (like Supabase or Sanity)
  
  const { data: caseStudies } = await supabase
    .from('case_studies')
    .select('slug, updated_at')
    .eq('is_published', true);

  if (caseStudies) {
    caseStudies.forEach((project) => {
      dynamicRoutes.push({
        url: `${baseUrl}/case-studies/${project.slug}`,
        lastModified: new Date(project.updated_at),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  }
  */

  return [...staticRoutes, ...dynamicRoutes];
}