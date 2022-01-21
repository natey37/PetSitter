import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      location,
      dates,
    }: {
      location: string;
      dates: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      location: string;
      dates: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        location: '',
        dates: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box className={classes.inputLabels}>Where</Box>
          <TextField
            id="location"
            placeholder="Anywhere"
            fullWidth
            margin="normal"
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="location"
            autoComplete="location"
            autoFocus
            helperText={touched.location ? errors.location : ''}
            error={touched.location && Boolean(errors.location)}
            value={values.location}
            onChange={handleChange}
          />
          <Box className={classes.inputLabels}>Drop In / Drop Off</Box>
          <Box className={classes.flexContainer}>
            <TextField
              id="dates"
              placeholder="Your dates"
              fullWidth
              margin="normal"
              InputProps={{
                classes: { input: classes.inputs },
              }}
              type="date"
              autoComplete="current-dates"
              helperText={touched.dates ? errors.dates : ''}
              error={touched.dates && Boolean(errors.dates)}
              value={values.dates}
              onChange={handleChange}
            />
            <TextField
              id="dates"
              placeholder="Your dates"
              fullWidth
              margin="normal"
              InputProps={{
                classes: { input: classes.inputs },
              }}
              type="date"
              autoComplete="current-dates"
              helperText={touched.dates ? errors.dates : ''}
              error={touched.dates && Boolean(errors.dates)}
              value={values.dates}
              onChange={handleChange}
            />
          </Box>
          <Box marginTop={5}>
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'FIND MY DOG SITTER'}
            </Button>
          </Box>
          <Box height={95} />
        </form>
      )}
    </Formik>
  );
}
