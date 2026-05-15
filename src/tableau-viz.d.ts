import React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "tableau-viz": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;

        // Tableau web component attributes
        "hide-tabs"?: "" | boolean | string;
        "hide-toolbar"?: "" | boolean | string;

        toolbar?: "top" | "bottom" | "hidden" | string;

        width?: string | number;
        height?: string | number;
      };
    }
  }
}