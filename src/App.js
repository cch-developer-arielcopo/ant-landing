// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Home/Nav0';
import Footer from './Home/Footer0';
import Home from './Home';
import Page2 from './Page2';
import Page3 from './Page3';

import {
  Nav00DataSource,
  Footer00DataSource,
} from './Home/data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          {/* <Header dataSource={Nav00DataSource} isMobile={this.isMobile} /> */}
          <Route exact path="/" component={Home} /> 
          <Route path="/Page2" component={Page2} />
          <Route path="/Page3" component={Page3} />
          {/* <Footer dataSource={Footer00DataSource} isMobile={this.isMobile} /> */}
        </div>
      </Router>
    );
  }
}

export default App;