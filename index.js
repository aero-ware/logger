"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("colors"));
const date_fns_1 = require("date-fns");
class Logger {
    /**
     * Instantiates your Logger with a custom or default header.
     * @param header the header to use when logging messages. Defaults to 'aero-logger'
     */
    constructor(header) {
        this.header = header || 'logger';
    }
    /**
     * Logs the given message in green
     * @param message the message to log
     */
    success(message) {
        console.log(colors_1.default.green(`[${this.header}] ${date_fns_1.format(Date.now(), "hh:mm:ss aa")} (SUCCESS) | ${message}`));
    }
    /**
     * Logs the given message in blue
     * @param message the message to log
     */
    info(message) {
        console.log(colors_1.default.blue(`[${this.header}] ${date_fns_1.format(Date.now(), "hh:mm:ss aa")} (INFO) | ${message}`));
    }
    /**
     * Logs the given message in yellow
     * @param message the message to log
     */
    warn(message) {
        console.log(colors_1.default.yellow(`[${this.header}] ${date_fns_1.format(Date.now(), "hh:mm:ss aa")} (WARNING) | ${message}`));
    }
    /**
     * Logs the given message in red
     * @param message the message to log
     */
    error(message) {
        console.log(colors_1.default.red(`[${this.header}] ${date_fns_1.format(Date.now(), "hh:mm:ss aa")} (ERROR) | ${message}`));
    }
}
exports.default = Logger;
