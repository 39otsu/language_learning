import { Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <section style={{position: 'fixed', left: '0', bottom: '0', width: '100%'}}>
      <div>
        <div>
          <Typography variant='subtitle2' sx={{textAlign:'center'}}>
            {new Date().getFullYear().toString()} | MC
          </Typography>
        </div>
      </div>
    </section>
  )
}