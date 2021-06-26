const log4js = require('log4js')

module.exports = class AlphaLogger {
    static shared = AlphaLogger();
    logger = null
    constructor() {
        const log4js = require('log4js');
        log4js.configure('./config/log4js.json');
        //var logger = log4js.getLogger(); //for both console and file
        self.logger = log4js.getLogger("file");
    }
}