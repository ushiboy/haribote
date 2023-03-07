import { ApplicationException } from "./ApplicationException";

export class WebApiException extends ApplicationException {
  constructor(readonly statusCode: number, readonly statusText: string) {
    super(statusText);
  }
}
