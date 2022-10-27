import { 
  Card, CardActions,
  CardContent, Button,
  Divider, Typography
  } from '@mui/material';

export default function Flashcard({rank, phrase, definitions, video_link, example_sentences}) {
  return(
    <Card sx={{width:'90%', textAlign: 'left'}}>
      <CardContent>
        <Typography sx={{  fontSize: 12 }} color='text.secondary'>Frequency - {rank}</Typography>
        <Typography variant='h5'>{phrase}</Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>{definitions[0].parts_of_speech}</Typography>
        <Typography variant='body2'>{definitions[0].definition.map((e,i) => (
          e + ';'
        ))}</Typography>
        <Divider/>
        <Typography sx={{  fontSize: 14, mb: 0.5 }} color='text.secondary'>Example sentences</Typography>
        {example_sentences.map((e,i) => (
          <Typography key={i}>{i+1}. {e}</Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small" href={video_link}>Learn how to pronounce '{phrase}'</Button>
      </CardActions>
    </Card>
  )
}