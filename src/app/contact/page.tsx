import type { Metadata } from "next";
import PageHeader from '@/components/PageHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

export const metadata: Metadata = {
  title: "Contact Us | Radix Infra Projects",
  description: "Get in touch with Radix Infra Projects. Our Mumbai-based office is ready to collaborate on your next turnkey infrastructure project.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <ContactMap />
    </div>
  );
}
