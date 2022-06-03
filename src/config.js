const DEBUG = process.env.NODE_ENV === "development";

const WEBSITE_ROOT = DEBUG ? "http://localhost/" : "http://ourwebsite.com/";

module.exports = {
    WEBSITE_ROOT: WEBSITE_ROOT,
    BACKEND_SERVER_ROOT: "http://3.128.212.185/notTelegramServer/",
    PROFILE_PICTURES_PREFIX: "profile-pictures/"
}