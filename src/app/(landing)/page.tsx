import Capabilities from '@/src/components/Home/Capabilities';

import FinalCTA from '@/src/components/Home/FinalCTA';
import HeroDynamicGrid from '@/src/components/Home/HeroDynamicGrid';
import HeroScrollingColumns from '@/src/components/Home/HeroScrolling';
import OperationsSimulator from '@/src/components/Home/OperationSimulation';
import SolutionsMatrix from '@/src/components/Home/SolutionsMatrix';
import InfoPage from '@/src/components/Home/StructuralSections';
import TeamGrid from '@/src/components/Home/TeamSelection';
import TelemetryGrid from '@/src/components/Home/TelemtryGrid';
import ServicesOrbit from '@/src/components/Home/ServicesOrbit';

import MacbookFolderStack from '@/src/components/Home/MacFolderStack';

const BitmosLandingPage = () => {
  return (
    <main className="min-h-screen w-full">
      <HeroScrollingColumns />
        <ServicesOrbit />
        <Capabilities />
        <SolutionsMatrix />
        <TelemetryGrid />
        <OperationsSimulator />
        <MacbookFolderStack />
        <TeamGrid />
        <HeroDynamicGrid />
        <InfoPage />
        <FinalCTA />
    </main>
  );
};

export default BitmosLandingPage;