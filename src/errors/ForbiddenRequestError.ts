import { HTTP_FORBIDDEN } from "../http";
import InternalServerError from "./InternalServerError";

export default class ForbiddenRequestError extends InternalServerError {
  /** HTTP Response Status code */
  public statusCode: number;

  /**
   * Create a new HTTP 403 forbidden error.
   *
   * @param message - the error message
   */
  constructor(message: string) {
    // Set the error message
    super(message);

    // Set the name of this custom error
    this.name = new.target.name;

    // Set the HTTP status code
    this.statusCode = HTTP_FORBIDDEN;

    // Set the prototype chain for type instance checking
    Object.setPrototypeOf(this, ForbiddenRequestError.prototype);
  }
}
