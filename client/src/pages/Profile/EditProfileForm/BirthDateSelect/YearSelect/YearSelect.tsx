import { Select, SelectChangeEvent } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ReactNode } from 'react';
import useStyles from './useStyles';

interface Props {
  value: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

export default function YearSelect({ value, handleChange }: Props): JSX.Element {
  const classes = useStyles();
  let startYear = 1921;
  return (
    <>
      <Select
        className={classes.birthdateYearInput}
        id="birthdateYear"
        name="birthdateYear"
        autoComplete="birthdateYear"
        value={value}
        onChange={handleChange}
      >
        {[...Array(100)].map((year) => {
          startYear = startYear + 1;
          return (
            <MenuItem key={year} value={startYear.toString()}>
              {startYear}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
