import { 
  Card, CardContent, 
  Button,Typography 
  } from '@mui/material';

export default function Tile({phrase, rank}) {
  return(
    <>
      <Button href={'/word?jp=' + phrase} sx={{width:'100%', textAlign: 'left'}}>
      <Card sx={{width:'100%', textAlign: 'left'}}>
        <CardContent>
          <Typography sx={{  fontSize: 12 }} color='text.secondary'>frequency - {rank}</Typography>
          <Typography variant='h5'>{phrase}</Typography>
        </CardContent>
      </Card>
      </Button>
    </>

  )
}