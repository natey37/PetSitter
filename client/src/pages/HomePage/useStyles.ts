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
    flexDirection: 'row',
    justifiyContent: 'center',
    height: '90vh',
  },
  inputBox: {
    width: '50%',
  },
  landingPhotoBox: {
    width: '50%',
    backgroundColor: 'purple',
    overflow: 'hidden',
  },
  landingPhoto: {
    height: '100%',
    width: 'auto',
  },
  innerFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 70,
  },
  header: {
    marginTop: 70,
    fontSize: 50,
  },
}));
export default useStyles;
