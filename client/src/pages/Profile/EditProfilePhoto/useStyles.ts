import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // backgroundColor: 'red',
  },
  header: {
    // marginTop: 40,
  },
  profilePhoto: {
    height: 150,
    borderRadius: '50%',
  },
  picText: {
    width: '30%',
    // backgroundColor: 'purple',
    fontSize: 14,
    textAlign: 'center',
    color: 'lightgray',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 250,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: 'white !important',
    fontWeight: 'bold',
    color: '#f14140 !important',
    border: 'solid 2px #f14140 !important',
  },
}));

export default useStyles;
