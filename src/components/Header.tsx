import SignInButton from "./buttons/SignInButton";
import NavLink from "./links/NavLink"

export default function Header() {
    return (
        <header
        className="w-full p-4 z-20 flex justify-end text-white gap-3" 
        >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/stats">Stats</NavLink>
            <SignInButton/>
        </header>
    )
}