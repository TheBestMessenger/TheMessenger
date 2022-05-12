const DEBUG = process.env.NODE_ENV === "development";

const WEBSITE_ROOT = DEBUG ? "http://localhost/" : "http://ourwebsite.com/";

module.exports = {
    WEBSITE_ROOT: WEBSITE_ROOT,
    PROFILE_PICTURES_PREFIX: "profile-pictures/"
}