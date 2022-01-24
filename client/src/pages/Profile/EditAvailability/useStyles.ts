import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 50,
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    // width: 50,
    // height: '120%',
    textAlign: 'center',
    // boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    // borderRadius: theme.shape.borderRadius,
    marginBottom: 50,
  },
  header: {
    marginTop: '40px !important',
    marginBottom: '50px !important',
  },
  outterContainer: {
    textAlign: 'center',
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    borderRadius: theme.shape.borderRadius,
    marginBottom: 60,
    backgroundColor: 'white',
  },
  dateInput: {
    marginLeft: '5%',
    width: 40,
    marginBottom: 20,
    // backgroundColor: 'red',
  },
  flexRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dateHeader: {
    marginLeft: '40px !important',
    marginBottom: '20px !important',
    // marginBottom: '20px !important',
  },
  dateRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '5%',
    border: 'solid .1rem lightgray',
    width: '90%',
    height: 80,
  },
  dayOfWeek: {
    color: 'gray',
    marginRight: '80px !important',
  },
  date: {
    marginRight: '10px !important',
    fontWeight: 'bold !important',
    marginLeft: '40px !important',
  },
  inputLabel: {
    textTransform: 'uppercase',
    fontWeight: 'bold !important',
    marginRight: '10px !important',
  },
  circle: {
    borderRadius: '50%',
    height: 10,
    width: 10,
    backgroundColor: 'red',
    marginRight: -20,
    marginLeft: 20,
  },
}));

export default useStyles;
