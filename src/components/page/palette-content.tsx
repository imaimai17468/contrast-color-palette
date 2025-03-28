import { searchParamsCache } from "../../utils/search-params";
import { ColorPalette } from "./_components/color-palette";
import { ColorSetting } from "./_components/color-setting";

export const PaletteContent: React.FC = () => {
  const { baseColors, numberOfColors, selectedColorIndex, lightThemeColor, darkThemeColor } = searchParamsCache.all();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px,auto] gap-16 p-4 sm:p-16">
      <ColorSetting baseColors={baseColors} numberOfColors={numberOfColors} index={selectedColorIndex} />
      <ColorPalette
        baseColors={baseColors}
        numberOfColors={numberOfColors}
        selectedColorIndex={selectedColorIndex}
        lightThemeColor={lightThemeColor}
        darkThemeColor={darkThemeColor}
      />
    </div>
  );
};
