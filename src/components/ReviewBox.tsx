import ReviewButton from './ReviewButton';

export default function ReviewBox() {
    return (
        <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-lg m-3">
            <div className="flex-1">
                <h3 className="text-lg font-bold text-black">Review Title</h3>
                <span className="text-xs text-gray-400">January 30, 2025</span>
            </div>
            <ReviewButton state="Starred"/>
        </div>
    );
}
