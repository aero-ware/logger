# logger

Simple logger that has 4 different preset functions.

### Usage

-   Import Logger from index
-   Create new Logger (pass in custom header if necessary)
-   Use the 4 provided logger functions!

### Example

#### TypeScript:

```ts
import { Logger } from "logger";
const logger: Logger = new Logger("Logger");
logger.success("Logger is working!");
```

#### JavaScript:

```js
const Logger = require("logger");
const logger = new Logger("Logger");
logger.success("Logger is working");
```

### Functionality

Logger has 4 logging functions.

-   `Logger.success(message: string)` - logs in green
-   `Logger.info(message: string)` - logs in blue
-   `Logger.warn(message: string)` - logs in yellow
-   `Logger.error(message: string)` - logs in red

### Options

Logger has two options, a custom header, and whether or not to show flags such as `SUCCESS` to support consoles without color.

```js
// the second parameter will enable flags
const logger = new Logger("custom header", true);
```
