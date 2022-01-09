import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import NewsTiles from './NewsTiles';


export default function News() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Curated Travel Checklist" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <NewsTiles/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Curated Travel News',
  description:
    "Be Ready, Learn & Know more about the place where you are traveling",
  image: 'https://image.shutterstock.com/image-photo/tranquil-beach-scene-exotic-tropical-260nw-644740495.jpg',
  imgText: 'Employee Profile',
  linkText: 'Continue reading…',
};