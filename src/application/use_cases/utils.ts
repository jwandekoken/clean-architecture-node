class HttpError extends Error {
  statusCode?: number;

  constructor(msg: string, statusCode?: number) {
    super(msg);
    if (statusCode) {
      this.statusCode = statusCode;
    }
  }
}

export { HttpError };
