import { NavLink } from "react-router-dom";

function NavBar(){

    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        textDecoration: "none",
      };

    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{background:"green",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="About"
                exact
                style={linkStyles}
                activeStyle={{background:"green",
                }}
            >
                About
            </NavLink>
            <NavLink
                to="Characters"
                exact
                style={linkStyles}
                activeStyle={{background:"green",
                }}
            >
                Characters
            </NavLink>
            <NavLink
                to="Movies"
                exact
                style={linkStyles}
                activeStyle={{background:"green",
                }}
            >
                Movies
            </NavLink>
        </div>
    )
}

export default NavBar