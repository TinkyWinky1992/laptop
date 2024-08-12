import { useEffect, useState } from 'react';
  //@ts-ignore
import { CSSTransition } from 'react-transition-group';
import { MainAppBar, DateContextProvider } from './components';
import Grid from '@mui/material/Grid';
import './App.css'

function App() {
  //@ts-ignore
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { action } = event.data;
      console.log('Received message action:', event.data);
      setIsOpen(action);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);


  return (
      <Grid container className='App'>
          <Grid item className='test' sx={{
            width: {
              lg: '100rem',
              xs: "50rem"
            },
            height: {
              lg: '50rem',
              xs: "30rem"
            },
            borderRadius: '12px',
            border: '2px solid #515151',
            position: 'relative',
          }}>
            <DateContextProvider>
              <MainAppBar/>
            </DateContextProvider>
            
          </Grid>

      </Grid>
   
  )
}

export default App
/*
    <CSSTransition
      in={isOpen}
      timeout={500}
      classNames="fade"
      unmountOnExit
    >
 </CSSTransition>
*/