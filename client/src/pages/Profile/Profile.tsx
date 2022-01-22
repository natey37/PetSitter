import useStyles from './useStyles';
import { Navbar } from '../../components/Navbar/Navbar';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import SideBar from './SideBar/Sidebar';
import EditProfile from './EditProfileForm/EditProfileForm';
import EditProfilePhoto from './EditProfilePhoto/EditProfilePhoto';
import { FormikHelpers } from 'formik';

export default function Profile(): JSX.Element {
  const classes = useStyles();
  const returnActive = (activeString: any) => {
    return activeString;
  };

  // const handleSubmit = (string: string) => {
  //   return string;
  // };
  //first name, last name, gender, birthdate, email address, phone number, where do u live, describe yourself
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
    // register(username, email, password).then((data) => {
    //   if (data.error) {
    //     console.error({ error: data.error.message });
    //     setSubmitting(false);
    //     updateSnackBarMessage(data.error.message);
    //   } else if (data.success) {
    //     updateLoginContext(data.success);
    //   } else {
    //     // should not get here from backend but this catch is for an unknown issue
    //     console.error({ data });
    //     setSubmitting(false);
    //     updateSnackBarMessage('An unexpected error occurred. Please try again');
    //   }
    // });
  };

  const [activeOption, setActiveOption] = useState<string>('edit');
  return (
    <>
      <Navbar></Navbar>
      <div className={classes.outterFlexContainer}>
        <div className={classes.sidebar}>
          <SideBar activeOption={activeOption} setActiveOption={setActiveOption}></SideBar>
        </div>
        {activeOption === 'edit' && (
          <>
            <div className={classes.editMainContainer}>
              <EditProfile handleSubmit={handleSubmit}></EditProfile>
            </div>
          </>
        )}
        {activeOption === 'profile' && (
          <>
            <div className={classes.profilePhotoMainContainer}>
              <EditProfilePhoto></EditProfilePhoto>
            </div>
          </>
        )}
      </div>
    </>
  );
}
