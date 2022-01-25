const express = require("express");
const { getProfile, getAllProfiles, createProfile, updateProfile } = require("../controllers/profile");
const router = express.Router();
// const protect = require("../middleware/auth");

router.route("/profile").get(getProfile);
router.route("/profiles").get(getAllProfiles);
router.route("/new-profile").post(createProfile);
router.route("/update-profile/:id").post(updateProfile);

module.exports = router;
