import * as React from 'react';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import Team from './Team';
import Robot from './Robot';
import Apply from './Apply';
import { Container } from '@mui/material';

const renderContent = (page) => {
  if (page === 'Home') {
    return (
      <div>
        <h1>Orange Robotics</h1>
        <h3>We are recruiting!</h3>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>

        </p>

        <div>

        </div>
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
    <div className="App">
      <ResponsiveAppBar
        page={page}
        setPage={setPage}
      />
      <Container maxWidth="md">
        
        
        {
          renderContent(page)
        }

       
      </Container>
      <Footer page={page}/>
    </div>
  );
}

export default App;
