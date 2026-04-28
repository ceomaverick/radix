import type { Metadata } from "next";
import PageHeader from '@/components/PageHeader';
import ProjectsCategorySelector from '@/components/projects/ProjectsCategorySelector';

export const metadata: Metadata = {
  title: "Projects Portfolio | Radix Infra Projects",
  description: "Explore our diverse portfolio of infrastructure projects, from complex earthworks and RCC structures to national highway construction across India.",
};

export default function ProjectsLandingPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Projects portfolio" />
      <ProjectsCategorySelector />
    </div>
  );
}
