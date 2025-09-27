import { container } from "./container";
import App from "../app";
import { TYPES } from "./types";


container.register(TYPES.APP, App);