import { Overview } from "@/components/Overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCharacters } from "@/utils/marvelApi";

export default async function Chart() {
  const { results } = await getCharacters();
//   console.log(results[0].name);
  
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
