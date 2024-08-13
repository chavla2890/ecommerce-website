import { Button, colors, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'; // For Material-UI v5


const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10' container sx={{ bgcolor: "black", color: "white", py: 3 }}>
                <Grid item xs={12} small={6} ms={3}>

                    <Typography className='pb-5' varient='h6'>Company</Typography>
                    <div>

                        <Button className='pb-5' varient='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Partens</Button>
                    </div>

                </Grid>

                <Grid item xs={12} small={6} ms={3}>

                    <Typography className='pb-5' varient='h6'>Solutions</Typography>
                    <div>

                        <Button className='pb-5' varient='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Partens</Button>
                    </div>

                </Grid>
                <Grid item xs={12} small={6} ms={3}>

                    <Typography className='pb-5' varient='h6'>Company</Typography>
                    <div>

                        <Button className='pb-5' varient='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Partens</Button>
                    </div>

                </Grid>
                <Grid item xs={12} small={6} ms={3}>

                    <Typography className='pb-5' varient='h6'>Company</Typography>
                    <div>

                        <Button className='pb-5' varient='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' varient='h6'>Partens</Button>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default Footer