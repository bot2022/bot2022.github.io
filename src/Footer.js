import { Typography } from '@mui/material';
import * as React from 'react';

const Footer = ({ page, ...otherProps }) => {
  return (
    <footer className="footer" style={{
      backgroundColor: '#000e54',
      color: 'white',
      // position: page === 'Home' ? 'fixed' : 'relative',
      left: 0,
      bottom: 0,
      width: '100wh',
      padding: '1rem',
      textAlign: 'center',
    }}>
      <div className="container">
        <div className="content has-text-centered">
          <Typography variant='body2'>
            Presented by <strong>Syracuse University Orange Robotics</strong>. Hosted on GitHub.
          </Typography>
          <Typography variant='body2'>
            Contact us through <a href="mailto:suorangerobotics@gmail.com"
              style={{
                color: 'white',
              }}
            >
              suorangerobotics@gmail.com
            </a>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;