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
  editMainContainer: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // backgroundColor: 'purple',
    marginTop: 55,
    height: '110%',
    width: 700,
  },
  sideOption: {
    fontSize: 18,
  },
  profilePhotoMainContainer: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    backgroundColor: 'white',
    boxShadow: '1px 1px 5px lightgrey, -1px -1px 5px lightgrey',
    borderRadius: theme.shape.borderRadius,
    marginTop: 55,
    height: '60vh',
    width: 700,
    marginBottom: 250,
  },
}));

export default useStyles;
