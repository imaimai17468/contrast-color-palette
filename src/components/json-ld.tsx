import type React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml:
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
