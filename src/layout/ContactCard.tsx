import type { ReactNode } from "react";

type ContactCardProps = {
  children: ReactNode;
  className?: string;
};

export function ContactCard({ children, className = "" }: ContactCardProps) {
  return (
    <div className={`px-12 py-8 rounded-3xl border-3 shadow-lg justify-center ${className}`}>

        {children}
      </div>
  );
}
