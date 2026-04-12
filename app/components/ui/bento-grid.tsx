import { cn } from "@/app/lib/cn";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={cn(
        "group/bento flex flex-col justify-between space-y-4 rounded-2xl border border-gray-100 dark:border-[#1E293B] bg-white dark:bg-[#0F1623] p-6 sm:p-7 min-h-[180px] transition-all duration-300 shadow-[0_8px_32px_rgba(12,27,51,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_56px_rgba(12,27,51,0.14)] dark:hover:shadow-[0_20px_56px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 cursor-pointer overflow-hidden relative",
        className
      )}
    >
      {header}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {icon && (
            <div className="mb-4 inline-flex p-2.5 rounded-xl bg-blue-50 dark:bg-[#1E3A5F] text-[#2563EB] group-hover/bento:scale-110 transition-transform duration-300 w-fit">
              {icon}
            </div>
          )}
          <h3
            className="text-lg font-bold text-[#0C1B33] dark:text-white mb-2 leading-snug group-hover/bento:text-[#2563EB] dark:group-hover/bento:text-[#60A5FA] transition-colors"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-1.5 mt-4 text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] group-hover/bento:gap-2.5 transition-all">
          <span>Learn more</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Wrapper>
  );
};
