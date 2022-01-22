import useStyles from './useStyles';
import profile from '../../../Images/profile.png';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function EditPayment(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <div className={classes.flexContainer}>
        <h2 className={classes.header}>Payment Methods</h2>
        <h1 className={classes.picText}>Saved Payment Profiles:</h1>
        <div className={classes.creditFlexContainer}>
          <Box className={classes.creditCard}>I am credit card</Box>
          <Box className={classes.creditCard}>I am credit card</Box>
        </div>
        <Box textAlign="center" marginTop={5}>
          <Button type="submit" size="large" variant="contained" className={classes.submit}>
            Add new payment profile
          </Button>
        </Box>
      </div>
    </>
  );
}
