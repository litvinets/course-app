import { Action } from '@ngrx/store';
import {
  EmailPasswordCredentials,
  User,
} from '@app/shared/store/user/user.models';
import { UserProfile, UserProfileRequest } from '@app/shared/models';

export enum Types {
  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init: Authorized',
  INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
  INIT_ERROR = '[User] Init: Error',

  SIGN_IN_EMAIL = '[User] Sign In with email: Start',
  SIGN_IN_EMAIL_SUCCESS = '[User] Sign In with email: Success',
  SIGN_IN_EMAIL_FAIL = '[User] Sign In with email: Fail',

  SIGN_UP_EMAIL = '[User] Sign Up with email: Start',
  SIGN_UP_EMAIL_SUCCESS = '[User] Sign Up with email: Success',
  SIGN_UP_EMAIL_FAIL = '[User] Sign Up with email: Fail',

  SIGN_OUT = '[User] Sign Out with email: Start',
  SIGN_OUT_SUCCESS = '[User] Sign Out with email: Success',
  SIGN_OUT_FAIL = '[User] Sign Out with email: Fail',

  CREATE_USER = '[User] Create User: Start',
  CREATE_USER_SUCCESS = '[User] Create User: Success',
  CREATE_USER_FAIL = '[User] Create User: Fail',

  UPDATE_USER = '[User] Update User: Start',
  UPDATE_USER_SUCCESS = '[User] Update User: Success',
  UPDATE_USER_FAIL = '[User] Update User: Fail',
}

//Init
export class Init implements Action {
  readonly type = Types.INIT;

  constructor() {
  }
}

export class InitAuthorized implements Action {
  readonly type = Types.INIT_AUTHORIZED;

  constructor(public uid: string, public user: User) {
  }
}

export class InitUnauthorized implements Action {
  readonly type = Types.INIT_UNAUTHORIZED;

  constructor() {
  }
}

export class InitError implements Action {
  readonly type = Types.INIT_ERROR;

  constructor(public error: string) {
  }
}

//Sign In
export class SignInEmail implements Action {
  readonly type = Types.SIGN_IN_EMAIL;

  constructor(public credentials: EmailPasswordCredentials) {
  }
}

export class SignInEmailSuccess implements Action {
  readonly type = Types.SIGN_IN_EMAIL_SUCCESS;

  constructor(public uid: string, public user: User) {
  }
}

export class SignInEmailFail implements Action {
  readonly type = Types.SIGN_IN_EMAIL_FAIL;

  constructor(public error: string) {
  }
}

//Sign Up
export class SignUpEmail implements Action {
  readonly type = Types.SIGN_UP_EMAIL;

  constructor(public credentials: EmailPasswordCredentials) {
  }
}

export class SignUpEmailSuccess implements Action {
  readonly type = Types.SIGN_UP_EMAIL_SUCCESS;

  constructor(public uid: string) {
  }
}

export class SignUpEmailFail implements Action {
  readonly type = Types.SIGN_UP_EMAIL_FAIL;

  constructor(public error: string) {
  }
}

//Sign Out
export class SignOut implements Action {
  readonly type = Types.SIGN_OUT;

  constructor() {
  }
}

export class SignOutSuccess implements Action {
  readonly type = Types.SIGN_OUT_SUCCESS;

  constructor() {
  }
}

export class SignOutFail implements Action {
  readonly type = Types.SIGN_OUT_FAIL;

  constructor(public error: string) {
  }
}

//Create User
export class CreateUser implements Action {
  readonly type = Types.CREATE_USER;

  constructor(public user: UserProfileRequest) {
  }
}

export class CreateUserSuccess implements Action {
  readonly type = Types.CREATE_USER_SUCCESS;

  constructor(public user: UserProfile) {
  }
}

export class CreateUserFail implements Action {
  readonly type = Types.CREATE_USER_FAIL;

  constructor(public error: string) {
  }
}

//Update User
export class UpdateUser implements Action {
  readonly type = Types.UPDATE_USER;

  constructor(public user: UserProfile) {
  }
}

export class UpdateUserSuccess implements Action {
  readonly type = Types.UPDATE_USER_SUCCESS;

  constructor(public user: UserProfile) {
  }
}

export class UpdateUserFail implements Action {
  readonly type = Types.UPDATE_USER_FAIL;

  constructor(public error: string) {
  }
}

export type All =
  | Init
  | InitAuthorized
  | InitUnauthorized
  | InitError
  | SignInEmail
  | SignInEmailSuccess
  | SignInEmailFail
  | SignUpEmail
  | SignUpEmailSuccess
  | SignUpEmailFail
  | SignOut
  | SignOutSuccess
  | SignOutFail
  | CreateUser
  | CreateUserSuccess
  | CreateUserFail
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail;
