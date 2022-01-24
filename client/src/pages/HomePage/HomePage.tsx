import Grid from '@mui/material/Grid';
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
      <div className={classes.flexContainer}>
        <div className={classes.inputBox}>
          <div className={classes.innerFlexContainer}>
            <Typography>
              <h1 className={classes.header}>Find the care your dog deserves!</h1>
            </Typography>
            <HomePageForm handleSubmit={handleSubmit}></HomePageForm>
          </div>
        </div>
        <div className={classes.landingPhotoBox}>
          <img className={classes.landingPhoto} src={landingImage}></img>
        </div>
      </div>
    </>
  );
}
