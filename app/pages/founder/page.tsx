import Link from 'next/link';
import { companyProfile } from '@/app/data/companyProfile';
import {
  FOUNDER_FOUNDED_YEAR,
  FOUNDER_INITIALS,
  FOUNDER_LONG_BIO,
  FOUNDER_NAME,
  FOUNDER_QUOTE,
  FOUNDER_RESPONSIBILITIES,
  FOUNDER_TITLE,
} from '@/app/data/founder';
import { TeamAvatar } from '@/app/components/team/TeamAvatar';

const sora = { fontFamily: 'var(--font-sora), sans-serif' } as const;

export default function FounderPage() {
  const facts: Array<{ label: string; value: string }> = [
    { label: 'Company', value: companyProfile.legalName },
    { label: 'Founded', value: String(FOUNDER_FOUNDED_YEAR) },
    { label: 'Registered in', value: companyProfile.legal.registrationState ?? 'India' },
    { label: 'Website', value: companyProfile.websiteUrl.replace(/^https?:\/\//, '') },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#F4F4F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">
            <TeamAvatar
              name={FOUNDER_NAME}
              avatar=""
              initials={FOUNDER_INITIALS}
              sizeClass="w-36 h-36"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB] mb-2">
                Meet the founder
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#0C1B33] tracking-tight" style={sora}>
                {FOUNDER_NAME}
              </h1>
              <p className="mt-2 text-lg font-semibold text-[#2563EB]">{FOUNDER_TITLE}</p>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">{FOUNDER_LONG_BIO[0]}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pages/contact"
                  className="inline-flex items-center rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
                >
                  Talk to our team
                </Link>
                <Link
                  href="/pages/team"
                  className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-[#0C1B33] hover:bg-white transition-colors"
                >
                  Meet the team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="mb-8 border-l-4 border-[#2563EB] pl-6">
            <p className="text-2xl font-bold text-[#0C1B33] leading-snug tracking-tight" style={sora}>
              &ldquo;{FOUNDER_QUOTE}&rdquo;
            </p>
          </blockquote>
          <h2 className="text-2xl font-bold text-[#0C1B33] mb-4" style={sora}>
            Background
          </h2>
          {/* The first paragraph is already shown in the hero. */}
          {FOUNDER_LONG_BIO.slice(1).map((paragraph) => (
            <p key={paragraph} className="text-gray-600 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Remit */}
      <section className="py-16 bg-[#F4F4F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0C1B33] mb-8" style={sora}>
            What {FOUNDER_NAME.split(' ')[0]} leads at Vedpragya
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {FOUNDER_RESPONSIBILITIES.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-gray-100 p-6">
                <h3 className="font-bold text-[#0C1B33] mb-2" style={sora}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0C1B33] mb-8" style={sora}>
            The company
          </h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-gray-100 p-5">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{fact.label}</dt>
                <dd className="mt-1 font-semibold text-[#0C1B33] break-words">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-gray-500">
            Full registration details are on our{' '}
            <Link href="/pages/legal/company-info" className="text-[#2563EB] hover:underline">
              company information page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0C1B33]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={sora}>
            Have a project in mind?
          </h2>
          <p className="text-gray-300 mb-8">
            Tell us what you are building. We respond within 24 hours.
          </p>
          <Link
            href="/pages/contact"
            className="inline-flex items-center rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
