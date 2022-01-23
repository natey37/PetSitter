import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    marginBottom: '20px !important',
  },
  profilePhoto: {
    height: 150,
    borderRadius: '50%',
  },
  picText: {
    width: '30% !important',
    marginRight: '400px !important',
    marginBottom: '30px !important',
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    whiteSpace: 'nowrap',
  },
  submit: {
    // margin: theme.spacing(3, 2, 2),
    marginRight: 330,
    padding: 10,
    width: 250,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 12,
    backgroundColor: 'white !important',
    fontWeight: 'bold',
    color: '#f14140 !important',
    border: 'solid 2px #f14140 !important',
  },
  creditCard: {
    height: 200,
    width: 280,
    backgroundColor: 'green',
    textAlign: 'center',
    marginRight: '10px',
  },
  creditFlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
