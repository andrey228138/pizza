import React, { useEffect, useState } from "react";
import Categories from "../component/home/categories"; 
import Sort from "../component/home/sort"
 import PizzaBlock from "../component/home/pizzaBlock/pizzaBlock.jsx"
  import Skeleton from "../component/home/pizzaBlock/skeleton"

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const url = activeIndex === 0 
    ? "https://685a38f89f6ef96111556bfb.mockapi.io/items" 
    : `https://685a38f89f6ef96111556bfb.mockapi.io/items?category=${activeIndex}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки данных:", err);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeIndex]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={activeIndex}
          onClickCategory={(index) => setActiveIndex(index)}  // Исправлено: передаём индекс
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </>
  );
}