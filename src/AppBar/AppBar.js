import css from "./AppBar.module.css";

import { Navigation } from "../Navigation/Navigation";

import { AuthMenu } from "../AuthMenu/AuthMenu";

import { UserMenu } from "../UserMenu/UserMenu";


import { useAuth } from "../hooks/useAuth";

export const AppBar = () => {
  const {isLoggedIn} = useAuth()
  return (
    <header className={css.wrapper}>

      <Navigation/>
      {console.log(isLoggedIn)}

      {isLoggedIn ? <UserMenu/> : <AuthMenu/>}
    </header>
  );
};
