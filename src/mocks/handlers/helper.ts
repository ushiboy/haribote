import {
  RestRequest,
  PathParams,
  ResponseResolver,
  RestContext,
  DefaultBodyType,
} from "msw";

export type MockHandler = ResponseResolver<
  RestRequest<Record<string, any>, PathParams<string>>,
  RestContext,
  DefaultBodyType
>;

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const randomFail = (rate: number): boolean =>
  Math.floor(Math.random() * rate + 1) === 1;
