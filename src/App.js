import React from 'react';
import './App.css';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';
import MainApp from './components/main';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
          <MainApp />
      </div>
    </Provider>
  );
}

export default App;
