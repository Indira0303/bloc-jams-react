import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <nav className="link">
           <br></br>
         <Link to='/' className= "left">Landing</Link>
         <Link to='/library' className= "right">Library</Link>
        </nav>
<div className="mdl-grid center-items">
        <div className="demo-card-image mdl-cell mdl-cell--4-col mdl-shadow--16dp">
        </div>
        </div>

       </header>
       <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
       </main>
      </div>
    );
  }
}

export default App;
