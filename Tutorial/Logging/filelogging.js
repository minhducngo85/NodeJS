var path = require('path')
    , log4js = require('log4js');

log4js.configure(
    {
        appenders: [
            {
                type: "logLevelFilter",
                appender: {
                    "type": "file",
                    "filename": "./../logs/error_logs_file.log"
                },
                maxLogSize: 10485760, // = 10Mb
                backups: 10, // keep five backup files
                compress: true, // compress the backups
                encoding: 'utf-8',
                level: "ERROR",
            },
            {

                type: "file",
                filename: "./../logs/logs_file.log",
                maxLogSize: 10485760, // = 10Mb
                backups: 10, // keep five backup files
                compress: true, // compress the backups
                encoding: 'utf-8',
            },
            {
                type: "dateFile",
                filename: "./../logs/logs_datefile.log",
                pattern: "yyyy-MM-dd-hh",
                encoding: 'utf-8'
            },
            {
                type: "stdout"
            }
        ]
    }
);

var logger = log4js.getLogger('filelogging.js');
logger.debug("This little thing went to market");
logger.info("This little thing stayed at home");
logger.error("This little thing had roast beef");
logger.fatal("This little thing had none");
logger.trace("and this little thing went wee, wee, wee, all the way home.");
var appDir = path.dirname(require.main.filename);
logger.info("Dir = " + appDir);
