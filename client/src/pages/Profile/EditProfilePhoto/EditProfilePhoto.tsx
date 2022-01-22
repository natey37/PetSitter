import useStyles from './useStyles';
import profile from '../../../Images/profile.png';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function EditProfilePhoto(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <div className={classes.flexContainer}>
        <h2 className={classes.header}>Profile Photo</h2>
        <img className={classes.profilePhoto} src={profile}></img>
        <h5 className={classes.picText}>Be sure to use a photo that clearly shows your face</h5>
        <Box textAlign="center" marginTop={5}>
          <Button type="submit" size="large" variant="contained" className={classes.submit}>
            Upload a file from your device
          </Button>
        </Box>
        <h4>Delete Photo</h4>
      </div>
    </>
  );
}
