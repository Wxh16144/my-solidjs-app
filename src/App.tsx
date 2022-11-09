import { Component, } from 'solid-js';
import { Bookshelf } from './components/Bookshelf';
import Counter from './components/Counter';
import Home from './components/Home';


const App: Component = () => {
  return (
    <div>
      <Bookshelf name='solid'/>
      <Counter />
      <Home isLoggedIn={false} firstName='solid'/>
    </div>
  );
};

export default App;
