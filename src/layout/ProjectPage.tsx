import type { ReactNode } from "react";

type ProjectPageProps = {
  title: string;
  children: ReactNode;
  className?: string;
  textEmphasisColor: string;
};

export function ProjectPage({ title, children, className = "", textEmphasisColor }: ProjectPageProps) {
  return (
    // section had  w-full; div had  w-full max- w-full
    <section className={`py-16 flex items-start justify-center ${className} ${textEmphasisColor}`}>
      <div className="px-6">
        {/* <h6 className="text-4xl font-bold mb-4">{title}</h6> */}
        {children}
      </div>
    </section>
  );
}