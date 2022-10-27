import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Flashcard from './flashcard';
import Query from './query';
import default_result from '../data/default_result';

export default function Results(){

  const [count, setCount] = useState(0);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [queryString, setQueryString] = useState(searchParams.get('search'));
  
  //{sp}
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER + '/count').then((r) => {
      r.json().then((re) => {
        setCount(re.entries)
      })
    })
  }, [])

  return (
    <Box
      sx={{display: 'flex', gap: '30px', width: '100vw', maxWidth: '40rem'}}
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      flexDirection='column'
      >
      {(!queryString)? 
      <>
        <Box
          padding='10px'
          sx={{display: 'flex', maxWidth: '100vw'}}
          flexDirection='column'
          >
          Enter any Japanese text in the search box and Nihon Go! will search across {count} entries for you. 
          Here’s an example of what can be delivered to you.
        </Box>
        <Box 
          sx={{width: '100%', maxWidth: '100vw', display: 'flex'}}
          flexDirection='column'
          alignItems='center'
          >
          <Flashcard 
            rank={default_result.rank}
            phrase={default_result.phrase}
            definitions={default_result.definitions}
            video_link={default_result.video_link}
            example_sentences={default_result.example_sentences}
            />
        </Box>
      </>
      :
      <Query term={queryString}/>
      }
    </Box>
  )

}