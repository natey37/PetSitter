import { Typography } from '@mui/material';
import useStyles from './useStyles';
import { SetStateAction } from 'react';

interface Props {
  activeOption: string;
  setActiveOption: React.Dispatch<SetStateAction<string>>;
}

export default function SideBar({ setActiveOption, activeOption }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <>
      <Typography>
        <h4
          onClick={() => setActiveOption('edit')}
          style={{ color: activeOption === 'edit' ? 'black' : 'grey' }}
          className={classes.sideOption}
        >
          Edit Profile
        </h4>
        <h4
          onClick={() => setActiveOption('profile')}
          style={{ color: activeOption === 'profile' ? 'black' : 'grey' }}
          className={classes.sideOption}
        >
          Profile Photo
        </h4>
        <h4
          onClick={() => setActiveOption('availability')}
          style={{ color: activeOption === 'availability' ? 'black' : 'grey' }}
          className={classes.sideOption}
        >
          Availability
        </h4>
        <h4
          onClick={() => setActiveOption('payment')}
          style={{ color: activeOption === 'payment' ? 'black' : 'grey' }}
          className={classes.sideOption}
        >
          Payment
        </h4>
        <h4
          onClick={() => setActiveOption('security')}
          style={{ color: activeOption === 'security' ? 'black' : 'grey' }}
          className={classes.sideOption}
        >
          Security
        </h4>
        <h4
          onClick={() => setActiveOption('settings')}
          style={{ color: activeOption === 'settings' ? 'black' : 'grey' }}
          className={classes.sideOption}
        >
          Settings
        </h4>
      </Typography>
    </>
  );
}
