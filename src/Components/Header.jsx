import { BotonMenu } from "./BotonMenu";
import { BotonPerfil } from "./BotonPerfil";
import "../styles/header.css";
import { NavLinksMenu } from "./NavLinks";
import { NavLinksMenuAuth } from "./NavlinksAuth";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { NavLinks } from "./Nav";
import { NavlinksAuth } from "./NavAuth";
import logo from "../../favicon.svg"

export function Header() {
  const { login } = useContext(LoginContext);
  const [ menu, setMenu ] = useState(false);

  function onClick() {
    setMenu(false);
  }

  return (
    <>
      <header className="header">
        <BotonMenu menuOpen={{menu, setMenu}} />
        <div className="div-logo">
        <img className="logo" src={logo} alt="Mis Viajes" />
        <h1 className="heading1">Mis Viajes</h1>
        </div>
        {!login && <NavLinks />}
        {login && <NavlinksAuth />}
        <BotonPerfil onClick={onClick} />
      </header>
      {menu && <div onClick={onClick} className="bg-black"></div>}
      
      {menu && !login && <NavLinksMenu onClick={onClick} />}
      {menu && login && <NavLinksMenuAuth onClick={onClick} />}
    </>
  );
}
