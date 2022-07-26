import React from 'react';
// import { Route } from "react-router-dom";
import MainPage from './pages/MainPage';
// import ListPage from "./Pages/ItemPage/ItemPage"; 
class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* <Route path="" exact component={MainPage} /> */}
        {/* <Route path="/list/:id" exact component={ListPage} /> */}
        <MainPage />
      </div>
    );
  }
}

export default App;