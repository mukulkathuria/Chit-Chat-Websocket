import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/Login/login";
import { auth } from "./Firebase/firebase.utils";
import Chatbox from "./Components/Chat/Chatbox";

interface Users {
  displayName: string;
  email: string;
}

const App: React.FC = () => {
  const [currentUser, setUser] = useState<Users | null>(null);
  useEffect(() => {
    let unsubscribe: () => void;
    unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        const { displayName, email } = user;
        setUser({ displayName, email });
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={(props) => {
            if (currentUser) return <Chatbox user={currentUser} {...props} />;
            return <LoginPage {...props} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
