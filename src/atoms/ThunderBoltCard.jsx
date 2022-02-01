import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React from 'react';
import '../App.css';
import { makeStyles } from '@mui/styles';

const ThunderBoltCard = () => {
    const useStyles = makeStyles({
        card: {
            backgroundColor: '#f5f5f7',
            borderRadius: '30px',
            boxShadow: '0px 0px 0px 0px',
            '@media (max-width: 900px)': {
                paddingBottom: '60px',
            },
        },
        text: {
            fontSize: '40px',
            fontWeight: 600,
            paddingLeft: '30px',
            paddingTop: '40px',
            marginBottom: '50px',
            lineHeight: 1.1,
            letterSpacing: '0em',
            '@media (min-width: 600px) and (max-width: 900px)': {
                fontSize: '25px',
            },
        },

        image: {
            width: '700px',
            height: '500px',
            backgroundSize: '700px 500px',
            // position: "relative",
            // left: "20px",
            '@media (max-width: 900px)': {
                width: '400px',
                height: '402px',
                backgroundPosition: '-100px 0px',
            },
            '@media (max-width: 600px)': {
                width: '504px',
                height: '402px',
                position: 'relative',
                right: '20px',
            },
        },
    });

    const classes = useStyles();
    return (
        <React.Fragment>
            <Card className={classes.card}>
                <Typography className={classes.text}>
                    Thunderbolt has 40‑Gbps bandwidth for connecting to displays, drives and more.
                </Typography>

                <img
                    className={classes.image}
                    alt={'thunderbolt'}
                    src={
                        'https://www.apple.com/v/ipad-pro/ah/images/overview/even-more/thunderbolt__c4wnqy3cte0y_large_2x.jpg'
                    }
                />
            </Card>
        </React.Fragment>
    );
};

export default ThunderBoltCard;
