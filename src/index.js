import React from 'react';
import ReactDom from 'react-dom';
import HeaderBlock from './companents/HeaderBlock';
import './index.css';

const AppList = () => {
  const items = ['item1', 'item2', 'item3', 'item4'];
  const firstItem = <li>Item 0</li>;

  const isAuth = true;

  return (
    <ul>
      {isAuth ? firstItem : null}
      {items.map(item => <li>{item}</li>)}
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
}

const AppHeader = () => {
  
  return (
    <h1 className = "header">Hello World!!!</h1>
  );
}

const AppInput = () => {
  const placeholder = 'Type text...';
  return (
    <label htmlFor = "search">
      <input id = "search" placeholder={placeholder} />
    </label>
  );
}

const App = () => {
  return (
    <React.Fragment>
      <HeaderBlock />
    <AppHeader />
    <AppInput />
    <AppList />
    <AppHeader />
    <AppList />
  </React.Fragment>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
