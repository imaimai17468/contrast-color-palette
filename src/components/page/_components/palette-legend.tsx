import { Card } from "@/components/ui/card";

export const PaletteLegend: React.FC = () => {
  return (
    <Card className="h-fit w-fit p-4 flex flex-col gap-4">
      <p className="text-lg font-bold">Palette Legend</p>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs text-muted-foreground">Lightness</p>
        <div className="w-16 h-16 rounded-md border bg-black" />
        <p className="text-xs text-muted-foreground">Hex Color</p>
        <div className="flex flex-col gap-2">
          <div className="rounded-full border py-1 px-2 flex justify-center">
            <p className="text-xs text-foreground">Contrast (Light)</p>
          </div>
          <div className="rounded-full bg-black py-1 px-2 flex justify-center">
            <p className="text-xs text-white">Contrast (Dark)</p>
          </div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground grid grid-cols-[auto,1fr] gap-2">
        <p className="text-orange-600">≥ 3</p>
        <div className="text-orange-600">
          <p>Large Text AA</p>
        </div>
        <p className="text-yellow-600">≥ 4.5</p>
        <div className="text-yellow-600">
          <p>Small Text AA</p>
          <p>Large Text AAA</p>
        </div>
        <p className="text-green-600">≥ 7</p>
        <div className="text-green-600">
          <p>Small Text AAA</p>
          <p>Large Text AAA</p>
        </div>
      </div>
    </Card>
  );
};
