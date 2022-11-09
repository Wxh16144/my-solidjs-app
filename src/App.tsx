import { Component, } from 'solid-js';
import { Bookshelf } from './components/Bookshelf';
import Counter from './components/Counter';


const App: Component = () => {
  return (
    <div>
      <Bookshelf name='solid'/>
      <Counter />
    </div>
  );
};

export default App;
