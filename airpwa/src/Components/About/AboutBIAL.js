import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import AboutBIALTiles from './AboutBIALTiles';


export default function AboutBIAL() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Podcasts & E-Books" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <AboutBIALTiles/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Learn more about BIAL',
  description:
    "Learn & Know more about the initiatives undertaken by Kempegowda International Airport Bengaluru",
  image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--njJhFTbZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/7jx6pks25uwbu20tcs20.gif',
  imgText: 'Employee Profile',
  linkText: 'Continue reading…',
};