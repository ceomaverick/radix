import type { Metadata } from "next";
import PageHeader from '@/components/shared/PageHeader';
import ProjectsCurrentList from '@/components/projects/ProjectsCurrentList';

export const metadata: Metadata = {
  title: "Current Projects | Radix Infra Landmarks",
  description: "Setting new benchmarks in engineering. Explore our ongoing high-impact infrastructure projects currently being executed across India.",
};

const currentProjects = [
  {
    slug: 'koshi',
    title: 'Koshi Canal Project',
    location: 'Bihar',
    client: 'Government of Bihar',
    description: 'Extension, renovation and modernisation of Eastern Koshi Canal System. Includes removal of debris and silt in and around the dam area extending up to 60 Sq.km.',
    image: '/images/projects/koshi/koshi-canal-project-1.webp',
  },
  {
    slug: 'sonbhadra',
    title: 'Nallah Diversion',
    location: 'Sonbhadra, UP',
    client: 'NTPC',
    description: "Construction of a 3km Nallah to divert the waste water at NTPC's power plant. Requires precise engineering and timely execution to maintain plant operations.",
    image: '/images/projects/ntpc/ntpc-nallah-diversion-1.webp',
  },
  {
    slug: 'chitrangi',
    title: 'Area Leveling',
    location: 'Chitrangi, MP',
    client: 'Reliance Power',
    description: 'Large-scale area leveling and grading for Reliance Power plant. Involves enormous planning for man and machinery management in a remote location.',
    image: '/images/projects/chit/ct1.webp',
  },
  {
    slug: 'sasan',
    title: 'Area Leveling',
    location: 'Sasan, MP',
    client: 'Reliance Power (UMPP)',
    description: 'Earth work for area grading at the 4000 MW Ultra Mega Power Project. High-priority fast-track project requiring meticulous site management.',
    image: '/images/projects/sas/sas1.webp',
  },
];

export default function CurrentProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Current Projects" />
      <ProjectsCurrentList projects={currentProjects} />
    </div>
  );
}
