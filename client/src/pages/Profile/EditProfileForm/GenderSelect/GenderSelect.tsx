import { Select, SelectChangeEvent } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ReactNode } from 'react';
import useStyles from './useStyles';

interface Props {
  value: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

export default function GenderSelect({ value, handleChange }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Select
        className={classes.genderInput}
        id="gender"
        // placeholder="Male"
        name="gender"
        autoComplete="gender"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={'male'}>Male</MenuItem>
        <MenuItem value={'female'}>Female</MenuItem>
        <MenuItem value={'non-binary'}>Non-Binary</MenuItem>
        <MenuItem value={'other'}>Other</MenuItem>
        <MenuItem value={'prefer-not-to-answer'}>Prefer not to answer</MenuItem>
      </Select>
    </>
  );
}
