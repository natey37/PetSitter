import { Select, SelectChangeEvent } from '@mui/material';
import { MenuItem } from '@mui/material';
import { ReactNode } from 'react';
import useStyles from './useStyles';

interface Props {
  value: string;
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

export default function AmTimeSelect({ value, handleChange }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Select
        className={classes.PmTimeInput}
        id="amTime"
        name="amTime"
        autoComplete="amTime"
        value={value}
        onChange={handleChange}
      >
        {[...Array(12)].map((hour, index) => {
          console.log(hour);
          return (
            <MenuItem key={hour} value={index + 1}>
              {index + 1 + ' pm'}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
