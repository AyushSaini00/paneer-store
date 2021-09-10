export default async function getAllDishes() {
  try {
    const response = await fetch(`https://paneer-store.herokuapp.com/dishes`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
