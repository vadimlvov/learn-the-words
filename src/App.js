import React from 'react';
import HeaderBlock from './companents/HeaderBlock';
import Header from './companents/Header';
import Paragraph from './companents/Paragraph/Index';
import Card from './companents/Card';
import {ReactComponent as ReactLogo} from './logo.svg';

const wordList = [
  {
    eng: 'between',
    rus: 'между'
  },
  {
    eng: 'high',
    rus: 'высокий'
  },
  {
    eng: 'really',
    rus: 'действительно'
  },
  {
    eng: 'something',
    rus: 'что-нибудь'
  },
  {
    eng: 'most',
    rus: 'большинство'
  },
  {
    eng: 'another',
    rus: 'другой'
  },
  {
    eng: 'much',
    rus: 'много'
  },
  {
    eng: 'family',
    rus: 'семья'
  },
  {
    eng: 'own',
    rus: 'личный'
  },
  {
    eng: 'out',
    rus: 'из/вне'
  },
  {
    eng: 'leave',
    rus: 'покидать'
  },
];

const App = () => {
  return (
    <>
      <HeaderBlock >
          <Header>Время учить слова онлайн.</Header>
          <Paragraph>Используйте карточки для запоминания и пополняйте словарный запас.</Paragraph>
      </HeaderBlock>
      <div>
        {
          wordList.map(({eng, rus}, index) => (
            <Card key={index} eng={eng} rus={rus}/>
          ))
        }
      </div>
      <HeaderBlock hideBackground>
          <Header>Ещё один заголовок.</Header>
          <Paragraph>Ну здорово же.</Paragraph>
          <ReactLogo />
      </HeaderBlock>
    </>
  );
}

export default App;
