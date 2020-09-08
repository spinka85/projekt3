import React from "react";
import {
    Link,
} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";


function Navigation() {
    return (
        <>
            <nav>
                <div className="Navigation__links">
                    <Link to="/logowanie" className="Navigation__logIn">
                        ZALOGUJ
                    </Link>
                    <Link to="/rejestracja" className="Navigation__register">
                        ZAŁÓŻ KONTO
                    </Link>
                </div>

                <div className="Navigation__scrollLinks">
                    <Link to="/" className="Navigation__link">
                        Start
                    </Link>
                    <ScrollLink to="HomeSteps" smooth={true}>
                        O co chodzi?
                    </ScrollLink>
                    <ScrollLink to="HomeAbout" smooth={true}>
                        O nas
                    </ScrollLink>
                    <ScrollLink to="HomeHelp" smooth={true}>
                        Fundacje i organizacje
                    </ScrollLink>
                    <ScrollLink to="HomeContact" smooth={true}>
                        Kontakt
                    </ScrollLink>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
