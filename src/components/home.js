import React from 'react'
//import { Card, Elevation, Slider } from '@blueprintjs/core';
import { Carousel } from 'react-bootstrap';
import CardGrid from './CardGrid';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
//import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
//import styles from '../static/css/app.css';
import Header from './Header';


/*const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};*/

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  layout: {
    width: 'auto',
    //marginLeft: theme.spacing.unit * 3,
    //marginRight: theme.spacing.unit * 3,
    marginLeft: 200,
    marginRight: 300,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    width: 'auto',
    //marginLeft: theme.spacing.unit * 3,
    //marginRight: theme.spacing.unit * 3,
    marginLeft: 200,
    marginRight: 300,
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];


class Home extends React.Component
{
  
  constructor(props) {
    super(props);
  }

  
  render() {
    return(
      <div>
        <Header/>
        <Carousel>
          <Carousel.Item>
            <img width={500} height={400} alt="500x400" src="../static/img/home1.jpg" />
            <Carousel.Caption>
              <h3>Enjoy the Game</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={400} alt="500x400" src="../static/img/home2.jpg" />
            <Carousel.Caption>
              <h3>Love the Game</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={500} height={400} alt="500x400" src="../static/img/home3.jpg" />
            <Carousel.Caption>
              <h3>Create Experiences</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br/>
        <CardGrid/>
        <br/>
      {/* Footer */}
      <footer className={classNames(styles.footer, styles.layout)}>
        <Grid container spacing={320} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="title" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subheading" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      {/* End footer */}
     </div>
    );
  }
}

export default Home

 
