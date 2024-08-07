import BadRequestError from "./errors/BadRequestError";
import InternalServerError from "./errors/InternalServerError";
import InvalidRequestError from "./errors/InvalidRequestError";
import NotFoundRequestError from "./errors/NotFoundRequestError";
import UnauthorizedRequestError from "./errors/UnauthorizedRequestError";
import ForbiddenRequestError from "./errors/ForbiddenRequestError";
import { status } from "./http";

export interface RequestError {
  /** The error name */
  name: string;

  /** The error message */
  message: string;

  /** The HTTP status code */
  statusCode: number;
}


/**
 * Export HTTP errors.
 */
export {
  status,
  BadRequestError,
  InternalServerError,
  InvalidRequestError,
  NotFoundRequestError,
  UnauthorizedRequestError,
  ForbiddenRequestError,
};
