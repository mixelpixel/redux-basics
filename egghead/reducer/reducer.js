const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state +-1;
    default:
    return state;
  }
}

const { createStore } = Redux;
// equivalent to either
// var createStore = Redux.createStore;
// import { createStore } from 'redux';

const store = createStore(counter);

// 3 important methods
// // 1
// console.log(store.getState()); // ---> 0
// // 2
// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState()); // ---> 1
// // 3 - written this way the first time the page is clicked we see 1
// store.subscribe(() => {
//   document.body.innerText = store.getState();
// });
//
// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' });
// });

// 3.5 written this way, zero shows up first
const render = () => {
  document.body.innerText = store.getState(); // <--- was in store.subscribe
};

store.subscribe(render);

render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
