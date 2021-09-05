import React,{ useState } from 'react';
import './App.css';
import { 
  Button,
  Box,
  Card,
  CardContent,
  makeStyles 
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function App() {
  const [ count , setCount ] = useState(0);
  const classes = useStyles();

  return (
    <div className="App">
      
      <Card className={classes.root}>
        <h1>counter <br/>{ count }</h1>
        <CardContent>
          <Box component="span" m={2} className="box">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => setCount(count-1)}
              > Decerease 
            </Button>
            <Button 
              variant="contained" 
              color="default"
              onClick={() => setCount(0)}
              > Reset 
            </Button>
            <Button 
              variant="contained" 
              color="secondary"
              onClick={() => setCount(count+1)}
              > Increase 
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
