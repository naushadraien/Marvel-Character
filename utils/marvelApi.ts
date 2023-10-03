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
  const responseData = await response.json();

  if (responseData && responseData.data) {
    return responseData.data;
  } else {
    console.error("Error: Unable to retrieve characters data.");
    return null; // or handle the error appropriately
  }
};

export const detailCharacter = async (characterId: string) => {
  const url = `${API_BASE_URL}/characters/${characterId}?${query}`;
  const response = await fetch(url);
  const responseData = await response.json();

  if (responseData && responseData.data) {
    return responseData.data;
  } else {
    console.error("Error: Unable to retrieve character details.");
    return null; // or handle the error appropriately
  }
};
