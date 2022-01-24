import useStyles from './useStyles';
import { Navbar } from '../../components/Navbar/Navbar';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SideBar from './SideBar/Sidebar';
import EditProfile from './EditProfileForm/EditProfileForm';
import EditProfilePhoto from './EditProfilePhoto/EditProfilePhoto';
import EditPayment from './EditPayment/EditPayment';
import EditAvailability from './EditAvailability/EditAvailability';
import { FormikHelpers } from 'formik';

export default function Profile(): JSX.Element {
  const classes = useStyles();

  const handleSubmit = (
    {
      firstName,
      lastName,
      gender,
      birthdate,
      email,
      phoneNumber,
      location,
      description,
    }: {
      firstName: string;
      lastName: string;
      gender: string;
      birthdate: Date;
      email: string;
      phoneNumber: string;
      location: string;
      description: string;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      firstName: string;
      lastName: string;
      gender: string;
      birthdate: Date;
      email: string;
      phoneNumber: string;
      location: string;
      description: string;
    }>,
  ) => {
    return true;
    //TODO setup frontend form to backend profile
  };

  const [activeOption, setActiveOption] = useState<string>('edit');
  const options = ['edit', 'profile', 'availability', 'payment', 'security', 'settings'];
  const optionComponents = [
    <EditProfile key="edit" handleSubmit={handleSubmit}></EditProfile>,
    <EditProfilePhoto key="profile"></EditProfilePhoto>,
    <EditAvailability key="availability"></EditAvailability>,
    <EditPayment key="payment"></EditPayment>,
    <Typography key="security" variant="h1">
      Security under construction
    </Typography>,
    <Typography key="settings" variant="h1">
      Settings under construction
    </Typography>,
  ];
  const optionStyles = [
    classes.editProfileContainer,
    classes.profilePhotoContainer,
    classes.availabilityContainer,
    classes.paymentContainer,
    classes.securityContainer,
    classes.settingsContainer,
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className={classes.outterFlexContainer}>
        <div className={classes.sidebar}>
          <SideBar activeOption={activeOption} setActiveOption={setActiveOption}></SideBar>
        </div>
        {options.map((option, index) => {
          if (activeOption === option) {
            return <> {<div className={optionStyles[index]}>{optionComponents[index]}</div>}</>;
          }
        })}
      </div>
    </>
  );
}
