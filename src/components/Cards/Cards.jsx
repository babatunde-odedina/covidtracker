import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify-content='center'>
        <Grid item xs={12} md={6}>
          <Card className={styles.cases}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Cases
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=','
                />
              </Typography>
              <Typography color='textSecondary'>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant='body2'>Active Cases</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={styles.deaths}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Deaths
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=','
                />
              </Typography>
              <Typography color='textSecondary'>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant='body2'>Number of Deaths</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
