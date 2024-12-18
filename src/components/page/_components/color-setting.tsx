"use client";
import { ColorPicker, useColor } from "react-color-palette";
import { Slider } from "../../ui/slider";
import "react-color-palette/css";
import { searchParams } from "@/utils/search-params";
import { useQueryState } from "nuqs";

type Props = {
  baseColors: string[];
  numberOfColors: number;
  index: number;
};

export const ColorSetting: React.FC<Props> = ({ baseColors, numberOfColors, index }) => {
  const [color, setColor] = useColor(baseColors[index]);
  const [_baseColor, setBaseColors] = useQueryState(
    "baseColors",
    searchParams.baseColors.withDefault(baseColors).withOptions({ throttleMs: 500, shallow: false }),
  );
  const [_numberOfColors, setNumberOfColors] = useQueryState(
    "numberOfColors",
    searchParams.numberOfColors.withDefault(numberOfColors).withOptions({
      shallow: false,
      history: "push",
    }),
  );

  return (
    <div className="flex flex-col gap-8">
      <ColorPicker
        color={color}
        onChange={(iColor) => {
          setBaseColors((old) => {
            const newColors = [...old];
            newColors[index] = iColor.hex;
            return newColors;
          });
          setColor(iColor);
        }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <p>Number of Colors</p>
          <div className="text-2xl font-bold">{_numberOfColors}</div>
        </div>
        <Slider
          value={[_numberOfColors]}
          max={11}
          step={1}
          min={2}
          onValueChange={(value) => setNumberOfColors(value[0])}
        />
      </div>
    </div>
  );
};
