import ReviewButton from './ReviewButton';

type ReviewBoxProps = {
    menu: string[]
    date: Date
    disabled: boolean
    reviewed: boolean
}

export default function ReviewBox({menu, date, reviewed, disabled}:ReviewBoxProps) {
    return (
        <div className={`bg-white rounded-lg p-4 flex items-center gap-4 shadow-lg m-3 ${disabled ? 'opacity-60' : ''}`}>
            <div className="flex-1">
                {menu.map((x, i) => {
                    return <h3 key={i} className="text-lg font-bold text-black">{x}</h3>
                })}
                <span className="text-xs text-gray-400">{date.toISOString()}</span>
            </div>
            <ReviewButton starred={reviewed} disabled={disabled} />
        </div>
    );
}
