import { Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <section style={{position: 'fixed', left: '0', bottom: '0', width: '100%'}}>
      <div>
        <div>
          <Link color='inherit' href='https://github.com/39otsu/language_learning' underline='none'>
            <Typography variant='subtitle2' sx={{textAlign:'center'}}>
              {new Date().getFullYear().toString()} | MC
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  )
}