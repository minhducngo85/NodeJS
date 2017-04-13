var path = require('path')
    , log4js = require('log4js');

exports.logger = function (name) {
    log4js.configure(
        {
            appenders: [
                {
                    type: "logLevelFilter",
                    appender: {
                        "type": "file",
                        "filename": "./Logs/error_logs_file.log"
                    },
                    maxLogSize: 10 * 1024 * 1024, // = 10Mb
                    backups: 10, // keep five backup files
                    compress: true, // compress the backups
                    encoding: 'utf-8',
                    level: "ERROR",
                },
                {

                    type: "file",
                    filename: "./Logs/logs_file.log",
                    maxLogSize: 10485760, // = 10Mb
                    backups: 10, // keep five backup files
                    compress: true, // compress the backups
                    encoding: 'utf-8',
                },
                {
                    type: "stdout"
                }
            ]
        }
    );

    var logger4js = log4js.getLogger(name);
    return logger4js;
}
