import App from "./app";
import { container } from "./config/container";
import { TYPES } from "./config/types";

const app : App = container.resolve(TYPES.APP);
app.start();
