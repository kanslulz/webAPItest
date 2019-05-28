import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import featureDescriptors from './features/feature-descriptors.js';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    padding: theme.spacing(8, 2),
  },
  card: {
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  cardActionArea: {
    height: '100%',
  },
  cardContent: {
    height: '100%',
  },
}));

function MediaCard(featureDescriptor) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <CardContent className={classes.cardContent} >
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {featureDescriptor.name}
          </Typography>
          <Divider style={{marginBottom: '10px'}} />
          <Typography variant="body2" color="textSecondary" component="p">
            {featureDescriptor.description}
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
          <Grid container spacing={4} direction="row" justify="center" alignItems="center">
            {featureDescriptors.map(fd => (
              <Grid item key={fd.name} xs={12} sm={6} md={4}>
                {MediaCard(fd)}
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
