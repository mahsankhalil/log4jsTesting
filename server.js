// const log4js = require("log4js");
// log4js.configure('./log4js.json');
//var logger = log4js.getLogger(); //for both console and file
// const warningLogger = log4js.getLogger("Warning");
// const infoLogger = log4js.getLogger("Info");
// const errorLogger = log4js.getLogger("Error");
//
// warningLogger.info("Warning aa gai")
// infoLogger.info("Warning aa gai")
// errorLogger.error("error aa gaya")

const alphaLogger = require('./AlphaLogger')
alphaLogger.shared.errorLogger.error("Error is about to come");
alphaLogger.shared.warningLogger.warn("Warning is about to come");
alphaLogger.shared.infoLogger.warn("Info is about to come");