import SignInButton from "./SignInButton";

export default function Header() {
    return (
        <header
        className="absolute top-0 w-full p-4 z-20 flex justify-end text-white gap-3" 
        >
            <SignInButton/>
        </header>
    )
}