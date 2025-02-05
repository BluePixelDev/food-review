'use client'

import { Icon } from "@iconify/react"

type ReviewButtonProps = {
    state?: "Active" | "Disabled" | "Starred"
    onClick?: () => void
}

export default function ReviewButton(props: ReviewButtonProps) {
    return (
        <button
            className="bg-green-400 p-4 rounded-lg border-b-4 border-green-600"
            onClick={props.onClick}
        >
            <Icon icon="material-symbols:kid-star-sharp" color="yellow" className="shadow-sm"></Icon>
        </button>
    )
}