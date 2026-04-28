import type { Metadata } from "next";
import PageHeader from '@/components/PageHeader';
import CareersIntro from '@/components/careers/CareersIntro';
import CareersOpenings from '@/components/careers/CareersOpenings';
import CareersCulture from '@/components/careers/CareersCulture';

export const metadata: Metadata = {
  title: "Careers at Radix Infra | Join our Team",
  description: "Explore career opportunities at Radix Infra. We seek talented professionals for civil engineering, site surveying, and infrastructure projects across India.",
};

const jobs = [
  {
    id: '01',
    date: '25 August',
    title: 'Site Surveyors',
    location: 'All India',
    experience: '1 - 10 years',
    education: 'Diploma/ Degree in Civil Engineering',
    description: [
      'Scheduling & planning of building work and material requirements',
      'Supervision and monitoring of the work.',
      'Co-ordination with RCC Consultants & Contractor',
      'Sound Knowledge of RCC Structure, waterproofing, electric work, brick work & Plaster.',
    ],
  },
  {
    id: '02',
    date: '25 August',
    title: 'Civil Engineers',
    location: 'All India',
    experience: '1 - 10 years',
    education: 'Diploma/ Degree in Civil Engineering',
    description: [
      'Planning & executing the work as per specifications with highest quality & safety standards.',
      'Leading the team of supervisors to achieve the targets.',
      'Supervision and execution of work at the site.',
      'Giving the daily progress report to consultant and to Project Manager of the work.',
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Careers" />
      
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <CareersIntro />
              <CareersOpenings jobs={jobs} />
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CareersCulture />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
