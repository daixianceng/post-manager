export default theme => ({
  content: {
    padding: [theme.spacing.unit * 6, 0],
  },
  [theme.breakpoints.down('sm')]: {
    content: {
      padding: [theme.spacing.unit * 2, 0],
    },
  },
});
