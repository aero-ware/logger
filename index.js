const colors = require("colors");
const { format } = require("date-fns");

module.exports = {
  success(message) {
    console.log(
      colors.green(`[logger] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  },
  info(message) {
    console.log(
      colors.blue(`[logger] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  },
  warn(message) {
    console.log(
      colors.yellow(
        `[logger] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`
      )
    );
  },
  error(message) {
    console.log(
      colors.red(`[logger] ${format(Date.now(), "hh:mm:ss aa")} | ${message}`)
    );
  },
};
