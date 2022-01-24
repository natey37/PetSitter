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
    // height: '120%',
    textAlign: 'center',
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    borderRadius: theme.shape.borderRadius,
    marginBottom: 50,
  },
  header: {
    marginTop: 40,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginLeft: '5%',
  },
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
  inputs: {
    // marginTop: '1rem',
    height: '2rem',
    padding: '5px',
    // width: '100px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    marginBottom: '70px !important',
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
  },
  inputLabels: {
    marginRight: 10,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    marginBottom: 25,
    // marginTop: 20,
  },
  inputFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // backgroundColor: 'red',
    width: '70%',
  },
  labelFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    textAlign: 'right',
    // alignItems: 'center',
    // backgroundColor: 'red',
    width: '30%',
  },
  outterFlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'purple',
  },
  genderInput: {
    width: '40%',
    marginTop: 20,
  },
  birthdateFlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  birthdateMonthInput: {
    width: '40%',
    marginTop: 20,
  },
  birthdateDayInput: {
    width: '27%',
    marginTop: 20,
  },
  birthdateYearInput: {
    width: '27%',
    marginTop: 20,
  },
  emailInput: {
    marginTop: 20,
  },
}));

export default useStyles;
