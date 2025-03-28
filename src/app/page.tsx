import { PaletteContent } from "@/components/page/palette-content";
import { searchParamsCache } from "@/utils/search-params";
import type { SearchParams } from "nuqs/parsers";

type Props = {
  searchParams: SearchParams;
};

export default function Home({ searchParams }: Props) {
  searchParamsCache.parse(searchParams);

  return <PaletteContent />;
}
