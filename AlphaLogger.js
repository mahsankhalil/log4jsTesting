const log4js = require('log4js')

module.exports = class AlphaLogger {
    static shared = new AlphaLogger();
    infoLogger = null
    errorLogger = null
    warningLogger = null
    constructor() {
        const log4js = require('log4js');
        log4js.configure('./log4js.json');
        //var logger = log4js.getLogger(); //for both console and file
        this.infoLogger = log4js.getLogger("Info");
        this.warningLogger = log4js.getLogger("Warning");
        this.errorLogger = log4js.getLogger("Error");
    }
}