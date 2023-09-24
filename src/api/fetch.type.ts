export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetchDataPropsOptions {
  onSuccess?: (data: any) => void;
  onError?: (data: any) => void;
}
