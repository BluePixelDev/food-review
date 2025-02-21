import React from "react"

type SiteLinkProps = {
    href: string
    children: React.ReactNode
}

export default function SiteLink({ href, children }: SiteLinkProps) {
    return (
        <a
            className="text-green-500 underline hover:text-green-600"
            href={href}
        >
            {children}
        </a>
    )
}