import React, { useState } from 'react';

export default function PizzaBlock({ name, imageUrl, price, types = [], sizes = [] }) {
  const [count, setCount] = useState(0);
  const [activeType, setActiveType] = useState(types.length > 0 ? types[0] : null);
  const [activeSize, setActiveSize] = useState(sizes.length > 0 ? sizes[0] : null);

  const handleAddClick = () => {
    setCount(count + 1);
  };

  if (types.length === 0 || sizes.length === 0) {
    return null;
  }

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt={name} />
        <h4 className="pizza-block__name">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type) => (
              <li
                key={type}
                className={activeType === type ? 'active' : ''}
                onClick={() => setActiveType(type)}
              >
                {type === 0 ? 'тонкое' : 'традиционное'}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size) => (
              <li
                key={size}
                className={activeSize === size ? 'active' : ''}
                onClick={() => setActiveSize(size)}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button className="button button--outline button--add" onClick={handleAddClick}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {count > 0 && <i>{count}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}