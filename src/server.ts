import App from "./app";
import { container } from "./config/container";
import { TYPES } from "./config/types";
import "./config/container.inject";

const app : App = container.resolve(TYPES.APP);
app.start();
