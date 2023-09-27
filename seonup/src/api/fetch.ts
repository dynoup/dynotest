import { FetchDataPropsOptions, Method } from './fetch.type';

const DEFAULT_URL = 'http://127.0.0.1:5500';

function getOption(method: Method, body?: BodyInit): RequestInit {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };
}

export async function fetchData(
  path: string,
  method: Method,
  options?: FetchDataPropsOptions
) {
  try {
    const response = await fetch(`${DEFAULT_URL}${path}`, getOption(method));
    const data = await response.json();

    if (response.status >= 400 && response.status < 600) {
      if (options?.onError) options.onError(data);
    }

    if (options?.onSuccess) options?.onSuccess(data);

    return data;
  } catch (error: any) {
    console.log(`fetch Error!: ${error}`);
  }
}
