import { dropdowns } from "./dropdowns";
import { NavDropdown } from "./NavDropdown";

const NavLinks = () => {
    return (
        <>
            <li>
                <a href="/sorin-istrail">Sorin Istrail</a>
            </li>
            {dropdowns.map((dropdown) => (
                <NavDropdown {...dropdown} />
            ))}
            <li>
                <a href="/essays">Essays</a>
            </li>
            <li>
                <a href="/publications">Publications</a>
            </li>
            <li>
                <a href="/media-coverage">Media</a>
            </li>
        </>
    );
};

export default NavLinks;
