import { passwordStrength } from "check-password-strength";
import { IPasswordStrengthResult } from "../../types";

const customOptions: any = [
  {
    id: 1,
    value: "Very Weak",
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 2,
    value: "Weak",
    minDiversity: 1,
    minLength: 6,
  },
  {
    id: 3,
    value: "Medium",
    minDiversity: 2,
    minLength: 8,
  },
  {
    id: 4,
    value: "Strong",
    minDiversity: 3,
    minLength: 10,
  },
  {
    id: 5,
    value: "Very Strong",
    minDiversity: 4,
    minLength: 12,
  },
];

export const checkPasswordStrength = (
  password: string
): IPasswordStrengthResult => {
  return passwordStrength(password, customOptions);
};
