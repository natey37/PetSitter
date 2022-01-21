import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '60%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    // marginLeft: '20%',
  },
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
  inputs: {
    // marginTop: '.8rem',
    height: '2.5rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 200,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 0,
    fontSize: 12,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
  },
  inputLabels: {
    marginLeft: 5,
    marginBottom: '-15px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  capitalize: {
    // textTransform: 'uppercase',
    // margin: 0,
    // padding: 0,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

export default useStyles;
