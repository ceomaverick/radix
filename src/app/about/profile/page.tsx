import type { Metadata } from "next";
import PageHeader from '@/components/PageHeader';
import ProfileOverview from '@/components/about/ProfileOverview';
import ProfileVerticals from '@/components/about/ProfileVerticals';
import ProfileAdvantage from '@/components/about/ProfileAdvantage';
import ProfileTimeline from '@/components/about/ProfileTimeline';
import ProfileDownload from '@/components/about/ProfileDownload';

export const metadata: Metadata = {
  title: "Corporate Profile | Radix Infra Projects",
  description: "Radix Infra Projects Pvt. Ltd. is a leading turnkey infrastructure firm in India, delivering complex engineering solutions across diverse sectors.",
};

const milestones = [
  { year: '1998', title: 'The Genesis', description: 'Established as Unicons, focusing on small-scale construction.' },
  { year: '2009', title: 'Strategic Pivot', description: 'Incorporated as Radix Infra Pvt Ltd to tackle mega-scale turnkey projects.' },
  { year: '2015', title: 'National Expansion', description: 'Secured landmark projects across multiple Indian states.' },
  { year: '2023', title: 'Future Ready', description: 'Digitizing site operations and adopting sustainable building practices.' },
];

export default function ProfilePage() {
  return (
    <div className="bg-white">
      <PageHeader title="Corporate Profile" />
      <ProfileOverview />
      <ProfileVerticals />
      <ProfileAdvantage />
      <ProfileTimeline milestones={milestones} />
      <ProfileDownload />
    </div>
  );
}
