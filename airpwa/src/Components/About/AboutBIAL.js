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
          <Header title="About BIAL" />
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
  image: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/8/31/w900X450/Call_for_creativity.jpg?w=400&dpr=2.6',
  imgText: 'Employee Profile',
  linkText: 'Continue reading…',
};