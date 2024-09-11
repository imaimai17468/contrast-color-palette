"use client";

import { useMemo } from "react";
import { Pallet } from "./pallet";

type Props = {
  baseColor: string;
  numberOfColors: number;
};

export const ColorPallet: React.FC<Props> = ({ baseColor, numberOfColors }) => {
  const lightnessList = useMemo(() => {
    return Array.from({ length: numberOfColors }, (_, i) => i / (numberOfColors - 1));
  }, [numberOfColors]);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-bold">{baseColor}</p>
      <div className="flex gap-4">
        {lightnessList.map((lightness) => (
          <Pallet key={lightness} baseColor={baseColor} lightness={lightness} />
        ))}
      </div>
    </div>
  );
};
