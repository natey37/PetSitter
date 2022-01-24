import useStyles from './useStyles';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
export default function EditPayment(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.flexContainer}>
        <Typography variant="h4" className={classes.header}>
          Payment Methods
        </Typography>
        <Typography variant="h5" className={classes.picText}>
          Saved Payment Profiles:
        </Typography>
        <Box className={classes.creditFlexContainer}>
          <Box className={classes.creditCard}>I am credit card</Box>
          <Box className={classes.creditCard}>I am credit card</Box>
        </Box>
        <Box textAlign="center" marginTop={5}>
          <Button type="submit" size="large" variant="contained" className={classes.submit}>
            Add new payment profile
          </Button>
        </Box>
      </Box>
    </>
  );
}
