import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import LoginComponent from './components/Login'
import TodoComponent from './components/Todo'
{/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */}


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <BrowserRouter>
        <Routes path="/*">
          <Route  index element={<LoginComponent />} />
          <Route path="/todoListPage" element={<TodoComponent />} />
        </Routes>

      </BrowserRouter>
      </div>
    );
  }
}

export default App;
