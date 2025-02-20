export default function ContentArea({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-8">
            {children}
        </div>
    )
}