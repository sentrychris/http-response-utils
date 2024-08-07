import { HTTP_BAD_REQUEST } from "../http";
import InternalServerError from "./InternalServerError";

export default class BadRequestError extends InternalServerError {
  /** HTTP Response Status code */
  public statusCode: number;

  /**
   * Create a new HTTP 400 bad request error.
   *
   * @param message - the error message
   */
  constructor(message: string) {
    // Set the error message
    super(message);

    // Set the name of this custom error
    this.name = new.target.name;

    // Set the HTTP status code
    this.statusCode = HTTP_BAD_REQUEST;

    // Set the prototype chain for type instance checking
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
