/**
 * RegExp Constants
 */
export const PASSWORD_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
export const NUMBERS_REGEX: RegExp = /^[0-9]*$/;
export const EMAIL_REGEX: RegExp = /^\S+@\S+\.\S+$/;
