import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import Paper from '@material-ui/core/Paper';
import toast from 'react-hot-toast';
import QRCodeScanner from '../QRCodeScanner/QRCodeScanner';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Home() {
  const classes = useStyles();

  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  function handleShow(){
    setShow(show => !show);
  }

  const handleClickOpen = () => {
    setOpen(true);
    setShow(show => !show);
  };

  const handleClose = () => {
    setOpen(false);
  };


  React.useEffect(() => {

    notifyWelcome();
  }, []);


  const notifyWelcome = () => {
    console.log("here")
    toast.success("Desk Buddy welcomes you !");

  };

  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="lg">
          <Header title="AIR DASH" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Container className={classes.cardGrid} maxWidth="lg">
                <br/><br/>
              <Grid container spacing={3}>
                {dashboardStats.map((paper) => (
                  <Grid item key={paper.title} xs={6} sm={6}>
                    <Paper elevation={0} className={classes.paper}>
                      <Grid>
                        <img alt="icon" src={paper.icon} className={classes.icon} />
                      </Grid>
                      <Typography variant='body1' className={classes.divHeading}>
                        {paper.title}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <br/>
              <br/>
              <Button
                variant="contained"
                color="primary"
                onClick={handleShow}
              >
                <b>Open/Close Camera</b>
              </Button>
              <br/>
              <br/>
              {show && 
              <>
              <QRCodeScanner />
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
              >
                <b>Capture</b>
              </Button>
              </> }

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Digital Face ID"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Welcome on-board Darshan!
                    Face ID Contactless check-INs & validations on safety rules will assist you at various checkpoints 
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose} autoFocus>
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Container>
          </main>
        </Container>
        <br />
    </React.Fragment>
  );
}


const mainFeaturedPost = {
  title: 'AIR DASH',
  description:
    "Digital Ally for Seamless Hours. Building Digital Airport and enhancing Customer onboarding experience with personalised shop marketplace offerings across all the airports.",
    image: "http://cdn.shopify.com/s/files/1/0061/7735/7891/articles/airplanes-actuators_17389e9d-f144-4f38-8d51-f8632a63c39c_1200x1200.jpg?v=1585138977",
  imgText: 'main image description',
  linkText: 'Continue reading…'
};


const dashboardStats = [
  {
    title: 'Travel Checklist',
    icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/verification-1681052-1428000.png",
  },
  {
    title: 'Medical Guidelines',
    value: '1',
    icon: "https://cdn.iconscout.com/icon/free/png-512/medical-127-129383.png",
  },
];


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  leaderBoard: {
    width: '100%',
    height: '400px',
    overflowY: 'auto',
    overflowX: 'hidden',
    borderStyle: 'solid',
    borderColor: '#FDCB6B',
    borderRadius: '10px',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  leaderBoardParent: {

  },
  chart: {
    height: 10
  },
  divHeading: {
    color: '#593B90'
  },
  icon: {
    marginRight: theme.spacing(2),
    width: '40%',
    height: '40%',
    padding: '5%'
  },
}));