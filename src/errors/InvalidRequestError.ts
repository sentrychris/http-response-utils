import { HTTP_UNPROCESSABLE_ENTITY } from "../http";
import InternalServerError from "./InternalServerError";

export default class InvalidRequestError extends InternalServerError {
  /** HTTP Response Status code */
  public statusCode: number;

  /**
   * Create a new HTTP 422 unprocessable entity error.
   *
   * @param message - the error message
   */
  constructor(message: string) {
    // Set the error message
    super(message);

    // Set the name of this custom error
    this.name = new.target.name;

    // Set the HTTP status code
    this.statusCode = HTTP_UNPROCESSABLE_ENTITY;

    // Set the prototype chain for type instance checking
    Object.setPrototypeOf(this, InvalidRequestError.prototype);
  }
}
