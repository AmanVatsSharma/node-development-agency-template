import Link from 'next/link';

interface RelatedService {
  label: string;
  href: string;
}

interface RelatedServicesStripProps {
  heading?: string;
  services: RelatedService[];
}

export function RelatedServicesStrip({
  heading = 'Explore related services',
  services,
}: RelatedServicesStripProps) {
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-600 font-semibold mb-4 text-center">
          {heading}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {svc.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
