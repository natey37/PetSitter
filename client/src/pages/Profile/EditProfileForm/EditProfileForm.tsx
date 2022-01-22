import useStyles from './useStyles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useEffect, useState } from 'react';
import GenderSelect from './GenderSelect/GenderSelect';
import MonthSelect from './BirthDateSelect/MonthSelect/MonthSelect';
import DaySelect from './BirthDateSelect/DaySelect/DaySelect';
import YearSelect from './BirthDateSelect/YearSelect/YearSelect';

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

interface FormValues {
  firstName: string;
  lastName: string;
  gender: string;
  month: string;
  day: string;
  year: string;
  email: string;
  phoneNumber: string;
  location: string;
  description: string;
}

export default function EditProfileForm({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  const form: FormValues = {
    firstName: '',
    lastName: '',
    gender: 'female',
    month: 'June',
    day: '15',
    year: '2021',
    email: '',
    phoneNumber: '',
    location: '',
    description: '',
  };

  const [formValues, setFormValues] = useState({ formValues: form as FormValues });
  console.log(formValues);
  // useEffect(() => {
  //   formValues;
  //   debugger;
  // }, [formValues]);
  return (
    <>
      <div className={classes.flexContainer}>
        <h2 className={classes.header}>Edit Profile</h2>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            gender: 'female',
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
              <div className={classes.outterFlexContainer}>
                <div className={classes.labelFlexContainer}>
                  <div className={classes.inputLabels}>First Name</div>
                  <div className={classes.inputLabels}>Last Name</div>
                  <div className={classes.inputLabels}>Gender</div>
                  <div className={classes.inputLabels}>Birthdate</div>
                  <div className={classes.inputLabels}>Email Address</div>
                  <div className={classes.inputLabels}>Phone Number</div>
                  <div className={classes.inputLabels}>Where You Live</div>
                  <div className={classes.inputLabels}>Describe Yourself</div>
                </div>
                <div className={classes.inputFlexContainer}>
                  <TextField
                    id="firstName"
                    placeholder="John"
                    fullWidth
                    margin="normal"
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
                  <TextField
                    id="lastName"
                    placeholder="Doe"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      classes: { input: classes.inputs },
                    }}
                    name="lastName"
                    autoComplete="lastName"
                    helperText={touched.lastName ? errors.lastName : ''}
                    error={touched.lastName && Boolean(errors.lastName)}
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  <GenderSelect value={values.gender} handleChange={handleChange} />
                  <div className={classes.birthdateFlexContainer}>
                    <MonthSelect value={formValues.formValues.month} handleChange={handleChange} />
                    <DaySelect value={formValues.formValues.day} handleChange={handleChange} />
                    <YearSelect value={formValues.formValues.year} handleChange={handleChange} />
                    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        views={['month']}
                        // label="Year"
                        minDate={new Date('2012-03-01')}
                        maxDate={new Date('2023-06-01')}
                        value={values.birthdate}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} helperText={null} />}
                      />
                      <DatePicker
                        views={['day']}
                        // label="Year"
                        minDate={new Date('2012-03-01')}
                        maxDate={new Date('2023-06-01')}
                        value={values.birthdate}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} helperText={null} />}
                      />
                    </LocalizationProvider> */}
                  </div>
                  <TextField
                    id="email"
                    placeholder="john-doe@gmail.com"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      classes: { input: classes.inputs },
                    }}
                    name="email"
                    autoComplete="email"
                    helperText={touched.email ? errors.email : ''}
                    error={touched.email && Boolean(errors.email)}
                    value={values.email}
                    onChange={handleChange}
                  />
                  <TextField
                    id="phoneNumber"
                    placeholder="123-456-7890"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      classes: { input: classes.inputs },
                    }}
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    helperText={touched.phoneNumber ? errors.phoneNumber : ''}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  <TextField
                    id="location"
                    placeholder="Address"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      classes: { input: classes.inputs },
                    }}
                    name="location"
                    autoComplete="location"
                    helperText={touched.location ? errors.location : ''}
                    error={touched.location && Boolean(errors.location)}
                    value={values.location}
                    onChange={handleChange}
                  />
                  <TextField
                    id="description"
                    placeholder="About you"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      classes: { input: classes.inputs },
                    }}
                    name="description"
                    autoComplete="description"
                    multiline
                    rows={3}
                    maxRows={5}
                    helperText={touched.description ? errors.description : ''}
                    error={touched.description && Boolean(errors.description)}
                    value={values.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Box textAlign="center" marginTop={5}>
                <Button type="submit" size="large" variant="contained" className={classes.submit}>
                  {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
