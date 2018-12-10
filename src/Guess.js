import React from 'react';
// to create a component you have two options
// function => Stateless component, easy to make but less powerful
// class => Stateful components, powerful, more stuff to do, but more typing


//React distinguishes components and DOM elements by capitalizing it

// export default function Ingredient(props) {
//   //need to return JSX, JSX is just HTML (but not really)
//   // JSX is a subset of XML rather than HTML, any text that is in XML you have to explictly close so:
//   // in JSX <img src="poodle.png" />
//   // also in JSX the class name has to be className to avoid the conflict with class key word in JavaScript
//   return (
//     <div className="ingredients">
//       <div className="ingredient-name">{ props.name }</div>
//       <div className="ingredient-quantity"> { props.quantity } </div>
//     </div>
//   )
// }

//to render the component you just wrote, you need to render it. Render comes from index.js 


/* ======= exports ====== */
// 1) there can only be one default exports per file
// 2) You can also have:

//import default is: import './fizz'
// export const foo = 'bar';
// import { foo } from './ingredients';
// export function Something () {}
// importing named components: import Something from './something'

// props are like arguments to fn, they are a way to modify what happens a function, it's like a data 


/* ======= convert it a data like from a server ====== */


export default function Guess(props) {
  //need to return JSX, JSX is just HTML (but not really)
  // JSX is a subset of XML rather than HTML, any text that is in XML you have to explictly close so:
  // in JSX <img src="poodle.png" />
  // also in JSX the class name has to be className to avoid the conflict with class key word in JavaScript
  console.log(props)
  return (
    <div className="guesses">
      <div className="recent-guess">{ props.recent }</div>
      <div className="current-guess"> { props.current } </div>
      <div className="history-guess">{ props.history } </div>
    </div>
  )
}