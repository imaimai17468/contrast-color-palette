import { culcHexColor } from "./culcHexColor";

export const createPlainHexText = (baseColors: string[], lightnessValues: number[]): string => {
  return baseColors
    .map((baseColor) => {
      const colors = lightnessValues.map((value) => {
        return `${culcHexColor(baseColor, value)}`;
      });
      return `New Palette\n\n${colors.join("\n")}\n`;
    })
    .join("\n");
};

export const createCssVariablesText = (baseColors: string[], lightnessValues: number[]): string => {
  const paletteComment = "/* New Palette */";
  const cssVariables = baseColors.flatMap((baseColor) => {
    const swatches = lightnessValues.map((value) => {
      const color = culcHexColor(baseColor, value);
      return `--New-Swatch: ${color};`;
    });
    return [paletteComment, ...swatches, ""];
  });

  return `:root {\n  ${cssVariables.join("\n  ")}\n}`;
};

export const createJsonExportText = (baseColors: string[], lightnessValues: number[]) => {
  const palettes = baseColors.map((baseColor) => {
    const swatches = lightnessValues.map((value) => ({
      name: "New Swatch",
      color: culcHexColor(baseColor, value),
    }));
    return {
      paletteName: "New Palette",
      swatches,
    };
  });

  return JSON.stringify(palettes, null, 2);
};

export const createExportText = (type: "json" | "css" | "plain", baseColors: string[], lightnessValues: number[]) => {
  switch (type) {
    case "json":
      return createJsonExportText(baseColors, lightnessValues);
    case "css":
      return createCssVariablesText(baseColors, lightnessValues);
    case "plain":
      return createPlainHexText(baseColors, lightnessValues);
  }
};
