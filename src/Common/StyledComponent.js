import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const GridContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "#f5f5f7",
  boxSizing: "border-box",
  borderRadius: "25px",
  textAlign: "left",
  minHeight: "780px",
  color: theme.palette.text.secondary,
}));

export const SectionHeaderContent = styled(Typography)((props) => ({
  boxSizing: "border-box",
  color: "#1d1d1f",
  paddingBottom: 0,
  maxWidth: props.maxWidth,
  fontSize: "40px",
  lineHeight: 1.1,
  fontWeight: 600,
  letterSpacing: "0em",
}));

export const SectionDetailContent = styled(Typography)((props) => ({
  maxWidth: props.maxWidth,
  color: props.color,
  webkitTextFillColor: props.color,
  fontSize: props.fontSize,
  lineHeight: 1.09091,
  fontWeight: 600,
  letterSpacing: "-0.001em",
  paddingTop: props.theme.spacing(4),
}));
