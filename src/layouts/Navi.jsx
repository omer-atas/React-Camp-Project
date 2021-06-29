import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignetOut from "./SignetOut";

export default function Navi() {
  /* state ve state'i değiştirecek method - initialState kullanıcının giriş yapmış mı yoksa yapmamış mı olduğunu anlamak için ture ya da false girilir..*/
  const [isAuthenticated, setiIsAuthenticated] = useState(true);
  const history = useHistory();
  /* useHistory kancası, gezinmek için kullanabileceğiniz geçmiş örneğine erişmenizi sağlar. */
  function handleSignOut() {
    setiIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn() {
    setiIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary></CartSummary>
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignetOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
