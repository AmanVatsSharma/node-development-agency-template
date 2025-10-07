/**
 * @fileoverview Layout Component for EnterpriseHero CRM Page
 * @description Premium layout wrapper for CRM showcase page
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import { metadata } from './metadata';

console.log('[CRM] Layout component loaded');

export { metadata };

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('[CRM] Layout rendering');
  
  return (
    <>
      {/* CRM Page Wrapper with optimized loading */}
      {children}
    </>
  );
}
