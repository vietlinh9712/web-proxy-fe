/* eslint-disable @typescript-eslint/naming-convention */
export interface ErrorInfo {
  error_code: number;
  message: number;
};

export interface CommonResponse<T> {
  error_info: ErrorInfo;
  data?: T;
  error?: string;
}
