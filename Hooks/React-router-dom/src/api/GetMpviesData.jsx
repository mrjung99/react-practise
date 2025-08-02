export const getApiData = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=46e006f3&s=titanic"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
