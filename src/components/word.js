import { useState, useEffect } from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Flashcard from './flashcard';

export default function Word() {

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [queryString, setQueryString] = useState(searchParams.get('jp'));

  const [results, setResults] = useState({
    rank: 0,
    phrase: '',
    definitions : [{
      parts_of_speech: '',
      definition: ['']
    }],
    video_link: '',
    example_sentences: ['']
  });
  
  useEffect(()=>{
    if (queryString != null){
      fetch(process.env.REACT_APP_SERVER + '/w/' + queryString).then((r) => {
        r.json().then((r) =>{
          setResults(r)
        })
      })
    }
  },[queryString])

  return (
    <Box 
      sx={{display: 'flex', maxpadding: '8px', width: '100vw'}}
      justifyContent='center'
    >
      <Box
      sx={{display: 'flex', gap: '30px', width: '40rem'}}
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      flexDirection='column'
      >
        {(results.definitions.length === 0 || queryString === null) ? 
        <Navigate to='/' replace/>
        :
        <Flashcard 
          rank={results.rank}
          phrase={results.phrase}
          definitions={results.definitions}
          video_link={results.video_link}
          example_sentences={results.example_sentences}
        />     
        }

      </Box>
    </Box>
  )
}