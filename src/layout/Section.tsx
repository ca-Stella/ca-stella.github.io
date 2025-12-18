import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="px-12 w-full">
        {title && (
          /* If title exists, render */
          
          <h5 className="text-4xl font-semibold mb-8">{title}</h5>
        )}
        {children}
      </div>
    </section>
  );
}
