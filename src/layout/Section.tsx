import type { ReactNode } from "react";
import { easeOut, motion } from "motion/react";

type SectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  id: string;
};

export function Section({ title, children, className = "", id }: SectionProps) {
  return (
    <section
      className={`max-h-fit flex flex-col items-center bg-amber-50 ${className}`} id={id}
      //   className={`min-h-screen max-h-fit flex flex-col items-center justify-center bg-amber-50 ${className}`}
      style={{ width: "100vw" }}
    >
      <div className="max-w-5xl grid xl:grid-cols-6 xl:gap-0 xl:max-w-7xl gap-8 items-center justify-center w-full py-24">
        <motion.div
          className="max-w-5xl w-full px-12 xl:col-span-2 text-center xl:text-end"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type:"spring", bounce: 0.5, duration: 1, ease: "easeOut" }}
        >
          {title && (
            /* If title exists, render */

            <h5 className="text-4xl font-semibold">{title}</h5>
          )}
        </motion.div>
        <motion.div
          className="max-w-5xl w-full px-12 xl:col-span-4"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
