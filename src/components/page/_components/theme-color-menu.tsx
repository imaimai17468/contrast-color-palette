import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PencilLineIcon } from "lucide-react";
import { ColorPicker, useColor } from "react-color-palette";

export type ThemeColorUI = {
  lightThemeColor: string;
  darkThemeColor: string;
};

type ThemeColorMenuProps = {
  value: ThemeColorUI;
  onColorChange: (color: ThemeColorUI) => void;
};

export const ThemeColorMenu: React.FC<ThemeColorMenuProps> = ({ value, onColorChange }) => {
  const [lightColor, setLightColor] = useColor(value.lightThemeColor);
  const [darkColor, setDarkColor] = useColor(value.darkThemeColor);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <PencilLineIcon className="w-4 h-4 mr-2" />
          Change Background Color
        </Button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={8}
        className="flex flex-col sm:flex-row max-h-[500px] gap-8 w-fit sm:justify-center overflow-y-auto"
      >
        <div className="flex flex-col gap-4">
          <p>Light theme BG color</p>
          <p className="text-sm text-muted-foreground">{lightColor.hex}</p>
          <ColorPicker
            color={lightColor}
            hideInput={["rgb", "hsv"]}
            onChange={(color) => {
              setLightColor(color);
              onColorChange({ ...value, lightThemeColor: color.hex });
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>Dark theme BG color</p>
          <p className="text-sm text-muted-foreground">{darkColor.hex}</p>
          <ColorPicker
            color={darkColor}
            hideInput={["rgb", "hsv"]}
            onChange={(color) => {
              setDarkColor(color);
              onColorChange({ ...value, darkThemeColor: color.hex });
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
