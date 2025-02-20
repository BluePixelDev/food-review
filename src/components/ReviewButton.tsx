'use client'

import { Icon } from "@iconify/react"

type ReviewButtonProps = {
    state?: "Active" | "Disabled" | "Starred"
    onClick?: () => void
}

export default function ReviewButton(props: ReviewButtonProps) {
    const { state, onClick } = props;

    const isDisabled = state === "Disabled";
    const isStarred = state === "Starred";
    const isActive = state === "Active";

    return (
        <button
            className={`p-3 rounded-lg shadow-lg transition-transform duration-300 group
                ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-submit'} 
                ${isActive ? '' : 'group'}
            `}
            onClick={isActive ? onClick : undefined}
            disabled={isDisabled}
        >
           <Icon
                icon="material-symbols:kid-star-sharp"
                className={`text-submit_darker text-3xl
                    ${isStarred ? 'animate-bounce  text-yellow-300' : ''}
                    ${isActive ? 'group-hover:rotate-90' : ''}
                    ${isDisabled ? 'text-gray-300' : ''}
                    transition-all duration-300
                `}
            />
        </button>
    )
}