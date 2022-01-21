import Box from '@mui/material/Box';
import useStyles from './useStyles';
import { Navbar } from '../../components/Navbar/Navbar';
import landingImage from '../../Images/landing_page.jpeg';
import { Typography } from '@mui/material';
import HomePageForm from './HomePageForm/HomePageForm';

export default function HomePage(): JSX.Element {
  const classes = useStyles();
  const handleSubmit = () => {
    return 'foo';
  };
  return (
    <>
      <Navbar></Navbar>
      <Box className={classes.flexContainer}>
        <Box className={classes.inputBox}>
          <Box className={classes.innerFlexContainer}>
            <Box className={classes.header}>
              <Typography variant="h2">Find the care your dog deserves!</Typography>
            </Box>
            <HomePageForm handleSubmit={handleSubmit}></HomePageForm>
          </Box>
        </Box>
        <Box className={classes.landingPhotoBox}>
          <img className={classes.landingPhoto} src={landingImage} alt="Two dogs sitting"></img>
        </Box>
      </Box>
    </>
  );
}
