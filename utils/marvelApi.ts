import { CharacterDataWrapper } from "@/types/marveltypes";
import md5 from "md5";
const API_BASE_URL = process.env.API_BASE_URL;
const API_PUBLIC_KEY = process.env.API_PUBLIC_KEY;
const API_PRIVATE_KEY = process.env.API_PRIVATE_KEY;

const getTimeStamp = () => Date.now().toString();

const getHash = (timeStamp: string) =>
  md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

export const getCharacters = async () => {
  const url = `${API_BASE_URL}/characters?${query}`;
  const response = await fetch(url);
  const { data } = await response.json();
  //   console.log(data);

  return data;
};

export const detailCharacter = async (characterId: string) => {
  const url = `${API_BASE_URL}/characters/${characterId}?${query}`;
  const response = await fetch(url);
  const { data } = await response.json();
  //   console.log(data);

  return data;
};
