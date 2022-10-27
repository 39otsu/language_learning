import { useEffect, useState } from 'react';
import { 
  Box, Typography
  } from '@mui/material';
import Tile from './tile';


export default function Query({term}) {

  const [results, setResults] = useState([]);

  useEffect(()=>{
    if (term.length > 0){
      fetch(process.env.REACT_APP_SERVER + '/s/' + term).then((r) => {
        r.json().then((r) =>{
          setResults(r.result)
        })
      })
    }
  },[])

  function createTile(rank, phrase, key) {
    return (<Tile rank={rank} phrase={phrase} key={key}/>)
  }
  return(
    <Box
    sx={{display: 'flex', gap: '0px', width: '100%'}}
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    flexDirection='column'>
      <Typography sx={{  fontSize: 12 }} color='text.secondary'>displaying {results.length} results.</Typography>
      {
        (results.length > 0) ?
        results.map((e,i) => (
          createTile(e.rank, e.phrase, i)
        ))
        :
        <></>
      }
    </Box>
  )
    

}