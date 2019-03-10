import React from 'react';
import Button from './Button';


export const List = ({ items, functionality, title, btnValue }) => (
  <div>
    <h4>{title}</h4>
    <ul
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        listStyle: 'none',
      }}
    >
      {items.map((item, i) =>
        <li
          key={i}
          style={{
            width: '150px',
            height: '250px',
            border: '1px solid lightGrey',
            backgroundColor: '#D2D2D2',
            margin: '5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {item.name}
          </div>
          <div>
            <img style={{width:'100px', height: '100px'}}src={item.img} />
          </div>
          <div>
            Price: {item.price}
          </div>
          <div>
            {!title || `Quantity: ${item.qty}`}
          </div>
          <Button onClick={functionality(i)}>{btnValue}</Button>
        </li>
      )}
    </ul>
  </div>
)