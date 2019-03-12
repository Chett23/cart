import React from 'react';
import Button from './Button';


export const List = ({ items, functionality, title, btnValue, style }) => (
  <div>
    <h4>{title}</h4>
    <ul
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        listStyle: 'none',
        ...style,
      }}
    >
      {items.map((item, i) =>
        <li
          key={i}
          style={{
            width: '150px',
            height: '250px',
            border: '1px solid lightGrey',
            margin: '5px',
            backgroundColor: 'rgb(255,255,255)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            {item.name}
          </div>
          <div>
            <img style={{ width: '150px', height: '150px' }} src={item.image} />
          </div>
          <div>
            {item.price}{/*!title ? `Price: ${item.price}` : `Price: $${(item.price * item.qty).toFixed(2)}`*/}
          </div>
          {/* <div>
            {!title || `Quantity: ${item.qty}`}
          </div> */}
          <Button onClick={functionality(i)} style={{ backgroundColor: 'rgb(160,160,160)', height: '30px' }}>{btnValue}</Button>
        </li>
      )}
    </ul>
  </div>
)