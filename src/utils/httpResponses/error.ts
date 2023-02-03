class BaseError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class HttpRequestError extends BaseError {
  constructor(
    public status: number,
    public name: string,
    public message: string
  ) {
    super();
  }
}

export { HttpRequestError };
