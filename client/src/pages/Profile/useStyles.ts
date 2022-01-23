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
  outterFlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#FAFAFB',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 55,
    marginRight: 100,
    height: '40%',
    width: 200,
  },
  editProfileContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 55,
    height: '110%',
    width: 700,
  },
  profilePhotoContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    borderRadius: theme.shape.borderRadius,
    marginTop: 55,
    height: '70vh',
    width: 700,
    marginBottom: 250,
  },
  availabilityContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 55,
    height: '110%',
    width: 700,
  },
  paymentContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    borderRadius: theme.shape.borderRadius,
    marginTop: 55,
    height: '70vh',
    width: 700,
    marginBottom: 250,
  },
  securityContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    borderRadius: theme.shape.borderRadius,
    marginTop: 55,
    height: '70vh',
    width: 700,
    marginBottom: 250,
  },
  settingsContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    borderRadius: theme.shape.borderRadius,
    marginTop: 55,
    height: '70vh',
    width: 700,
    marginBottom: 250,
  },
  sideOption: {
    fontSize: 18,
  },
}));

export default useStyles;
