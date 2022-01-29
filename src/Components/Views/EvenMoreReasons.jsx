import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';

import Container from '@mui/material/Container';

const EvenMoreReasons = () => {
    const sm = useMediaQuery('(max-width:600px)');
    const md = useMediaQuery('(max-width:820px)');

    const useStyles = makeStyles({
        container: {
            border: '1px solid blue',
            paddingLeft: sm ? '20px' : md ? '20px' : '23%',
            paddingRight: sm ? '20px' : md ? '20px' : '23%',
            display: 'flex',
            flexDirection: 'column',
        },
        heading: {
            fontSize: '57px',
        },
        card: {
            height: sm ? '600px' : md ? '701px' : '780px',
            padding: '45px 40px 7px',
            backgroundColor: '#f5f5f7',
        },
    });

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={6}>
                    <h1 className={classes.heading}>Even more reasons to go Pro.</h1>
                </Grid>
                <Grid item xs={12} md={4} lg={6} />
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>card 1</Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>card 2</Card>
                </Grid>
                <Grid item xs={12}>
                    <Card className={classes.card}>card 3</Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>card 4</Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>card 5</Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default EvenMoreReasons;
