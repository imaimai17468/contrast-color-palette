"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { PlusCircleIcon, Trash2 } from "lucide-react";
import { useQueryState } from "nuqs";
import { useMemo, useState } from "react";
import { searchParams } from "../../../utils/search-params";
import { generateSigmoidData } from "../utils/sigmoid";
import { ExportButton } from "./export-button";
import { GithubCard } from "./github-card";
import { LightnessChart } from "./lightness-chart";
import { Palette } from "./palette";
import { PaletteLegend } from "./palette-legend";
import { ThemeColorMenu } from "./theme-color-menu";
import { type VisibilityUI, VisibleMenu } from "./visibleMenu";

type Props = {
  baseColors: string[];
  numberOfColors: number;
  selectedColorIndex: number;
  lightThemeColor: string;
  darkThemeColor: string;
};

export const ColorPalette: React.FC<Props> = ({
  baseColors,
  numberOfColors,
  selectedColorIndex,
  lightThemeColor,
  darkThemeColor,
}) => {
  const [selectedIndex, setSelectedIndex] = useQueryState(
    "selectedColorIndex",
    searchParams.selectedColorIndex.withDefault(selectedColorIndex).withOptions({ shallow: false }),
  );

  const [newBaseColors, setNewBaseColors] = useQueryState(
    "baseColors",
    searchParams.baseColors.withDefault(baseColors).withOptions({ shallow: false, history: "push" }),
  );

  const [newLightThemeColor, setNewLightThemeColor] = useQueryState(
    "lightThemeColor",
    searchParams.lightThemeColor
      .withDefault(lightThemeColor)
      .withOptions({ shallow: false, history: "push", throttleMs: 500 }),
  );

  const [newDarkThemeColor, setNewDarkThemeColor] = useQueryState(
    "darkThemeColor",
    searchParams.darkThemeColor
      .withDefault(darkThemeColor)
      .withOptions({ shallow: false, history: "push", throttleMs: 500 }),
  );

  const [lightnessGain, setLightnessGain] = useQueryState(
    "lightnessGain",
    searchParams.lightnessGain.withDefault(0.5).withOptions({ shallow: false, history: "push" }),
  );

  const lightnessList = useMemo(() => {
    return generateSigmoidData(numberOfColors, lightnessGain);
  }, [numberOfColors, lightnessGain]);

  const [visible, setVisible] = useState<VisibilityUI>({
    heading: true,
    lightness: true,
    colorCode: true,
    contrast: true,
  });

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        {newBaseColors.map((baseColor, index) => (
          <div
            key={`${baseColor}-${Math.random()}`}
            className={clsx("grid gap-4", visible.heading ? "grid-cols-1 lg:grid-cols-[96px,1fr]" : "grid-cols-1")}
          >
            <div className={clsx("flex flex-col justify-center", !visible.heading && "hidden")}>
              {newBaseColors.length === 1 ? (
                <p className="text-xl font-bold">{baseColor}</p>
              ) : (
                <Button
                  variant="link"
                  className={clsx(selectedIndex === index && "text-orange-500", "text-xl font-bold")}
                  onClick={() => setSelectedIndex(index)}
                >
                  {baseColor}
                </Button>
              )}
              <Button
                variant="link"
                size="sm"
                className={clsx("text-red-500", newBaseColors.length === 1 && "hidden")}
                onClick={() => {
                  if (newBaseColors.length === 1) {
                    return;
                  }

                  if (selectedIndex === index) {
                    setSelectedIndex(0);
                  }

                  if (selectedIndex > newBaseColors.length - 2) {
                    setSelectedIndex(newBaseColors.length - 2);
                  }

                  setNewBaseColors(newBaseColors.filter((_, i) => i !== index));
                }}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                delete
              </Button>
            </div>
            <div className="flex gap-4 overflow-x-auto">
              {lightnessList.map((lightness) => (
                <Palette
                  key={lightness.x}
                  baseColor={baseColor}
                  lightness={lightness.y}
                  visible={visible}
                  lightThemeColor={lightThemeColor}
                  darkThemeColor={darkThemeColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <Button onClick={() => setNewBaseColors([...newBaseColors, "#000000"])} className="flex gap-2 w-fit">
          <PlusCircleIcon /> Create Palette
        </Button>
        <ExportButton baseColors={newBaseColors} lightnessValues={lightnessList.map((lightness) => lightness.y)} />
      </div>
      <div className="flex gap-8">
        <VisibleMenu value={visible} onVisibleChange={setVisible} />
        <ThemeColorMenu
          value={{
            lightThemeColor: newLightThemeColor,
            darkThemeColor: newDarkThemeColor,
          }}
          onColorChange={(color) => {
            setNewLightThemeColor(color.lightThemeColor);
            setNewDarkThemeColor(color.darkThemeColor);
          }}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8">
        <LightnessChart
          lightnessList={lightnessList}
          lightnessGain={lightnessGain}
          onLightnessGainChange={setLightnessGain}
        />
        <PaletteLegend />
      </div>
      <GithubCard />
    </div>
  );
};
