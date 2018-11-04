export default theme => ({
  growBox: {
    display: 'flex',
    flexGrow: 1,
  },
  [theme.breakpoints.down('sm')]: {
    userMenu: {
      display: 'none',
    },
  },
  [theme.breakpoints.up('md')]: {
    moreButton: {
      display: 'none',
    },
  },
});
