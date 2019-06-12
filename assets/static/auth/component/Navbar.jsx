import React from 'react';

function Navbar() {
  return (
    <div className="main main-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Guest&apos;s posts
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#/post">Create a post</a>
              <a className="dropdown-item" href="#/posts">View posts</a>
              {process.env.NODE_ENV === 'production' ? null : <a className="dropdown-item" href="/sent_emails">Virtual emails</a>}
            </div>
          </div>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/hiroya8649/auth-practice" data-toggle="tooltip" title="About this project">
                <img className="git-icon" alt="git project" src="http://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
