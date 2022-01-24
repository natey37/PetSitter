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
          <div className={classes.inputLabels}>WHERE</div>
          <TextField
            id="location"
            placeholder="Anywhere"
            // label={<Typography className={classes.label}>E-mail address</Typography>}
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
          <div className={classes.inputLabels}>Drop In / Drop Off</div>
          <div className={classes.flexContainer}>
            <TextField
              id="dates"
              placeholder="Your dates"
              // label={<Typography className={classes.label}>dates</Typography>}
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
              // label={<Typography className={classes.label}>dates</Typography>}
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
          </div>
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
