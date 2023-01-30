export async function fetchMeals(search) {
    let api = null;
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search ? search : ""}`)
        .then((res) => res.json())
        .then((data) => {
            api = data.meals;
        });
    return api;
}