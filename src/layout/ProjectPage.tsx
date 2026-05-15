import type { ReactNode } from "react";

type ProjectPageProps = {
  title: string;
  children: ReactNode;
  className?: string;
  textEmphasisColor: string;
};

export function ProjectPage({ children, className = "", textEmphasisColor }: ProjectPageProps) {
  return (
    // section had  w-full; div had  w-full max- w-full
    <section className={`rounded-4xl py-8 pb-8 flex  shadow-md ${className} ${textEmphasisColor}`}>
      <div className="px-6 w-full  items-start justify-center">
        {/* <h6 className="text-4xl font-bold mb-4">{title}</h6> */}
        {children}
      </div>
    </section>
  );
}