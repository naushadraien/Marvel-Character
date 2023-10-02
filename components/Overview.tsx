"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Character } from "@/types/marveltypes";
import { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

type OverviewProps = {
  data: any;
};

export const Overview = ({ data }: OverviewProps) => {
  const [enabledCharacters, setEnabledCharacters] = useState<{
    [key: string]: boolean;
  }>({});

  // Initialize enabled characters with all available character names
  useEffect(() => {
    const initialEnabledCharacters: { [key: string]: boolean } = {};
    data.map((item: Character) => {
      initialEnabledCharacters[item.name] = true;
    });
    setEnabledCharacters(initialEnabledCharacters);
  }, [data]);

  const handleCharacterToggle = (characterName: string) => {
    setEnabledCharacters((prevState) => ({
      ...prevState,
      [characterName]: !prevState[characterName],
    }));
  };

  const filteredData = data.filter(
    (item: Character) => enabledCharacters[item.name]
  );

  return (
    <div className="flex items-center space-x-2 flex-col md:flex-row">
      <div className="flex flex-col">
        <p className="text-xl underline">Filter the graph</p>
        {data.map((item: Character) => (
          <div key={item.id} className="flex gap-2 p-2">
            <Checkbox
              id={item.name}
              checked={enabledCharacters[item.name]}
              onClick={() => handleCharacterToggle(item.name)}
            />
            <label
              htmlFor={item.name}
              className={`text-sm font-medium leading-none ${
                enabledCharacters[item.name]
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-70"
              }`}
            >
              {item.name}
            </label>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={350} className="max-md:pt-4">
        <BarChart data={filteredData}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          {/* <Legend /> */}
          <Bar
            dataKey="comics.items.length"
            radius={[4, 4, 0, 0]}
            className="cursor-pointer fill:black dark:fill-blue-700"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
