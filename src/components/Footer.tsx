import SiteLink from "./links/SiteLink";

export default function Footer() {
    return (
        <footer
            className="p-2 bg-white text-black"
        >
            <p>
                Report Issues on&nbsp;
                <SiteLink href="https://github.com/BluePixelDev/food-review/issues">
                    GitHub
                </SiteLink>
            </p>
        </footer>
    )
}