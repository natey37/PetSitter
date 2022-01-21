import useStyles from './useStyles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface Props {
  handleSubmit: (
    {
      firstName,
      lastName,
      gender,
      birthdate,
      email,
      phoneNumber,
      location,
      description,
    }: {
      firstName: string;
      lastName: string;
      gender: string;
      birthdate: Date;
      email: string;
      phoneNumber: string;
      location: string;
      description: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      firstName: string;
      lastName: string;
      gender: string;
      birthdate: Date;
      email: string;
      phoneNumber: string;
      location: string;
      description: string;
    }>,
  ) => void;
}

export default function EditProfile({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <div className={classes.flexContainer}>
        <h2>Edit Profile</h2>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            gender: '',
            birthdate: new Date(),
            email: '',
            phoneNumber: '',
            location: '',
            description: '',
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required('Name is required').max(40, 'Name is too long'),
            email: Yup.string().required('Email is required').email('Email is not valid'),
            password: Yup.string()
              .required('Password is required')
              .max(100, 'Password is too long')
              .min(6, 'Password too short'),
          })}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <div className={classes.inputFlexContainer}>
                <div className={classes.inputLabels}>FIRST NAME</div>
                <TextField
                  id="firstName"
                  placeholder="John"
                  // label={<Typography className={classes.label}>Your firstName</Typography>}
                  fullWidth
                  margin="normal"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  InputProps={{
                    classes: { input: classes.inputs },
                  }}
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                  helperText={touched.firstName ? errors.firstName : ''}
                  error={touched.firstName && Boolean(errors.firstName)}
                  value={values.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.inputFlexContainer}>
                <div className={classes.inputLabels}>LAST NAME</div>
                <TextField
                  id="lastName"
                  placeholder="Doe"
                  // label={<Typography className={classes.label}>Your lastName</Typography>}
                  fullWidth
                  margin="normal"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  InputProps={{
                    classes: { input: classes.inputs },
                  }}
                  name="lastName"
                  autoComplete="lastName"
                  autoFocus
                  helperText={touched.lastName ? errors.lastName : ''}
                  error={touched.lastName && Boolean(errors.lastName)}
                  value={values.lastName}
                  onChange={handleChange}
                />
              </div>
              {/* <TextField
                id="username"
                placeholder="Your name"
                // label={<Typography className={classes.label}>Your name</Typography>}
                fullWidth
                margin="normal"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                name="username"
                autoComplete="username"
                helperText={touched.username ? errors.username : ''}
                error={touched.username && Boolean(errors.username)}
                value={values.username}
                onChange={handleChange}
              />
              <div className={classes.inputLabels}>PASSWORD</div>
              <TextField
                id="password"
                placeholder="Create a password"
                // label={<Typography className={classes.label}>Create a password</Typography>}
                fullWidth
                margin="normal"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                InputProps={{
                  classes: { input: classes.inputs },
                }}
                type="password"
                autoComplete="current-password"
                helperText={touched.password ? errors.password : ''}
                error={touched.password && Boolean(errors.password)}
                value={values.password}
                onChange={handleChange}
              /> */}

              <Box textAlign="center" marginTop={5}>
                <Button type="submit" size="large" variant="contained" className={classes.submit}>
                  {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Sign Up'}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
