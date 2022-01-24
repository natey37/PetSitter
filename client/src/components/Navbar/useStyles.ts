import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'white !important',
  },
  toolbar: {
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    height: '10vh',
  },
  login: {
    // margin: theme.spacing(3, 2, 2),
    // padding: 10,
    width: 120,
    height: 45,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: 'white !important',
    fontWeight: 'bold',
    color: '#f14140',
    border: 'solid 1px #f14140 !important',
    marginRight: '10px !important',
  },
  signup: {
    // margin: theme.spacing(3, 2, 2),
    // padding: 10,
    width: 120,
    height: 45,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
    marginRight: '25px !important',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  link: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 30,
    marginTop: 10,
  },
  buttonLink: {
    textDecoration: 'none',
  },
  navProfileImage: {
    height: '200%',
    width: 'auto',
    borderRadius: '50%',
  },
  iconButton: {
    height: 45,
    width: 45,
  },
  messagesLink: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 50,
  },
  myJobsLink: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 50,
  },
}));

export default useStyles;
