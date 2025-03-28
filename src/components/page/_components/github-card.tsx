import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const GithubCard: React.FC = () => {
  return (
    <Card className="w-fit">
      <Button variant="link" asChild>
        <Link href="https://github.com/imaimai17468/contrast-color-Palette">
          <Image src="/image/github-mark.svg" alt="GitHub" width={24} height={24} className="w-4 h-4 mr-2" />
          imaimai17468: contrast-color-Palette
        </Link>
      </Button>
    </Card>
  );
};
