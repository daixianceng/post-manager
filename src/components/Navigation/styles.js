export default theme => ({
  growBox: {
    display: 'flex',
    flexGrow: 1,
  },
  [theme.breakpoints.down('xs')]: {
    userMenu: {
      display: 'none',
    },
  },
  [theme.breakpoints.up('sm')]: {
    moreButton: {
      display: 'none',
    },
  },
});
