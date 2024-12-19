"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Slider } from "@/components/ui/slider";
import { RefreshCcw } from "lucide-react";

const chartConfig = {
  lightness: {
    label: "Lightness",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type LightnessChartProps = {
  lightnessList: { x: number; y: number }[];
  lightnessGain: number;
  onLightnessGainChange: (value: number) => void;
};

export function LightnessChart({ lightnessList, lightnessGain, onLightnessGainChange }: LightnessChartProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="text-sm">Lightness Gain</p>
            <Button variant="outline" size="sm" onClick={() => onLightnessGainChange(0.5)}>
              <RefreshCcw className="w-4 h-4 mr-2" />
              <span>Reset</span>
            </Button>
          </div>
          <p className="text-sm">-{lightnessGain.toFixed(2)}</p>
        </div>
        <Slider
          value={[lightnessGain]}
          max={1}
          step={0.05}
          min={0.1}
          onValueChange={(value) => onLightnessGainChange(value[0])}
        />
      </div>
      <Card className="w-full h-fit">
        <CardHeader>
          <CardTitle>Lightness Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[0px]">
            <LineChart
              accessibilityLayer
              data={lightnessList}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="x"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.toFixed(2)}
              />
              <YAxis
                dataKey="y"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.toFixed(2)}
                label={{
                  value: "Lightness",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Line
                dataKey="y"
                type="natural"
                stroke="var(--color-lightness)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-lightness)",
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
