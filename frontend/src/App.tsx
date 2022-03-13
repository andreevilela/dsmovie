import React from 'react';
import {ReactComponent as GithubIcon} from './assets/img/github.svg' 

function App() {
  return (
    <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/andreevilela" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/andreevilela</p>
                </div>
            </a>
        </div>
    </nav>
</header>
  );
}

export default App;
