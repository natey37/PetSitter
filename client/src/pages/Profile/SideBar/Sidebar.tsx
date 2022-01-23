import { Typography } from '@mui/material';
import useStyles from './useStyles';
import { SetStateAction } from 'react';

interface Props {
  activeOption: string;
  setActiveOption: React.Dispatch<SetStateAction<string>>;
}

const options = ['edit', 'profile', 'availability', 'payment', 'security', 'settings'];

const optionText = ['Edit Profile', 'Profile Photo', 'Availability', 'Payment', 'Security', 'Settings'];

export default function SideBar({ setActiveOption, activeOption }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <>
      {options.map((option, index) => {
        return (
          <>
            <Typography
              variant="h5"
              onClick={() => setActiveOption(option)}
              style={{ color: activeOption === option ? 'black' : 'grey' }}
              className={classes.sideOption}
            >
              {optionText[index]}
            </Typography>
          </>
        );
      })}
    </>
  );
}
