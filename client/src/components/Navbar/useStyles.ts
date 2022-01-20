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
    marginTop: '1.5%',
  },
  buttonLink: {
    textDecoration: 'none',
  },
}));

export default useStyles;
