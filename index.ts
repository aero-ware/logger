import colors from "colors";
import { format } from "date-fns";

export default class Logger {
    public header: string;
    public showFlags: boolean;

    /**
     * Instantiates your Logger with a custom or default header.
     * @param header The header to use when logging messages. Defaults to 'logger'.
     */
    constructor(header?: string, showFlags?: boolean) {
        this.header = header || "logger";
        this.showFlags = showFlags || false;
    }

    /**
     * Logs the given message in green.
     * @param message The message to log.
     */
    public success(message: string) {
        console.log(
            colors.green(
                `[${this.header}] ${format(Date.now(), "hh:mm:ss aa")}${
                    this.showFlags ? " (SUCCESS) " : " "
                }| ${message}`
            )
        );
    }

    /**
     * Logs the given message in blue.
     * @param message The message to log.
     */
    public info(message: string) {
        console.log(
            colors.blue(
                `[${this.header}] ${format(Date.now(), "hh:mm:ss aa")}${
                    this.showFlags ? " (INFO) " : " "
                }| ${message}`
            )
        );
    }

    /**
     * Logs the given message in yellow.
     * @param message The message to log.
     */
    public warn(message: string) {
        console.log(
            colors.yellow(
                `[${this.header}] ${format(Date.now(), "hh:mm:ss aa")}${
                    this.showFlags ? " (WARN) " : " "
                }| ${message}`
            )
        );
    }

    /**
     * Logs the given message in red.
     * @param message The message to log.
     */
    public error(message: string) {
        console.log(
            colors.red(
                `[${this.header}] ${format(Date.now(), "hh:mm:ss aa")}${
                    this.showFlags ? " (ERROR) " : " "
                }| ${message}`
            )
        );
    }
}
