import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Clipboard } from "lucide-react";
import { useState } from "react";
import { createExportText } from "../utils/createExportText";

type CopyTextareaProps = {
  type: "json" | "css" | "plain";
  baseColors: string[];
  lightnessValues: number[];
};

export const CopyTextarea = ({ type, baseColors, lightnessValues }: CopyTextareaProps) => {
  const exportText = createExportText(type, baseColors, lightnessValues);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(exportText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative">
      <Textarea value={exportText} rows={10} disabled />
      <Button onClick={handleCopy} className="absolute top-2 right-2">
        <Clipboard className="w-4 h-4 mr-2" />
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};
