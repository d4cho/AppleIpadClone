import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  GridContainer,
  SectionHeaderContent,
  SectionDetailContent,
} from "../Common/StyledComponent";

const AppFeatureSection = () => {
  return (
    <Grid container spacing={5} sx={{ pt: 2 }}>
      <Grid item xs={12} md={6}>
        <GridContainer
          container
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          className="feature-grid-container"
        >
          <Grid item sx={{ p: 5 }}>
            <SectionHeaderContent maxWidth="560px" className="thunderbolt-text">
              Thunderbolt has 40‑Gbps bandwidth for connecting to displays,
              drives and more.
            </SectionHeaderContent>
          </Grid>
          <Grid item>
            <Typography component="figure" className="image-thunderbolt" />
          </Grid>
        </GridContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        <GridContainer
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          className="feature-grid-container"
        >
          <Grid item sx={{ p: 5 }}>
            <Typography component="figure" className="image-microphone" />
          </Grid>
          <Grid className="microphone-container-text" item sx={{ p: 5, pt: 13 }}>
            <SectionDetailContent
              maxWidth="600px"
              fontSize="55px"
              color="#26a334"
              className="text-gradient-green"
            >
              Five studio‑quality microphones record great sound when you shoot
              video, make music and more.
            </SectionDetailContent>
          </Grid>
        </GridContainer>
      </Grid>
    </Grid>
  );
};

export default AppFeatureSection;
