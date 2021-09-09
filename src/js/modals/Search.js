export default async function getSearchResults(query) {
  try {
    const response = await fetch(
      `https://paneer-store.herokuapp.com/dishes/?q=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
