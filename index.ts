import colors from "colors";
import { format } from "date-fns";

class Logger {
  public header: string;
  public showFlags: boolean;
  public colors: boolean;

  /**
   * Instantiates your Logger with a custom or default header.
   * @param header The header to use when logging messages. Defaults to 'logger'.
   */
  constructor(header?: string, colors: boolean = true, showFlags?: boolean) {
    this.header = header || "logger";
    this.showFlags = showFlags || false;
    this.colors = colors;
  }

  /**
   * Logs the given message in green.
   * @param message The message to log.
   */
  public success(message: string) {
    const log = `[${this.header}] ${format(Date.now(), "hh:mm:ss aa")}${
      this.showFlags ? " (SUCCESS) " : " "
    }| ${message}`;

    console.log(this.colors ? colors.green(log) : log);
  }

  /**
   * Logs the given message in blue.
   * @param message The message to log.
   */
  public info(message: string) {
    const log = `[${this.header}] ${format(Date.now(), "hh:mm:ss aa")}${
      this.showFlags ? " (INFO) " : " "
    }| ${message}`;

    console.log(this.colors ? colors.blue(log) : log);
  }

  /**
   * Logs the given message in yellow.
   * @param message The message to log.
   */
  public warn(message: string) {
    const log = `[${this.header}] ${format(Date.now(), "hh:mm:ss aa")}${
      this.showFlags ? " (WARN) " : " "
    }| ${message}`;
    console.log(this.colors ? colors.yellow(log) : log);
  }

  /**
   * Logs the given message in red.
   * @param message The message to log.
   */
  public error(message: string) {
    const log = `[${this.header}] ${format(Date.now(), "hh:mm:ss aa")}${
      this.showFlags ? " (ERROR) " : " "
    }| ${message}`;

    console.log(this.colors ? colors.red(log) : log);
  }
}

export default Logger;
