export default theme => ({
  root: {},
  nav: {
    borderRight: '1px solid ' + theme.palette.divider,
  },
  [theme.breakpoints.down('sm')]: {
    nav: {
      display: 'none',
    },
  },
});
