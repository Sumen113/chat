const Loader = () => {
    return (
        <div className="h-[92vh] w-screen flex flex-col  items-center justify-center gap-4 relative">
            <svg className="pl" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                        <stop offset="0%" stopColor="hsl(105, 83.10%, 11.60%)" />
                        <stop offset="100%" stopColor="hsl(123, 90.40%, 55.10%)" />
                        {/* <stop offset="0%" stopColor="#f43f5e" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#3b82f6" /> */}
                    </linearGradient>
                    <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(115, 90.40%, 55.10%)" />
                        <stop offset="100%" stopColor="hsl(128, 69.60%, 9.00%)" />
                    </linearGradient>
                </defs>
                <circle
                    className="pl__ring"
                    cx="100"
                    cy="100"
                    r="82"
                    fill="none"
                    stroke="url(#pl-grad1)"
                    strokeWidth="30"
                    strokeDasharray="0 257 1 257"
                    strokeDashoffset="0.01"
                    strokeLinecap="round"
                    transform="rotate(-90,100,100)"
                />
                <line
                    className="pl__ball"
                    stroke="url(#pl-grad2)"
                    x1="100"
                    y1="18"
                    x2="100.01"
                    y2="182"
                    strokeWidth="30"
                    strokeDasharray="1 165"
                    strokeLinecap="round"
                />
            </svg>

            {/* <p className="text-gradient text-3xl md:text-4xl font-bold tracking-wider uppercase">Loading</p> */}
            <p className="text-gradient text-lg md:text-2xl font-bold tracking-wider uppercase ">Loading</p>
        </div>
    );
};

export default Loader;
