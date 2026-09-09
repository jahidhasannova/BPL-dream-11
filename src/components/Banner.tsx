
import React from 'react';
import bgShado from '../assets/bg-shadow.png';
import BannerImage from '../assets/banner-main.png';
//import Players from './Players/players';

const Banner = () => {
    return (
        <div className="flex justify-center mt-6 mb-12 px-4">
            <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl shadow-xl">

                {/* Background Image */}
                <img
                    className="w-full min-h-[420px] md:min-h-[480px] object-cover"
                    src={bgShado}
                    alt="Banner background"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">

                    {/* Banner Image */}
                    <div className="mb-5 animate-pulse">
                        <img
                            src={BannerImage}
                            alt="Cricket"
                            className="
                                w-28
                                md:w-36
                                drop-shadow-2xl
                                transition-transform
                                duration-500
                                hover:scale-110
                            "
                        />
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            text-2xl
                            sm:text-3xl
                            md:text-4xl
                            lg:text-5xl
                            font-extrabold
                            text-green-950
                            leading-tight
                            max-w-4xl
                        "
                    >
                        Assemble Your Ultimate
                        <span className="text-green-600"> Dream-11 </span>
                        Cricket Team
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="
                            mt-4
                            text-base
                            md:text-lg
                            font-semibold
                            text-red-800
                            tracking-wide
                        "
                    >
                        Beyond Boundaries • Beyond Limits
                    </p>

                    {/* Button */}
                    <button
                        className="
                            mt-6
                            btn
                            btn-warning
                            px-7
                            rounded-full
                            font-bold
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-2xl
                        "
                    >
                        Claim Free Credit
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Banner;

