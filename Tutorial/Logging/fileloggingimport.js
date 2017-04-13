var loggerModule = require("./config");
var logger = loggerModule.logger(__filename);
var err = null;

for (var i = 0; i < 1000; i++) {
    logger.debug("Error: " + err);
    logger.error("Err in processFiles:  ", err);
    logger.debug("This little thing went to market");
    logger.info("This little thing stayed at home");
    logger.error("This little thing had roast beef");
    
    logger.fatal("This little thing had none");
    logger.trace("and this little thing went wee, wee, wee, all the way home.");
}