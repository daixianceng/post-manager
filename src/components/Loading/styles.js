export default theme => ({
  root: {
    minHeight: theme.spacing.unit * 8,
    position: 'relative',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.type === 'dark' ? '#00000040' : '#ffffff40',
    zIndex: theme.zIndex.modal - 10,
  },
});
