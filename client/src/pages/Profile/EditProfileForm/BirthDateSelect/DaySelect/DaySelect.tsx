import { Select, SelectChangeEvent } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ReactNode } from 'react';
import useStyles from './useStyles';

interface Props {
  value: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

export default function DaySelect({ value, handleChange }: Props): JSX.Element {
  const classes = useStyles();
  let startDay = 1;
  //TODO: make sure that the number of days is the correct amount for the month that is chosen
  return (
    <>
      <Select
        className={classes.birthdateDayInput}
        id="birthdateDay"
        name="birthdateDay"
        autoComplete="birthdateDay"
        value={value}
        onChange={handleChange}
      >
        {[...Array(31)].map((day) => {
          startDay = startDay + 1;
          return (
            <MenuItem key={day} value={startDay.toString()}>
              {startDay}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
