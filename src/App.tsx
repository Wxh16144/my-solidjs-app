import { Component, } from 'solid-js';
import { Bookshelf } from './components/Bookshelf';
import Counter from './components/Counter';
import Home from './components/Home';
import SwitchStudy from './components/SwitchStudy';


const App: Component = () => {
  return (
    <div>
      <Bookshelf name='solid'/>
      <Counter />
      <Home isLoggedIn={false} firstName='solid'/>
      <SwitchStudy />
    </div>
  );
};

export default App;
