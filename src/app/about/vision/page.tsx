import type { Metadata } from "next";
import PageHeader from '@/components/PageHeader';
import VisionDisplay from '@/components/about/VisionDisplay';
import MissionDisplay from '@/components/about/MissionDisplay';

export const metadata: Metadata = {
  title: "Vision & Mission | Radix Infra Projects",
  description: "To emerge as a world leader in infrastructure, widely recognized for value, innovation and landmarks. Explore our mission and corporate path.",
};

const missionPoints = [
  'To undertake challenging infrastructure projects and execute them with complete dedication, superlative quality and on time.',
  'To continuously improve the productivity and efficiency, and set new benchmarks for the future.',
  'To respect and honour our commitment to our customers, clients, vendors and communities in all times.',
  'To create a performance-driven work culture by attracting talented individuals and providing them with excellent growth opportunities.',
  'To be an active and responsible corporate citizen by employing Eco-friendly practices and contributing continuously to the community development.',
];

export default function VisionPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Vision & Mission" />
      <VisionDisplay />
      <MissionDisplay missionPoints={missionPoints} />
    </div>
  );
}
