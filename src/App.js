import * as React from 'react';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import Team from './Team';
import Robot from './Robot';
import Apply from './Apply';
import { Button, Container, Link, Typography } from '@mui/material';
import { createTheme, ThemeProvider, styled, responsiveFontSizes} from '@mui/material/styles';

import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import robotImage from "./images/2022body.png";

var theme = createTheme({
  palette: {
    primary: {
      main: '#000e54',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

theme = responsiveFontSizes(theme);

const renderContent = (page, setPage) => {
  if (page === 'Home') {
    return (
      <div style={{
        height: "100%",
        backgroundImage: `url(${robotImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: "true",
        backgroundPosition: "center",
      }}>
        <Container maxWidth="md"
          style={{
            height: "85vh",
            paddingTop: "20vh",
          }}
        >
          
          <Typography variant="h1"
            sx={
              {
                // color: 'white',
                textAlign: 'center',
                marginTop: '1rem',
                marginBottom: '1rem',
              }
            }
            color="primary"
          >
            Syracuse University Orange Robotics
          </Typography>
          <Typography variant="h5">
            
            
          </Typography>
          <Button 
            size="large"
            variant='outlined'
            onClick={() => setPage('Apply')}
            // style={{
            //   color: 'white',
            // }}
          >We are recruiting! Apply Here!</Button>
  
          
          
        </Container>
        {/* <img src={robotImage} alt="Robot"
          style={{
            height: '100%',
            alignSelf: 'center',
          }}
        /> */}
      </div>
      
    )
  } else if (page === 'Team') {
    return <Team />
  } else if (page === 'Robot') {
    return <Robot />
  } else if (page === 'Apply') {
    return <Apply />
  }
}

function App() {
  const [page, setPage] = React.useState('Home');

  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter> 

        <div className="App"
          style={{
            backgroundColor: "#F0FFFF",
            height: "100%"
          }}  
        >
          <ResponsiveAppBar
            page={page}
            setPage={setPage}
          />
            {renderContent(page, setPage)}
          
            {/* <Routes>
              <Route path="/" element={renderContent("Home")} />
              <Route path="/Home" element={renderContent("Home")} />
              <Route path="/Home/Team" element={renderContent("Team")} />
              <Route path="/Home/Robot" element={renderContent("Robot")} />
              <Route path="/Home/Apply" element={renderContent("Apply")} />
            </Routes> */}

          
          <Footer page={page}/>
        </div>
      </BrowserRouter>

    </ThemeProvider>
    
  );
}

export default App;
