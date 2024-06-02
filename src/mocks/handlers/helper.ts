import {
  DefaultBodyType,
  HttpResponse,
  HttpResponseResolver,
  JsonBodyType,
  PathParams,
} from "msw";

export type MockHandler<T extends DefaultBodyType = DefaultBodyType> =
  HttpResponseResolver<PathParams, T, undefined>;

export const randomFail = (rate: number): boolean =>
  Math.floor(Math.random() * rate + 1) === 1;

export const responseError = {
  unauthorized() {
    return new HttpResponse(null, { status: 401 });
  },
  internalServerError() {
    return new HttpResponse(null, { status: 500 });
  },
};

type ResponseWithSessionParams<T extends JsonBodyType = JsonBodyType> = {
  session: string;
  statusCode?: number;
  body?: T;
};

export const respondJsonWithSession = <T extends JsonBodyType>({
  session,
  statusCode,
  body,
}: ResponseWithSessionParams<T>): HttpResponse => {
  const headers = new Headers();
  const expires = new Date(Date.now() + 30 * 60 * 60 * 1000).toUTCString();
  headers.append("Set-Cookie", `SESSION=${session}; Expires=${expires}`);

  return HttpResponse.json(body, {
    status: statusCode || 200,
    headers,
  });
};
