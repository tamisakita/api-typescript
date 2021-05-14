export interface HTTPRequest {
  status?: any;
  body?: any
  params?: any
  query?: any
}

export interface HTTPResponse {
  status: number
  body?: any
}