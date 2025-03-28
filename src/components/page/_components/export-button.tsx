import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import { CopyTextarea } from "./copy-textarea";

type ExportButtonProps = {
  baseColors: string[];
  lightnessValues: number[];
};

export const ExportButton: React.FC<ExportButtonProps> = ({ baseColors, lightnessValues }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          <span>Export</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export Color Palette</DialogTitle>
          <DialogDescription>
            <p>You can copy in JSON or text format.</p>
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="json">
          <TabsList>
            <TabsTrigger value="json">JSON</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
            <TabsTrigger value="plain">Plain Hex</TabsTrigger>
          </TabsList>
          <TabsContent value="json">
            <CopyTextarea type="json" baseColors={baseColors} lightnessValues={lightnessValues} />
          </TabsContent>
          <TabsContent value="css">
            <CopyTextarea type="css" baseColors={baseColors} lightnessValues={lightnessValues} />
          </TabsContent>
          <TabsContent value="plain">
            <CopyTextarea type="plain" baseColors={baseColors} lightnessValues={lightnessValues} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
