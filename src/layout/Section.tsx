import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="max-w-6xl mx-auto px-12 w-full">
        {title && (
          /* If title exists, render */
          
          <h2 className="text-4xl font-semibold mb-8">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
