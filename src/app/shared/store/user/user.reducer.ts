import * as fromActions from './user.actions';
import { User, UserProfile } from '@app/shared/models';

export interface UserState {
  entity: UserProfile | User;
  uid: string;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  entity: null,
  uid: null,
  isLoading: null,
  error: null,
};

export function reducer(
  state = initialState,
  action: fromActions.All
): UserState {
  switch (action.type) {
    //Init
    case fromActions.Types.INIT: {
      return {...state, isLoading: true};
    }

    case fromActions.Types.INIT_AUTHORIZED: {
      return {
        ...state,
        entity: action.user,
        uid: action.uid,
        isLoading: false,
        error: null,
      };
    }

    case fromActions.Types.INIT_UNAUTHORIZED: {
      return {...initialState};
    }

    case fromActions.Types.INIT_ERROR: {
      return {...state, error: action.error, isLoading: false};
    }

    //SignIn
    case fromActions.Types.SIGN_IN_EMAIL: {
      return {...state, isLoading: true};
    }

    case fromActions.Types.SIGN_IN_EMAIL_SUCCESS: {
      return {
        ...state,
        entity: action.user,
        uid: action.uid,
        isLoading: false,
        error: null,
      };
    }

    case fromActions.Types.SIGN_IN_EMAIL_FAIL: {
      return {...state, error: action.error, isLoading: false};
    }

    //SignUp
    case fromActions.Types.SIGN_UP_EMAIL: {
      return {...state, isLoading: true};
    }

    case fromActions.Types.SIGN_UP_EMAIL_SUCCESS: {
      return {...state, uid: action.uid, isLoading: false, error: null};
    }

    case fromActions.Types.SIGN_UP_EMAIL_FAIL: {
      return {...state, error: action.error, isLoading: false};
    }

    //SignOut
    case fromActions.Types.SIGN_OUT: {
      return {...state, isLoading: true};
    }

    case fromActions.Types.SIGN_OUT_SUCCESS: {
      return {...initialState};
    }

    case fromActions.Types.SIGN_OUT_FAIL: {
      return {...state, error: action.error, isLoading: false};
    }

    //CreateUser
    case fromActions.Types.CREATE_USER: {
      return {...state, isLoading: true};
    }

    case fromActions.Types.CREATE_USER_SUCCESS: {
      return {...state, entity: action.user, isLoading: false, error: null};
    }

    case fromActions.Types.CREATE_USER_FAIL: {
      return {...state, error: action.error, isLoading: false};
    }

    //UpdateUser
    case fromActions.Types.UPDATE_USER: {
      return {...state, isLoading: true};
    }

    case fromActions.Types.UPDATE_USER_SUCCESS: {
      return {...state, entity: action.user, isLoading: false, error: null};
    }

    case fromActions.Types.UPDATE_USER_FAIL: {
      return {...state, error: action.error, isLoading: false};
    }

    default: {
      return state;
    }
  }
}
