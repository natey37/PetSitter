import useStyles from './useStyles';
import profile from '../../../Images/profile.png';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

export default function EditProfilePhoto(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.flexContainer}>
        <Typography variant="h4" className={classes.header}>
          Profile Photo
        </Typography>
        <img className={classes.profilePhoto} src={profile}></img>
        <Typography variant="h6" className={classes.picText}>
          Be sure to use a photo that clearly shows your face
        </Typography>
        <Box textAlign="center" marginTop={5}>
          <Button type="submit" size="large" variant="contained" className={classes.submit}>
            Upload a file from your device
          </Button>
        </Box>
        <Typography variant="subtitle1" className={classes.deleteText}>
          Delete Photo
        </Typography>
      </Box>
    </>
  );
}
