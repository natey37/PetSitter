const Profile = require("../models/Profile");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

//Description -> given an id, return a profile with that id
//Route -> GET '/profile'
exports.getProfile = asyncHandler(async (req, res) => {

  const userId  = req.body.id
  const user = await User.findById(userId)
  const profile = await Profile.findOne({ userId: userId})
  // console.log(req)
  if(!user){
    res.status(404)
    throw new Error("User does not exist!")
  } else {
    if(profile){
      res.status(200).json({ profile: profile });
    } else {
      res.status(404);
      throw new Error("Profile does not exist!")
    }
  }
})

//Description -> get all profiles
//Route -> GET '/profiles'
exports.getAllProfiles = asyncHandler(async (req, res) => {
  //I assume there will be some sort of parameters we will want to search to create our list of profiles
  //Homepage asks for a location and dates 
  //Create a filter for profiles that match the location and have availablity that matches the dates chosen
  const { location, beginDate, endDate } = req.body
  const dateRange = [beginDate, endDate]
  const profiles = await Profile.find({
    address: location //will need to create a function to sanitize this
  })
  const availableProfiles = profiles.filter((profile) => {
    profile.availability === dateRange //will need to create a function to sanitize this
  })

  if(!profiles){
    res.status(400)
    throw new Error("No profiles match the current location!")
  } else if(!availableProfiles){
    res.status(400)
    throw new Error("No profiles are available for the current dates!")
  } else {
    res.status(200).json({ profiles: availableProfiles})
  }
})

//Description -> given profile parameters, create a new profile for an existing user
//Route -> POST '/new-profile'
exports.createProfile = asyncHandler(async (req, res) => {

  //Unclear as to whether creating a profile should be done after completing the 'Edit Profile' page
  //This choice changes what parameters we need to pass (additional params -> profilePhoto, availability, paymentOptions)
  const { 
    userId,
    firstName, 
    lastName, 
    gender, 
    birthDate, 
    phoneNumber, 
    address, 
    description 
  } = req.body 

  const { errors, isValidProfile } = 'validateProfileInputs(req.body)' //Need to create validation method that checks the profile attributes exist, as well as, validate for correctness

  //Make sure there isnt already a profile created for this user
  const profile = await Profile.findOne({ userId: userId})
  
  if(profile){
    res.status(400)
    throw new Error("A profile has already been created for this user!")
  } else if(!isValidProfile){
    res.status(400)
    throw new Error(errors)
  } else {
      const newProfile = await Profile.create({
        firstName, 
        lastName, 
        gender, 
        birthDate, 
        phoneNumber, 
        address, 
        description
      })

      res.status(201).json({ profile: newProfile})

  }
})

//Description -> given an ID and new parameters, update the profile
//Route -> PUT '/update-profile/:id
exports.updateProfile = asyncHandler(async (req, res) => {
  const { id } = req.params
  const {
    firstName, 
    lastName, 
    gender, 
    birthDate, 
    phoneNumber, 
    address, 
    description, 
    availability,
  } = req.body

  const { errors, isValidProfile } = 'validateProfileInputs(req.body)'//still need to create validations
  const profile = Profile.findOne({ userId: id})

  if(!profile){
    res.status(400)
    throw new Error("Profile doesn't exist!")
  } else if(!isValidProfile){
    res.status(400)
    throw new Error(errors)
  } else {
    profile.firstName = firstName 
    profile.lastName = lastName 
    profile.gender = gender
    profile.birthDate = birthDate 
    profile.phoneNumber = phoneNumber
    profile.address = address 
    profile.description = description
    profile.availability = availability

    await doc.save()
    res.status(200).json({ profile: profile})
  }
})