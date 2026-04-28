import type { Metadata } from "next";
import PageHeader from '@/components/shared/PageHeader';
import EthicsIntro from '@/components/about/EthicsIntro';
import EthicsValuesGrid from '@/components/about/EthicsValuesGrid';

export const metadata: Metadata = {
  title: "Our Ethics & Values | Radix Infra Projects",
  description: "Discover our commitment to integrity, accountability, and transparency. Our code of ethics defines how we operate and serve our stakeholders.",
};

export default function EthicsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title="Ethics & Values" />
      
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <EthicsIntro />
          <EthicsValuesGrid />
        </div>
      </section>
    </div>
  );
}
