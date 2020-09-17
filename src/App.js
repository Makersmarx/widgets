import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React',
    content: 'Its a JS framework',
  },
  {
    title: 'Is this fun',
    content: 'Its always fun coding and learning',
  },
  {
    title: 'React Hooks practice',
    content: 'Wow I am learning stuff',
  },
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
