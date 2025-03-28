import { culcHexColor } from "@/components/page/utils/culcHexColor";
import clsx from "clsx";
import { wcagContrast } from "culori";
import { useMemo } from "react";
import { contrastTextClassName } from "../utils/contrastTextClassName";
import type { VisibilityUI } from "./visibleMenu";

type PaletteProps = {
  baseColor: string;
  lightness: number;
  visible: VisibilityUI;
  lightThemeColor: string;
  darkThemeColor: string;
};

export const Palette: React.FC<PaletteProps> = ({ baseColor, lightness, visible, lightThemeColor, darkThemeColor }) => {
  const hexColor = useMemo(() => culcHexColor(baseColor, lightness), [baseColor, lightness]);
  const lightContrast = useMemo(() => wcagContrast(hexColor, lightThemeColor), [hexColor, lightThemeColor]);
  const darkContrast = useMemo(() => wcagContrast(hexColor, darkThemeColor), [hexColor, darkThemeColor]);

  return (
    <div className="flex flex-col items-center">
      <p className={clsx("text-xs text-muted-foreground", !visible.lightness && "hidden")}>{lightness.toFixed(2)}</p>
      <div
        className="w-16 h-16 rounded-md border"
        style={{
          backgroundColor: hexColor,
        }}
      />
      <div className="flex flex-col gap-2">
        <p className={clsx("text-xs text-muted-foreground", !visible.colorCode && "hidden")}>{hexColor}</p>
        <div
          className={clsx("rounded-full border py-1 px-2 flex justify-center", !visible.contrast && "hidden")}
          style={{
            backgroundColor: lightThemeColor,
          }}
        >
          <p className={clsx("text-xs", contrastTextClassName(lightContrast, "light"))}>{lightContrast.toFixed(2)}</p>
        </div>
        <div
          className={clsx("rounded-full border py-1 px-2 flex justify-center", !visible.contrast && "hidden")}
          style={{
            backgroundColor: darkThemeColor,
          }}
        >
          <p className={clsx("text-xs", contrastTextClassName(darkContrast, "dark"))}>{darkContrast.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
