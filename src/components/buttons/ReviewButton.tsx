'use client'

import { Icon } from "@iconify/react"

type ReviewButtonProps = {
    starred: boolean
    disabled: boolean
    onClick?: () => void
}

export default function ReviewButton(props: ReviewButtonProps) {
    const { starred, disabled, onClick } = props;

    return (
        <button
            className={`p-3 rounded-lg shadow-lg transition-transform duration-300 group
                ${disabled ? 'bg-gray-400 cursor-not-allowed group' : 'bg-submit cursor-pointer'} 
            `}
            onClick={!disabled ? onClick : undefined}
            disabled={!disabled}
        >
            <Icon
                icon="material-symbols:kid-star-sharp"
                className={`text-3xl 
                    ${starred && !disabled ? 'animate-bounce text-yellow-300' : ''}
                    ${!starred && !disabled ? 'text-green-700' : ''}
                    ${starred && disabled ? 'animate-bounce text-yellow-200' : ''}
                    ${!disabled ? 'group-hover:rotate-90' : 'text-gray-500'}
                    transition-all duration-300
                `}
            />
        </button>
    )
}