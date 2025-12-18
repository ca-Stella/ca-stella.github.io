import type { ReactNode } from "react";

type ProjectPageProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function ProjectPage({ title, children, className = "" }: ProjectPageProps) {
  return (
    <section className={`min-w-screen flex items-center justify-center ${className}`}>
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
