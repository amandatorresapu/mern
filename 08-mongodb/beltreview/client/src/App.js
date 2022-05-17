import logo from './logo.svg';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import './App.css';

import Form from './components/Form';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <div className="App container">
        
        <Switch>
          <Route exact path="/"> 
          <Form></Form>
          <hr />
          <AllProducts></AllProducts>
         
          </Route>
          <Route exact path="/products/:_id">
            <h1>showing info about one product</h1>
            <OneProduct></OneProduct>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>

    </>
  );
}

export default App;
