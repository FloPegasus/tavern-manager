import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import Home from './scenes/Home/Home'
import Board from './scenes/Board/Board'
import MailBox from './scenes/MailBox/MailBox';
import UserInfo from './scenes/UserInfo/UserInfo';



class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={() => <Home/>}></Route>
            <Route exact path='/board' component={() => <Board/>}></Route>
            <Route exact path='/mail-box' component={() => <MailBox/>}></Route>
            <Route exact path='/user-info' component={() => <UserInfo/>}></Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
