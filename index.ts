import colors from "colors";
import { format } from "date-fns";

export default class Logger {
  public header: string;

  constructor(header?: string) {
    this.header = header || 'aero-logger';
  }

  public success(message: string) {
    console.log(
      colors.green(`[${this.header}] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  }

  public info(message: string) {
    console.log(
      colors.blue(`[${this.header}] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  }

  public warn(message: string) {
    console.log(
      colors.yellow(`[${this.header}] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  }

  public error(message: string) {
    console.log(
      colors.red(`[${this.header}] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  }

}
