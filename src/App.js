import React from 'react';
import HeaderBlock from './companents/HeaderBlock';

const App = () => {
  return (
    <>
      <HeaderBlock 
        title="Учите слова онлайн." 
        description="Используйте карточки для запоминания и пополняйте словарный запас."/>
      <HeaderBlock 
        title="Нам нравиться это."
        hideBackground/>
    </>
  );
}

export default App;
