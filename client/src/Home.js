import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  card: {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  cardActionArea: {
    height: '100%',
  },
  cardContent: {
    height: '100%',
  },
}));

const cards = [
  {
    title: 'Background Fetch',
    description: 'A web API for creating uploads/downloads in the background',
    spec: null,
    tutorial: null,
  },
  {
    title: 'Background Fetch2',
    description: 'A web API for creating uploads/downloads in the background asdf sadf sdfdasf sdf sdf dsfadsf sadf' +
      'asdsads asljdnajsd lasjflkasf lsakjflkasmflas lksajfdlksaf lsakmdf;kasmf ;askdfmlaskf lskamnfdlksanf laksjfkasf',
    spec: null,
    tutorial: null,
  },
  {
    title: 'Background Fetch3',
    description: 'A web API for creating uploads/downloads in the background',
    spec: null,
    tutorial: null,
  },{
    title: 'Background Fetch4',
    description: 'A web API for creating uploads/downloads in the background',
    spec: null,
    tutorial: null,
  },
];

function MediaCard(cardData) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <CardContent className={classes.cardContent} >
          <Typography gutterBottom variant="h5" component="h2">
            {cardData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Spec
        </Button>
        <Button size="small" color="primary">
          Blog
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Web API Tests
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Try out different Web APIs with a bunch of options.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.title} xs={12} sm={6} md={4}>
                {MediaCard(card)}
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
