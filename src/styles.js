import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4)
  },
  icon: {
    marginRight: "20px"
  },
  buttons: {
    marginTop: "40px"
  },
  cardGrid: {
    padding: "20px 0"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    padding: "50px 0",
    backgroundColor: theme.palette.background.paper
  }
}));

export default useStyles;