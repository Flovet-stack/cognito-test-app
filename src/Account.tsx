import React, { ReactNode, useState } from "react";
import { createContext } from "react";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import Pool from "./Userpool";

export interface User {
  email: string;
  password: string;
}

export interface InitialStateProps {
  user: User | null;
}

const InitialState: InitialStateProps = {
  user: null,
};

// get user session
const getSession = async () => {
  return await new Promise((resolve, reject) => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.getSession((error: any, session: CognitoUserSession) => {
        if (error) {
          reject();
        } else {
          resolve(session);
        }
      });
    } else {
      reject();
    }
  });
};

// authenticate user info
const authenticate = async (Username: string, Password: string) => {
  return await new Promise<CognitoUserSession>((resolve, reject) => {
    const user = new CognitoUser({
      Username,
      Pool,
    });

    const authDetails = new AuthenticationDetails({
      Username,
      Password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        resolve(data);
      },
      onFailure: function (error): void {
        console.error("onFailure: ", error);
        reject(error);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
        resolve(data);
      },
    });
  });
};

// logout
const logout = () => {
  const user = Pool.getCurrentUser();
  if (user) {
    user.signOut();
  }
};

interface ContextProps {
  state: InitialStateProps;
  setState: (state: InitialStateProps) => void;
  authenticate: (
    Username: string,
    Password: string
  ) => Promise<CognitoUserSession>;
  getSession: () => void;
  logout: () => void;
}

const AccountContext = createContext<ContextProps>({
  state: InitialState,
  setState: (state) => state,
  authenticate,
  getSession,
  logout,
});

interface AccountProps {
  children: ReactNode;
}

const Account = (props: AccountProps) => {
  const [state, setState] = useState(InitialState);
  return (
    <AccountContext.Provider
      value={{ authenticate, state, setState, getSession, logout }}
    >
      <div>{props.children}</div>
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
