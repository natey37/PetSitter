import { Select, SelectChangeEvent } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ReactNode } from 'react';
import useStyles from './useStyles';

interface Props {
  value: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

export default function MonthSelect({ value, handleChange }: Props): JSX.Element {
  const classes = useStyles();
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

  return (
    <>
      <Select
        className={classes.birthdateMonthInput}
        id="birthdateMonth"
        name="birthdateMonth"
        autoComplete="birthdateMonth"
        value={value}
        onChange={handleChange}
      >
        {months.map((month) => {
          return (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
