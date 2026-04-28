import type { Metadata } from "next";
import PageHeader from '@/components/shared/PageHeader';
import ProjectsCompletedList from '@/components/projects/ProjectsCompletedList';

export const metadata: Metadata = {
  title: "Completed Infrastructure Projects | Radix Infra",
  description: "A track record of quality delivery. Browse our archive of successfully delivered turnkey projects in power, roads, and civil infrastructure.",
};

const completedProjects = [
  {
    title: 'NTPC Flyash Project',
    location: 'Rihandnagar, Sonbhadra, UP',
    client: 'NTPC',
    year: '2012',
    description: 'Successful removal and management of Flyash at Rihandnagar thermal power plant. Executed with strict adherence to environmental protocols and safety standards.',
    type: 'Earthworks',
    image: '/images/projects/ntpc/ntpc-flyash-project-2.webp',
  },
  {
    title: 'C.C. Road Construction',
    location: 'Rewa, MP',
    client: 'Public Works Department',
    year: '2011',
    description: 'Construction of a premium 1km cement concrete roadway. Work included clearing, grading, seeding, and complex multi-layered paving to national highway standards.',
    type: 'Road Construction',
    image: '/images/projects/koshi/koshi-canal-project-2.webp',
  },
  {
    title: 'Banquet Hall Construction',
    location: 'Chunabhatti, Mumbai',
    client: 'Private Entity',
    year: '2010',
    description: 'Turnkey construction of a modern banquet facility. Focused on high-quality structural finishing, load-bearing RCC work, and aesthetic landscaping.',
    type: 'RCC Projects',
    image: '/images/projects/koshi/koshi-canal-project-3.webp',
  },
  {
    title: 'Swadeshi Mill Premises',
    location: 'Chunabhatti, Mumbai',
    client: 'Residential Developers',
    year: '2010',
    description: 'Large-scale structural work and site development at the historic Swadeshi Mill premises. Involved complex reinforced concrete construction and area grading.',
    type: 'RCC Projects',
    image: '/images/projects/koshi/koshi-canal-project-4.webp',
  },
];

export default function CompletedProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Completed Projects" />
      <ProjectsCompletedList projects={completedProjects} />
    </div>
  );
}
