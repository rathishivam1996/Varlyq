/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider, connect } from "react-redux";
import { createLogger } from "redux-logger";
import App from "./App";

// // action types
// const TODO_ADD = "TODO_ADD";
// const TODO_TOGGLE = "TODO_TOGGLE";
// const FILTER_SET = "FILTER_SET";

// // reducers
// const todos = [
//   { id: "0", name: "learn redux" },
//   { id: "1", name: "learn mobx" },
// ];

// function notificationReducer(state = {}, action) {
//   switch (action.type) {
//     case TODO_ADD: {
//       return applySetNotifyAboutAddTodo(state, action);
//     }
//     default:
//       return state;
//   }
// }
// function applySetNotifyAboutAddTodo(state, action) {
//   const { name, id } = action.todo;
//   return { ...state, [id]: "Todo Created: " + name };
// }

// function todoReducer(state = todos, action) {
//   switch (action.type) {
//     case TODO_ADD: {
//       return applyAddTodo(state, action);
//     }
//     case TODO_TOGGLE: {
//       return applyToggleTodo(state, action);
//     }
//     default:
//       return state;
//   }
// }

// function applyAddTodo(state, action) {
//   const todo = Object.assign({}, action.todo, { completed: false });
//   return state.concat(todo);
// }
// function applyToggleTodo(state, action) {
//   return state.map((todo) =>
//     todo.id === action.todo.id
//       ? Object.assign({}, todo, { completed: !todo.completed })
//       : todo
//   );
// }
// function filterReducer(state = "SHOW_ALL", action) {
//   switch (action.type) {
//     case FILTER_SET: {
//       return applySetFilter(state, action);
//     }
//     default:
//       return state;
//   }
// }
// function applySetFilter(state, action) {
//   return action.filter;
// }

// // action creators
// function doAddTodo(id, name) {
//   return {
//     type: TODO_ADD,
//     todo: { id, name },
//   };
// }
// function doToggleTodo(id) {
//   return {
//     type: TODO_TOGGLE,
//     todo: { id },
//   };
// }
// function doSetFilter(filter) {
//   return {
//     type: FILTER_SET,
//     filter,
//   };
// }

// const rootReducer = combineReducers({
//   todoState: todoReducer,
//   filterState: filterReducer,
//   notificationState: notificationReducer,
// });

// const logger = createLogger();

// const store = createStore(rootReducer, applyMiddleware(logger));

// function TodoApp({ todos }) {
//   return <ConnectedTodoItem todos={todos} />;
// }

// function TodoList({ todos }) {
//   return (
//     <div>
//       {todos.map((todo) => (
//         <ConnectedTodoItem key={todo.id} todo={todo} />
//       ))}
//     </div>
//   );
// }

// function TodoItem({ todo, onToggleTodo }) {
//   const { name, id, completed } = todo;
//   return (
//     <div>
//       {name}
//       <button type="button" onClick={() => onToggleTodo(id)}>
//         {completed ? "Incomplete" : "Complete"}
//       </button>
//     </div>
//   );
// }

// function mapStateToProps(state) {
//   return {
//     todos: state.todoState,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     onToggleTodo: (id) => dispatch(doToggleTodo(id)),
//   };
// }

// const ConnectedTodoList = connect(mapStateToProps)(TodoList);
// const ConnectedTodoItem = connect(null, mapDispatchToProps)(TodoItem);

// ReactDOM.render(
//   <Provider store={store}>
//     <TodoApp />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
