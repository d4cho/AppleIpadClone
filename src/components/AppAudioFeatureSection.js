import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { GridContainer, SectionHeaderContent } from '../Common/StyledComponent';
import '../App.css';

const AppAudioFeatureSection = () => {
    return (
        <Grid container spacing={5} sx={{ pt: 5 }}>
            <Grid item xs={12}>
                <GridContainer
                    container
                    direction='column'
                    justifyContent='space-between'
                    alignItems='stretch'
                    className='feature-grid-container'
                >
                    <Grid item sx={{ p: 5 }}>
                        <SectionHeaderContent maxWidth='767px' className='thunderbolt-text'>
                            Four speaker audio delivers theatre-like sound and support for Dolby
                            Atmos.
                        </SectionHeaderContent>
                    </Grid>
                    <Grid item sx={{ m: '0 auto' }} style={{ position: 'relative' }}>
                        <Typography
                            className='speaker-sprite top-left'
                            component='div'
                        ></Typography>
                        <Typography
                            className='speaker-sprite top-right'
                            component='div'
                        ></Typography>
                        <Typography component='div' className='image-audio'></Typography>
                        <Typography
                            className='speaker-sprite bottom-left'
                            component='div'
                        ></Typography>
                        <Typography
                            className='speaker-sprite bottom-right'
                            component='div'
                        ></Typography>
                    </Grid>
                </GridContainer>
            </Grid>
        </Grid>
    );
};

export default AppAudioFeatureSection;
