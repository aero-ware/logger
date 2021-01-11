export default class Logger {
    header: string;
    showFlags: boolean;
    /**
     * Instantiates your Logger with a custom or default header.
     * @param header The header to use when logging messages. Defaults to 'logger'.
     */
    constructor(header?: string, showFlags?: boolean);
    /**
     * Logs the given message in green.
     * @param message The message to log.
     */
    success(message: string): void;
    /**
     * Logs the given message in blue.
     * @param message The message to log.
     */
    info(message: string): void;
    /**
     * Logs the given message in yellow.
     * @param message The message to log.
     */
    warn(message: string): void;
    /**
     * Logs the given message in red.
     * @param message The message to log.
     */
    error(message: string): void;
}
