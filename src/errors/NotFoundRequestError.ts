import { HTTP_NOT_FOUND } from "../http";
import InternalServerError from "./InternalServerError";

export default class NotFoundRequestError extends InternalServerError {
  /** HTTP Response Status code */
  public statusCode: number;

  /**
   * Create a new HTTP 404 not found error.
   *
   * @param message - the error message
   */
  constructor(message: string) {
    // Set the error message
    super(message);

    // Set the name of this custom error
    this.name = new.target.name;

    // Set the HTTP status code
    this.statusCode = HTTP_NOT_FOUND;

    // Set the prototype chain for type instance checking
    Object.setPrototypeOf(this, NotFoundRequestError.prototype);
  }
}
