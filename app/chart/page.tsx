import { Overview } from "@/components/Overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCharacters } from "@/utils/marvelApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marvel Universe - Chart Page",
  description: "This is a Graph page for showing the graph on the basis of character comics played",
};
export default async function Chart() {
  const { results } = await getCharacters();
  

  const slicedData = results.slice(0, 10);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Character Graph</CardTitle>
      </CardHeader>
      <CardContent>
        <Overview data={slicedData} />
      </CardContent>
    </Card>
  );
}
