import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="font-[JetBrains_Mono] flex items-center justify-between px-4 py-6 w-full lg:px-0 lg:pt-15 lg:w-9/20 2xl:w-2/5">
            <NavLink to="/" className="font-semibold">as</NavLink>
            <a href="https://disciple.hashnode.dev/" target="_blank" className="font-medium text-sm">Writing</a>
        </nav>
    );
}

export default Navbar;
