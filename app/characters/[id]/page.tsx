import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Character } from "@/types/marveltypes";
import { detailCharacter } from "@/utils/marvelApi";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const CharacterPage = async ({ params }: Props) => {
  const { id } = params;
  const { results } = await detailCharacter(id);
  //   console.log(results[0].comics.items[0]);
  // console.log(results[0].series);

  //   const { comics } = results[0];
  //   console.log(comics.items[0].name);

  return (
    <div className="container flex flex-col gap-5 items-center">
      <p className="text-4xl my-2 text-red-700 dark:text-white">
        Character Profile Page
      </p>
      {results.map((result: Character) => (
        <div key={result.id} className="flex flex-col gap-5 items-center">
          <Image
            src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
            alt={result.name}
            width={300}
            height={300}
            className="rounded-md"
          />
          <h1 className="text-3xl">{result.name}</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl flex justify-center">
                Description
              </AccordionTrigger>
              <AccordionContent>
                {result.description ? (
                  <p className="text-center">{result.description}</p>
                ) : (
                  <p>No description available!</p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl flex justify-center">
                Commics Appeared In
              </AccordionTrigger>
              <AccordionContent className="text-center">
                {result.comics.items.map((comic, index) => (
                  <div key={index}>{comic.name}</div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl flex justify-center">
                Series
              </AccordionTrigger>
              <AccordionContent>
                {result.series.items.map((item, index) => (
                  <div key={index} className="text-center">
                    {item.name}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
      {/* {
        results.comics.map((comic, index) => (
            <div key={index}>
                <p>{comic.items.name}</p>
            </div>
        ))
      } */}
    </div>
  );
};

export default CharacterPage;
