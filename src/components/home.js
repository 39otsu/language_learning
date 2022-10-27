import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Results from './results';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './page.css'

export default function Home() {

  const [input, setInput] = useState('');
  const [term, setTerm] = useState('');

  function handleChange(e) {
    setInput(e.target.value)
  }

  async function handleSubmit(e) {
    setTerm(input);
  }
  return(
    <Box
      sx={{display: 'flex', flexDirection: 'column'}}
      alignItems='center'
      justifyContent='center'>
      <Box
        component='form'
        sx={{'& .MuiTextField-root': { m: 7, width: '40rem' }, display: {xs: 'none', md: 'flex'}}}
        justifyContent='center'
        noValidate
        onSubmit={handleSubmit}
        autoComplete='off'
      >
        <TextField
          id='outlined-requred'
          label='Japanese Words or Text'
          name='search'
          value={input}
          onChange={handleChange}
        />
      </Box>
      <Box
        component='form'
        sx={{'& .MuiTextField-root': { m: 5 }, display: {xs: 'flex', md: 'none'}}}
        justifyContent='center'
        noValidate
        onSubmit={handleSubmit}
        autoComplete='off'
      >
        <TextField
          required
          id='outlined-requred'
          label='Japanese Words or Text'
          name='search'
          value={input}
          onChange={handleChange}
        />
      </Box>
      <Results searchterm={term}/>

    </Box>
  )
}