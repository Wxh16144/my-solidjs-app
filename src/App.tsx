import { Component, } from 'solid-js';
import { Bookshelf } from './components/Bookshelf';
import Counter from './components/Counter';
import Home from './components/Home';
import SwitchStudy from './components/SwitchStudy';
import Test from './components/Test';


const App: Component = () => {
  return (
    <div>
      <Bookshelf name='solid' />
      <Counter />
      <Home isLoggedIn={false} firstName='solid' />
      <SwitchStudy />
      <Test>
        123
      </Test>
    </div>
  );
};

export default App;
