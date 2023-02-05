/** password */
export interface IPasswordRequestBody {
  password: string;
}

export interface IPasswordResponseBody {
  password: string;
  strength: string;
  isCommon: boolean;
}

export interface IPasswordStrengthResult {
  id: number;
  value: string;
  contains: string[];
  length: number;
}

/** url */

/** email */
