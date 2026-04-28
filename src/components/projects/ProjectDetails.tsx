/**
 * @component ProjectDetails
 * @page Project Detail (/app/projects/[slug]/page.tsx)
 * @description Detailed overview of a specific project, including challenges and a client testimonial.
 * @shared false
 * @props project: Project
 */

'use client';

interface ProjectDetailsProps {
  project: {
    overview: string;
    challenges: string[];
  };
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4 uppercase">An Overview</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">{project.overview}</p>
        
        <h2 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4 uppercase">The Challenges</h2>
        <ul className="space-y-4 mb-12">
          {project.challenges.map((challenge: string, index: number) => (
            <li key={index} className="flex gap-3 items-start text-gray-700">
              <span className="text-primary font-bold">•</span>
              {challenge}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
        <h3 className="text-xl font-bold text-secondary mb-6">Testimonial</h3>
        <blockquote className="italic text-gray-600 mb-4">
          "Radix completed our project and handed over the site back to us 4 months before time frame of 1 year. We were delightfully surprised."
        </blockquote>
        <cite className="block text-sm font-bold text-primary">— Mr. A Krishna Reddy, CEO, IVRCL</cite>
      </div>
    </div>
  );
}
