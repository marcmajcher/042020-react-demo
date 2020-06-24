import React from 'react';
import Login from './Login';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {},
    };
  }

  handleLogin = (user) => {
    this.setState({ loggedIn: true , user});
  };

  handleLogout = () => {
    this.setState({ loggedIn: false, user: {} });
  };

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? (
          <div>
            <p>Hello, {this.state.user.firstname}</p>
            <div>
              <button onClick={this.handleLogout}>Log Out</button>
            </div>
          </div>
        ) : (
          <div>
            <p>Hello. Please Log In.</p>
            <Login handleLogin={this.handleLogin}></Login>
          </div>
        )}
      </div>
    );
  }
}


export default App;
