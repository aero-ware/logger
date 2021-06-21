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
     * @param header The header to use when logging messages. Defaults to 'logger'.
     */
    constructor(header, colors = true, showFlags) {
        this.header = header || "logger";
        this.showFlags = showFlags || false;
        this.colors = colors;
    }
    /**
     * Logs the given message in green.
     * @param message The message to log.
     */
    success(message) {
        const log = `[${this.header}] ${date_fns_1.format(Date.now(), "hh:mm:ss aa")}${this.showFlags ? " (SUCCESS) " : " "}| ${message}`;
        console.log(this.colors ? colors_1.default.green(log) : log);
    }
    /**
     * Logs the given message in blue.
     * @param message The message to log.
     */
    info(message) {
        const log = `[${this.header}] ${date_fns_1.format(Date.now(), "hh:mm:ss aa")}${this.showFlags ? " (INFO) " : " "}| ${message}`;
        console.log(this.colors ? colors_1.default.blue(log) : log);
    }
    /**
     * Logs the given message in yellow.
     * @param message The message to log.
     */
    warn(message) {
        const log = `[${this.header}] ${date_fns_1.format(Date.now(), "hh:mm:ss aa")}${this.showFlags ? " (WARN) " : " "}| ${message}`;
        console.log(this.colors ? colors_1.default.yellow(log) : log);
    }
    /**
     * Logs the given message in red.
     * @param message The message to log.
     */
    error(message) {
        const log = `[${this.header}] ${date_fns_1.format(Date.now(), "hh:mm:ss aa")}${this.showFlags ? " (ERROR) " : " "}| ${message}`;
        console.log(this.colors ? colors_1.default.red(log) : log);
    }
}
exports.default = Logger;
