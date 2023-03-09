import { ApplicationException } from "./ApplicationException";

/**
 * WEB API実行エラー
 */
export class WebApiException extends ApplicationException {
  constructor(readonly statusCode: number, readonly statusText: string) {
    super(statusText);
  }
}
