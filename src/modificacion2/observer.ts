import { Observable } from "./observable.js";

/**
 * Interface that defines an observer
 *
 * Interface Observer
 */
export interface Observer {
  update(observable: Observable): string;
}
