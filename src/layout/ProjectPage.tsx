import type { ReactNode } from "react";

type ProjectPageProps = {
  title: string;
  children: ReactNode;
  className?: string;
  textEmphasisColor: string;
};

export function ProjectPage({ title, children, className = "", textEmphasisColor }: ProjectPageProps) {
  return (
    <section className={`py-24 min-w-screen flex items-start justify-center ${className} ${textEmphasisColor}`}>
      <div className="max-w-6xl mx-auto px-12 w-full">          
          <h1 className="text-3xl font-semibold mb-8">{title}</h1>
        {children}
      </div>
    </section>
  );
}
