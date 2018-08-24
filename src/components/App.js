import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import styles from './App.css';
import ExpenseDashboard from './categories/expenses/ExpenseDashboard';
import Dashboard from './categories/Dashboard';

class App extends Component {

  render() {

    return (
      <Router>
        <div className={styles.app}>

          <header>
            <Header/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/categories" component={Dashboard}/>
              <Route exact path="/expenses" component={ExpenseDashboard}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          
        </div>
      </Router>
    );
  }
}

export default App;