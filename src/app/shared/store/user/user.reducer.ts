import * as fromActions from './user.actions';
import { User } from './user.models';

export interface UserState {
  entity: User;
  uid: string;
  isLoading;
  error: string;
}

const initialState: UserState = {
  entity: null,
  uid: null,
  isLoading: null,
  error: null,
};

export function reducer(state = initialState, action: fromActions.All): UserState {
  switch (action.type) {
    //SignIn
    case fromActions.Types.SIGN_IN_EMAIL: {
      return {...state, isLoading: true};
    }

    case fromActions.Types.SIGN_IN_EMAIL_SUCCESS: {
      return {...state, entity: action.user, uid: action.uid, isLoading: false, error: null};
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

    default : {
      return state;
    }
  }
}
