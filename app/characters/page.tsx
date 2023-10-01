import { Character } from "@/types/marveltypes";
import { getCharacters } from "@/utils/marvelApi";
import Image from "next/image";
import { DataTable } from "./data-table";
import { columns } from "./columns";

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
