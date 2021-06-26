const log4js = require("log4js");
log4js.configure('./log4js.json');
//var logger = log4js.getLogger(); //for both console and file
const logger = log4js.getLogger("default");
logger.debug("fucking error")