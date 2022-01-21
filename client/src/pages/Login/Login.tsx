import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Navbar } from '../../components/Navbar/Navbar';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} component={Paper} square className={classes.paper}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="column"
            className={classes.authWrapper}
          >
            <Box width="100%" maxWidth={600} p={3} alignSelf="center" className={classes.loginContainer}>
              <Grid container>
                <Grid item xs>
                  <h2 className={classes.welcome}>Sign in!</h2>
                </Grid>
              </Grid>
              <LoginForm handleSubmit={handleSubmit} />
            </Box>
            <Box p={1} alignSelf="center" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
