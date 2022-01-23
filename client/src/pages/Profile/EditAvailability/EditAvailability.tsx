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
import AmTimeSelect from './TimeSelect/AmTimeSelect/AmTimeSelect';
import PmTimeSelect from './TimeSelect/PmTimeSelect/PmTimeSelect';

export default function EditAvailability(): JSX.Element {
  const classes = useStyles();

  //TODO: update date range to account for weeks that are split between months
  const calculateDateRange = (currentDayOfWeek: number, currentDay: number) => {
    function range(from: number, to: number) {
      const res = [];
      for (let i = from; i <= to; ++i) res.push(i);
      return res;
    }

    if (currentDayOfWeek === 1) {
      return range(currentDay, currentDay + 6);
    } else if (currentDayOfWeek === 2) {
      return range(currentDay - 1, currentDay + 5);
    } else if (currentDayOfWeek === 3) {
      return range(currentDay - 2, currentDay + 4);
    } else if (currentDayOfWeek === 4) {
      return range(currentDay - 3, currentDay + 3);
    } else if (currentDayOfWeek === 5) {
      return range(currentDay - 4, currentDay + 3);
    } else if (currentDayOfWeek === 6) {
      return range(currentDay - 5, currentDay + 1);
    } else if (currentDayOfWeek === 7) {
      return range(currentDay - 6, currentDay);
    }
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentMonth = months[currentDate.getMonth()];
  const [currentAmTime, setCurrentAmTime] = useState('10');
  const handleAmChange = (e: any) => {
    setCurrentAmTime(e.target.value);
  };
  const [currentPmTime, setCurrentPmTime] = useState('10');
  const handlePmChange = (e: any) => {
    setCurrentPmTime(e.target.value);
  };

  const [dateRange, setDateRange] = useState<number[]>();
  useEffect(() => {
    const range = calculateDateRange(currentDate.getDay(), currentDate.getDate());
    // debugger;
    setDateRange(range);
  }, [currentDate]);

  const handleChange = (date: any) => {
    setCurrentDate(date);
  };

  return (
    <>
      <div className={classes.outterContainer}>
        <h2 className={classes.header}>Your availability</h2>
        <div className={classes.flexContainer}>
          <div className={classes.flexRowContainer}>
            <div className={classes.dateInput}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  views={['day']}
                  minDate={new Date('2012-03-01')}
                  maxDate={new Date('2023-06-01')}
                  value={currentDate}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </LocalizationProvider>
            </div>
            <Typography className={classes.dateHeader} variant="h5">
              {currentDate.toDateString()}
            </Typography>
          </div>
          {days.map((day, index) => {
            return (
              <div key={day} className={classes.dateRow}>
                {days[currentDate.getDay() - 1] === day && <div className={classes.circle}></div>}
                <Typography className={classes.date}>
                  {dateRange && dateRange[index] + ' ' + currentMonth + ','}
                </Typography>

                <Typography className={classes.dayOfWeek}>{day}</Typography>
                <Typography className={classes.inputLabel}>From</Typography>
                <AmTimeSelect value={currentAmTime} handleChange={handleAmChange}></AmTimeSelect>
                <Typography className={classes.inputLabel}>To</Typography>
                <PmTimeSelect value={currentPmTime} handleChange={handlePmChange}></PmTimeSelect>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
