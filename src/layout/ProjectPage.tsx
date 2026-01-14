import type { ReactNode } from "react";

type ProjectPageProps = {
  title: string;
  children: ReactNode;
  className?: string;
  textEmphasisColor: string;
};

export function ProjectPage({ title, children, className = "", textEmphasisColor }: ProjectPageProps) {
  return (
    <section className={`py-24 w-full flex items-start justify-center ${className} ${textEmphasisColor}`}>
      <div className="w-full max-w-full px-6">
        <h6 className="text-4xl font-bold mb-4">{title}</h6>
        {children}
      </div>
    </section>
  );
}