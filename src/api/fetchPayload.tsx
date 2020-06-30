export interface Payload<T = any> {
  data: T;
  networkError: boolean;
  ok: boolean;
  errorMessage: string | null;
  status: number | null;
}

export const defaultPayload: Payload = {
  data: null,
  networkError: false,
  ok: false,
  errorMessage: null,
  status: null,
};

export const fetchPayload = async (
  input: RequestInfo,
  init: RequestInit = {},
  token?: string
) => {
  console.log("fetch payload called");

  if (token) {
    init.headers = { ...init.headers, "x-access-token": token };
  }
  init.headers = {"Content-Type": "application/json",...init.headers}
  const payload: Payload = { ...defaultPayload };
  let response = await fetch(input, init).catch((e) => {
    if (e.name === "TypeError" && e.message === "Failed to fetch") {
      payload.networkError = true;
    } else {
      throw e;
    }
  });
  if (!payload.networkError) {
    response = response as Response;
    const data = await response.json().catch(() => null);

    payload.status = response.status;
    if (!response.ok) {
      payload.errorMessage = data && data.message;
    } else {
      payload.data = data;
      payload.ok = true;
    }
  }
  return payload;
};
