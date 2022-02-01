import '../App.css';
import Grid from '@mui/material/Grid';
import ThunderBoltCard from '..//atoms/ThunderBoltCard';
import MicrophoneCard from '../atoms/MicrophoneCard';

const IPadProCards = () => {
    return (
        <div>
            <Grid
                container
                spacing={4}
                direction='row'
                justifyContent='center'
                alignItems='center'
                style={{ marginTop: '50px' }}
            >
                <Grid item xs={10} md={6} lg={6} xl={6}>
                    <ThunderBoltCard />
                </Grid>
                <Grid item xs={10} md={6} lg={6} xl={6}>
                    <MicrophoneCard />
                </Grid>
            </Grid>
        </div>
    );
};

export default IPadProCards;
