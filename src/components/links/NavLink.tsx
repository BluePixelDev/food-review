import React from "react"

type NavLinkProps = {
    href: string
    children: React.ReactNode
}

export default function SiteLink({ href, children }: NavLinkProps) {
    return (
        <a
            className="text-gray-800 text-center flex items-center"
            href={href}
        >
            {children}
        </a>
    )
}