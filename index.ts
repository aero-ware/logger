import colors from "colors";
import { format } from "date-fns";

export default class Logger {
  public header: string;

  /**
   * Instantiates your Logger with a custom or default header.
   * @param header the header to use when logging messages. Defaults to 'aero-logger'
   */
  constructor(header?: string) {
    this.header = header || 'logger';
  }

  /**
   * Logs the given message in green
   * @param message the message to log
   */
  public success(message: string) {
    console.log(
      colors.green(`[${this.header}] ${format(Date.now(), "hh:mm:ss aa")} (SUCCESS) | ${message}`)
    );
  }

  /**
   * Logs the given message in blue
   * @param message the message to log
   */
  public info(message: string) {
    console.log(
      colors.blue(`[${this.header}] ${format(Date.now(), "hh:mm:ss aa")} (INFO) | ${message}`)
    );
  }

  /**
   * Logs the given message in yellow
   * @param message the message to log
   */
  public warn(message: string) {
    console.log(
      colors.yellow(`[${this.header}] ${format(Date.now(), "hh:mm:ss aa")} (WARNING) | ${message}`)
    );
  }

  /**
   * Logs the given message in red
   * @param message the message to log
   */
  public error(message: string) {
    console.log(
      colors.red(`[${this.header}] ${format(Date.now(), "hh:mm:ss aa")} (ERROR) | ${message}`)
    );
  }

}
