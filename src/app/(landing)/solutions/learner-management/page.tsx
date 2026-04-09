import { LmsCapabilities } from "@/src/components/Solutions/LMS/LmsCapabilities";
import { LmsCTA } from "@/src/components/Solutions/LMS/LmsCTA";
import { LmsProblemContext } from "@/src/components/Solutions/LMS/LmsProblemContext";
import LmsShowcase from "@/src/components/Solutions/LMS/LmsShowcase";


export default function LearnerManagementPage() {
  return (
    <main>
      <LmsShowcase />
      <LmsProblemContext />
      <LmsCapabilities />
      <LmsCTA />
    </main>
  );
}