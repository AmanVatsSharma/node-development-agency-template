export interface PersonJsonLdInput {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  worksFor: { name: string; url: string };
  /** Only verified profile URLs. Leave empty/undefined rather than guess. */
  sameAs?: string[];
}

export function buildPersonJsonLd(input: PersonJsonLdInput): Record<string, unknown> & {
  sameAs?: string[];
} {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    url: input.url,
    worksFor: { '@type': 'Organization', name: input.worksFor.name, url: input.worksFor.url },
    ...(input.sameAs && input.sameAs.length > 0 ? { sameAs: input.sameAs } : {}),
  };
}

export function PersonStructuredData(props: PersonJsonLdInput) {
  // Escape "<" so the JSON can never terminate the script tag.
  const json = JSON.stringify(buildPersonJsonLd(props)).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
