import { HTTP_INTERNAL_SERVER_ERROR } from "../http";

export default class InternalServerError extends Error {
  /** HTTP Response Status code */
  public statusCode: number;

  /**
   * Create a new HTTP 500 internal server error error.
   *
   * @param message - the error message
   */
  constructor(message: string) {
    // Set the error message
    super(message);

    // Set the name of this custom error
    this.name = new.target.name;

    // Set the HTTP status code
    this.statusCode = HTTP_INTERNAL_SERVER_ERROR;

    // Set the prototype chain for type instance checking
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}
