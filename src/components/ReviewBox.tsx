import Image from 'next/image';
import ReviewButton from './ReviewButton';

export default function ReviewBox() {
    return (
        <div className="bg-white rounded-lg p-4 flex items-center gap-4 border-b-4 border-gray-300 m-3">
            <div className="w-32 h-32 ml-4">
                <Image
                    src="/placeholder-image.png"
                    alt="Review"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-lg font-bold text-black">Review Title</h3>
                <span className="text-xs text-gray-400">January 30, 2025</span>
            </div>
            <ReviewButton state="Starred"/>
        </div>
    );
}
