export interface ObjectResponse {
  data: object;
}

export interface HomeState {
  response?: ObjectResponse;
  loading?: boolean;
  error?: boolean;
  message?: string;
}

export interface MovieDetailState {
  response?: ObjectResponse;
  loading?: boolean;
  error?: boolean;
  message?: string;
}
