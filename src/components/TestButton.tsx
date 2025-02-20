type TestButtonProps = {
    label: string
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

/**
 * An example button for learning and testing purposes.
 */
export default function ({ label, className, onClick, children }: TestButtonProps) {
    return (
        <button
            className={`bg-green-600 p-5 rounded-2xl transition hover:bg-green-700 ${className}`}
            onClick={onClick}
        >
            {children}
            <p>{label}</p>
        </button>
    )
}