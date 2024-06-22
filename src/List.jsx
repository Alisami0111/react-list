import React from 'react'

const List = () => {
    const fruits = [
        {name:"apple", calories: 95}, 
        {name:"orange",calories: 45}, 
        {name:"banana",calories: 105}, 
        {name:"coconut",calories: 159},
        {name:"pineapple",calories: 65}
    ];

    fruits.sort((a,b)=>a.name.localeCompare(b.name))

    const listItems = fruits.map(
        fruit =>  
        <li key={fruit.name}>
            {fruit.name} : &nbsp;
            {fruit.calories}
        </li>
    )
    


  return (
    <ul>{listItems}</ul>
    
  );
}

export default List