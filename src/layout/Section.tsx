import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section
      className={`min-h-screen max-h-fit flex flex-col items-center justify-center bg-amber-50 ${className}`}
      style={{ width: "100vw" }}
    >
      <div className="max-w-5xl w-full px-12 my-24">
    
        {title && (
          /* If title exists, render */

          <h5 className="text-4xl font-semibold mb-8">{title}</h5>
        )}
        {children}
      </div>
    </section>
  );
}
