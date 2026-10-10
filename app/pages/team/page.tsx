import Link from 'next/link';
import { getTeam } from '@/app/lib/team';
import { initialsOf, type TeamCardMember } from '@/app/lib/teamArrange';
import { FOUNDER_INITIALS } from '@/app/data/founder';
import { TeamAvatar } from '@/app/components/team/TeamAvatar';

const sora = { fontFamily: 'var(--font-sora), sans-serif' } as const;

function MemberLinks({ member }: { member: TeamCardMember }) {
  const links: Array<{ label: string; href: string | null }> = [
    { label: 'LinkedIn', href: member.linkedIn },
    { label: 'GitHub', href: member.github },
    { label: 'X', href: member.twitter },
    { label: 'Website', href: member.website },
  ];
  const present = links.filter((l): l is { label: string; href: string } => Boolean(l.href));
  if (present.length === 0) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-3 text-sm">
      {present.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563EB] hover:underline"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default async function TeamPage() {
  const { founder, others } = await getTeam();

  return (
    <div className="w-full bg-white">
      <section className="pt-28 pb-12 bg-[#F4F4F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB] mb-2">Our team</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0C1B33] tracking-tight" style={sora}>
            The people behind Vedpragya
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The founder, engineers and operators who plan, build and ship your software.
          </p>
        </div>
      </section>

      {/* Founder (featured) */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center rounded-3xl border border-gray-100 bg-[#F4F4F5] p-8 md:p-10">
            <TeamAvatar
              name={founder.name}
              avatar={founder.avatar}
              initials={FOUNDER_INITIALS}
              sizeClass="w-32 h-32"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">Founder</p>
              <h2 className="mt-1 text-2xl font-bold text-[#0C1B33]" style={sora}>
                {founder.name}
              </h2>
              <p className="text-[#2563EB] font-semibold">{founder.position}</p>
              <p className="mt-3 text-gray-600 leading-relaxed">{founder.bio}</p>
              <MemberLinks member={founder} />
              <Link
                href="/pages/founder"
                className="mt-4 inline-block text-sm font-semibold text-[#2563EB] hover:underline"
              >
                Read full profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Everyone else */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {others.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((member) => (
                <article key={member.id} className="rounded-2xl border border-gray-100 p-6">
                  <TeamAvatar
                    name={member.name}
                    avatar={member.avatar}
                    initials={initialsOf(member.name)}
                    sizeClass="w-20 h-20"
                  />
                  <h3 className="mt-4 text-lg font-bold text-[#0C1B33]" style={sora}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#2563EB]">{member.position}</p>
                  {member.bio && <p className="mt-3 text-sm text-gray-600 leading-relaxed">{member.bio}</p>}
                  <MemberLinks member={member} />
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              More teammates will be introduced here soon.
            </p>
          )}
        </div>
      </section>

      <section className="py-14 bg-[#0C1B33]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3" style={sora}>
            Work with us
          </h2>
          <p className="text-gray-300 mb-6">Tell us about your project — we respond within 24 hours.</p>
          <Link
            href="/pages/contact"
            className="inline-flex items-center rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1D4ED8] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
