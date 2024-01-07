import { handler } from "./handler";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(...handler);
