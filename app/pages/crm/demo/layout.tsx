/**
 * @fileoverview Layout Component for CRM Demo Page
 * @description Layout wrapper for demo request page
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import { metadata } from './metadata';

console.log('[CRM-Demo] Layout component loaded');

export { metadata };

export default function CRMDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('[CRM-Demo] Layout rendering');
  
  return (
    <>
      {/* CRM Demo Page Wrapper */}
      {children}
    </>
  );
}
