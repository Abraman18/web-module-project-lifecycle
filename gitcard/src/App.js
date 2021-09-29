import './App.css';
import React from 'react';
// import axios from './node_modules/axios';

class App extends React.Component {
  // constructor() {
  //   super();
  //   componentDidMount(){
  //     console.log("App: Mounted");
  //     axios.get('https://api.github.com/users/Abraman18')
  //       .then(res => {
  //         this.setState({
  //           ...this.state,
  //           userData: res.data
  //         })
  //       })
  //   }
  //   }

  render() {
    return (
      <div className="App">
          <body>
             <div class="container">
              <div class="header">
                <img src="./assets/lambdalogo.png" alt="Lambda Logo"/>
                <p>❤️'s</p>
                <img src="./assets/gitlogo.png" alt="GitHub Logo" />
              </div>
              <div class="cards"></div>
              </div>
                
          </body>
      </div>
    );
  }
  
}

export default App;
