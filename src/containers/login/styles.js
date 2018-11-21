export default theme => ({
  root: {
    padding: theme.spacing.unit * 3,
    boxShadow: theme.shadows[6],
  },
  title: {
    textAlign: 'center',
    fontWeight: 300,
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      padding: theme.spacing.unit * 2,
      boxShadow: theme.shadows[3],
    },
  },
});
