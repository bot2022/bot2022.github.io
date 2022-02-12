import * as React from 'react';

const Footer = ({ page, ...otherProps }) => {
  return (
    <footer className="footer" style={{
      backgroundColor: '#000e54',
      color: 'white',
      position: page === 'Home' ? 'fixed' : 'relative',
      left: 0,
      bottom: 0,
      width: '100%',
      padding: '0.5rem',
      textAlign: 'center',
    }}>
      <div className="container">
        <div className="content has-text-centered">
          <p>
            Presented by <strong>Syracuse University Orange Robotics</strong>. The source code is hosted on GitHub.
          </p>
          <p>
            Contact us through <a href="mailto:suorangerobotics@gmail.com"
              style={{
                color: 'white',
              }}
            >
              suorangerobotics@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;