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
          <h6 className="text-4xl font-bold mb-4">{title}</h6>
        {children}
      </div>
    </section>
  );
}
