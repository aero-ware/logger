import colors from "colors";
import { format } from "date-fns";

export default {
  success(message: string) {
    console.log(
      colors.green(`[logger] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  },
  info(message: string) {
    console.log(
      colors.blue(`[logger] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  },
  warn(message: string) {
    console.log(
      colors.yellow(
        `[logger] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`
      )
    );
  },
  error(message: string) {
    console.log(
      colors.red(`[logger] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  },
};
