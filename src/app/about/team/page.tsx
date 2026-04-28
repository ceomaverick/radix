import type { Metadata } from "next";
import PageHeader from '@/components/PageHeader';
import TeamManagementGrid from '@/components/about/TeamManagementGrid';

export const metadata: Metadata = {
  title: "Our Management Team | Radix Infra Projects",
  description: "Meet the visionary leadership team at Radix Infra. Our growth is driven by strategic professionals with decades of cross-disciplinary expertise.",
};

const team = [
  {
    name: 'RAJESH SINGH',
    role: 'CHIEF EXECUTIVE OFFICER',
    image: '/images/about/team/rajesh.webp',
    description: 'Over 12 years of work experience and over 6 years in Senior Management positions, he is an immensely talented professional. His in-depth knowledge of the infrastructure segment - both in Operations and Business Development is next to none.',
  },
  {
    name: 'SATISH SINGH',
    role: 'EXECUTIVE VICE PRESIDENT - BUSINESS DEVELOPMENT',
    image: '/images/about/team/satish.webp',
    description: 'A key member of the executive team, he spearheads business development activities and manages multiple business initiatives. His extensive experience coupled with dynamic style provides Radix a strategic direction.',
  },
  {
    name: 'RAMESH SINGH',
    role: 'EXECUTIVE VICE PRESIDENT - FINANCE',
    image: '/images/about/team/ramesh.webp',
    description: 'He is an astute professional and a financial wizard. He has an in-depth knowledge of the financial operations, including working capital, capital expenditures, debt levels, taxes, budget, and general accounting.',
  },
  {
    name: 'DINESH SINGH',
    role: 'EXECUTIVE VICE PRESIDENT - CIVIL',
    image: '/images/about/team/dinesh.webp',
    description: 'He serves as a Vice President of civil engineering department at Radix. He has over 10 years of experience in this field, which includes site selection, master planning, and design of complex infrastructure systems.',
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Management Team" />
      <TeamManagementGrid team={team} />
    </div>
  );
}
