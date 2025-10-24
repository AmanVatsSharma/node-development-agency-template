import React from 'react';

interface SectionErrorBoundaryProps {
  name: string;
  children: React.ReactNode;
}

export function SectionErrorBoundary({ name, children }: SectionErrorBoundaryProps) {
  return (
    <div className="section-error-boundary" data-section={name}>
      {children}
    </div>
  );
}