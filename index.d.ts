export default class Logger {
    header: string;
    /**
     * Instantiates your Logger with a custom or default header.
     * @param header the header to use when logging messages. Defaults to 'aero-logger'
     */
    constructor(header?: string);
    /**
     * Logs the given message in green
     * @param message the message to log
     */
    success(message: string): void;
    /**
     * Logs the given message in blue
     * @param message the message to log
     */
    info(message: string): void;
    /**
     * Logs the given message in yellow
     * @param message the message to log
     */
    warn(message: string): void;
    /**
     * Logs the given message in red
     * @param message the message to log
     */
    error(message: string): void;
}
