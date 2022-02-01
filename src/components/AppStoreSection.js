import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import {
  GridContainer,
  SectionHeaderContent,
  SectionDetailContent,
} from "../Common/StyledComponent";

const AppStoreSection = () => {
  return (
    <Grid container spacing={5} sx={{ pt: 5 }}>
      <Grid item xs={12} md={6} lg={4}>
        <GridContainer
          container
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          className="grid-container feature-grid-container"
        >
          <Grid item sx={{ p: 5 }}>
            <Typography component="figure" className="app-image-storage" />
          </Grid>
          <Grid item sx={{ p: 5 }}>
            <SectionDetailContent
              maxWidth="332px"
              fontSize="44px"
              color="#0f44a7"
              className="text-gradient-blue"
            >
              Over 1M apps on the App Store just for iPad.
            </SectionDetailContent>
          </Grid>
          <Grid item sx={{ p: 5 }}>
            <Link
              href="#"
              underline="hover"
              sx={{
                fontSize: "19px",
                lineHeight: 1.4211,
                fontWeight: 400,
                letterSpacing: ".012em",
              }}
            >
              Discover apps for iPad
              <Typography
                component="span"
                sx={{ verticalAlign: "sub", paddingLeft: "4px" }}
              >
                <NorthEastIcon fontSize="small" />
              </Typography>
            </Link>
          </Grid>
        </GridContainer>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <GridContainer
          container
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          className="grid-container feature-grid-container"
        >
          <Grid item sx={{ p: 5 }}>
            <SectionHeaderContent maxWidth="750px" className="thunderbolt-text">
              New 2TB configuration offers more room to store apps and content.
            </SectionHeaderContent>
          </Grid>
          <Grid item>
            <Typography component="figure" className="image-storage" />
          </Grid>
        </GridContainer>
      </Grid>
    </Grid>
  );
};

export default AppStoreSection;
