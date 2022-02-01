import * as React from 'react';
import Box from '@mui/material/Box';
import AppFeatureSection from './AppFeatureSection';
import AppStoreSection from './AppStoreSection';
import IPadProCards from './IPadProCards';
import AppAudioFeatureSection from './AppAudioFeatureSection';

const AppContainer = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 5, pt: 0 }}>
            {/* <AppFeatureSection /> */}
            <IPadProCards />
            <AppAudioFeatureSection />
            <AppStoreSection />
        </Box>
    );
};
export default AppContainer;
