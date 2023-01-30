import { useCallback, useEffect, useState } from "react";
import { fetchMeals } from "./fetch";
import CardContainer from "@/module/card_container";
import SearchBar from "@/module/search_bar";
import Footer from "@/module/footer";


const Index = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = useCallback(async (search) => {
    const meals = await fetchMeals(search);
    setMeals(meals);
    console.log(meals);
  });

  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div className='bg-slate-100'>
      <div className="flex flex-wrap items-center justify-center sm:justify-between px-10 py-5 bg-teal-500">
        <h1 className='drop-shadow-2xl text-6xl text-slate-100 pb-5 sm:pb-0'>Mealty</h1>
        <SearchBar handleFetch={handleFetch} handleChange={handleChange} search={search} />
      </div>
      <CardContainer meals={meals} />
      <Footer />
    </div>
  );
};

export default Index;