import Image from 'next/image';

export default function Banner() {
    return (
        <div className="relative w-full h-[100px] md:h-[150px] lg:h-[200px] overflow-hidden">
            {/* Background Image */}
            <Image
                src="/banner-background.png" // Change this to your actual image path
                layout="fill"
                objectFit="cover"
                alt="Banner Background"
                priority
                className='object-top'
            />

            {/* Title Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl lg:text-6xl font-bold">
                Food Review
            </div>
        </div>
    );
}
