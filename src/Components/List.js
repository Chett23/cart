import React from 'react';
import Button from './Button';


export const List = ({ items, functionality, title, btnValue, style }) => (
  <div style={{borderLeft: '1px solid black', padding: '20px'}}>
    <h3 style={{ textAlign:'center', width: '100%' }}>{title}</h3>
    <ul
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        listStyle: 'none',
        ...style,
      }}
    >
      {
        items.length > 0 
        ?
        items.map((item, i) =>
        <li
          key={i}
          style={{
            width: '150px',
            height: '250px',
            border: '1px solid lightGrey',
            margin: '5px',
            backgroundColor: 'rgb(200,200,200)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            {<strong>{item.name}</strong>}
          </div>
          <div>
            <img style={{ width: '150px', height: '150px' }} src={item.image} alt='' />
          </div>
          <div>
        {title !== 'Cart' ? `Price: ${item.price}` : `Price: $${(item.price * item.qty).toFixed(2)}`}
          </div>
          <div>
            {title === 'Cart' && `Quantity: ${item.qty}`}
          </div>
        <Button onClick={functionality(item)} style={{ backgroundColor: 'rgb(160,160,160)', height: '30px' }}>{btnValue}</Button>
        </li>
      )
      :
      title === 'Cart'
      ?
      <strong style={{width: '100%', textAlign: 'center'}}>There is nothing in your Cart.</strong>
      :
      <strong style={{width: '100%', textAlign: 'center'}}>There is nothing in your Inventory.</strong>
    }
    </ul>
  </div>
)