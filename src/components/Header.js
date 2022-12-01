import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price));
  return (<div>
            {props.orders.map(el => (
              <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
    <p className='sum'>Сума: {new Intl.NumberFormat().format(sum)}грн</p>
         </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>В корзині пусто</h2>
  </div>)
}

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false)

  return (
      <header>
          <div>
              <span className='logo'>House Decor</span>
              <ul className='nav'>
                  <li>Про нас</li>
                  <li>Контакти</li>
                  <li>Кабінет</li>
              </ul>
              <FaShoppingCart onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shop-card-button ${cardOpen && 'active'}`} />
        
              {cardOpen && (
                <div className='shop-card'>
                   {props.orders.length > 0 ?
                    showOrders(props) : showNothing()}
                </div>
              )}
          </div>
          <div className='presentation'></div>
    </header>
  )
};
