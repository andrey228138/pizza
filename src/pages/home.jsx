import React, { useEffect, useState } from "react";
import Categories from "../component/home/categories";
import Sort from "../component/home/sort"
import PizzaBlock from "../component/home/pizzaBlock/pizzaBlock.jsx"
import Skeleton from "../component/home/pizzaBlock/skeleton"

function HomePage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const url = activeIndex === 0 
    ? "https://685a38f89f6ef96111556bfb.mockapi.io/items" 
    : `https://685a38f89f6ef96111556bfb.mockapi.io/items?category=${activeIndex}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeIndex, url]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={activeIndex}
          onClickCategory={(index) => setActiveIndex(index)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}

export default HomePage;