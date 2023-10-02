import { getCharacters } from "@/utils/marvelApi";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Characters = async () => {
  const { results } = await getCharacters();
  //   console.log(results);
  return (
    <main>
      <DataTable columns={columns} data={results} />
    </main>
  );
};

export default Characters;
