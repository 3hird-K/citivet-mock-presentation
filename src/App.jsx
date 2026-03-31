const { useState, useEffect } = React;

const LiveClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit' };
    
    return (
        <div className="hidden lg:flex flex-col items-end justify-center select-none bg-card px-4 py-2 rounded-md border border-border shadow-sm" data-aos="fade-left" data-aos-delay="100">
            <span className="text-[11px] font-black tracking-widest uppercase text-muted-foreground leading-none">{time.toLocaleDateString('en-US', dateOptions)}</span>
            <span className="text-sm font-black tracking-wider text-primary leading-tight mt-1">{time.toLocaleTimeString('en-US', timeOptions)}</span>
        </div>
    );
};

const SlideTimer = ({ duration }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        setTimeLeft(duration);
    }, [duration]);

    useEffect(() => {
        if (!duration) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [duration]);

    if (!duration) return null;

    const absTime = Math.abs(timeLeft);
    const mins = Math.floor(absTime / 60);
    const secs = absTime % 60;
    const timeStr = `${timeLeft < 0 ? '-' : ''}${mins}:${secs.toString().padStart(2, '0')}`;

    let colorClass = "text-primary border-primary/30";
    let bgClass = "bg-primary/10";
    
    if (timeLeft <= 10 && timeLeft > 0) {
        colorClass = "text-orange-500 border-orange-500/30";
        bgClass = "bg-orange-500/10";
    } else if (timeLeft <= 0) {
        colorClass = "text-destructive border-destructive/30";
        bgClass = "bg-destructive/10";
    }

    const progress = Math.min(Math.max((duration - timeLeft) / duration, 0), 1) * 100;

    return (
        <div className={`hidden md:flex flex-col items-end justify-center select-none px-4 py-2 rounded-md border ${colorClass} ${bgClass} shadow-sm transition-colors duration-500 min-w-[100px] relative overflow-hidden`} data-aos="fade-left" data-aos-delay="150" title={`Allocated time: ${Math.floor(duration/60)}:${(duration%60).toString().padStart(2, '0')}`}>
             <div className="absolute bottom-0 left-0 h-1 bg-current opacity-20" style={{ width: `${progress}%`, transition: 'width 1s linear' }} />
             <span className="text-[11px] font-black tracking-widest uppercase opacity-70 leading-none">Slide Time</span>
             <span className="text-sm font-black tracking-wider leading-tight mt-1 tabular-nums">{timeStr}</span>
        </div>
    );
};

window.App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showNotes, setShowNotes] = useState(false);
    const [slideKey, setSlideKey] = useState(0);

    // Safely retrieve dependencies
    const slides = window.slidesData || [];
    const Icon = window.Icon;

    useEffect(() => {
        setSlideKey(prev => prev + 1);

        // Ensure scroll resets when slide changes
        const container = document.getElementById('slide-scroll-container');
        if (container) container.scrollTop = 0;

        setTimeout(() => {
            if (window.AOS) {
                window.AOS.init({ duration: 800, once: false, offset: 20 });
                // Strip existing animation classes to force a clean re-entry
                document.querySelectorAll('.aos-animate').forEach(el => {
                    el.classList.remove('aos-animate');
                });

                window.AOS.refreshHard();

                // Fire scroll event slightly after to ensure the observer picks up the new elements
                setTimeout(() => {
                    window.dispatchEvent(new Event('scroll'));
                }, 50);
            }
        }, 50);
    }, [currentSlide]);

    const nextSlide = () => { if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1); };
    const prevSlide = () => { if (currentSlide > 0) setCurrentSlide(prev => prev - 1); };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, slides.length]);

    if (!slides.length || !Icon) return <div className="text-foreground p-10">Loading components...</div>;

    return (
        <div className="h-screen w-screen flex flex-col relative bg-background overflow-hidden font-sans antialiased text-foreground mx-auto">

            {/* Header Navbar Floating Above */}
            {/* <nav className="h-[80px] mb-[-32px] px-8 md:px-12 rounded-lg py-12 border border-border flex justify-between items-center bg-card/80 backdrop-blur-xl shadow-md shrink-0 z-30 max-w-[1700px] w-full mx-auto mt-6">
                <div className="flex items-center gap-5 py-24">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-md flex items-center justify-center shadow-lg border border-primary">
                        <Icon name="Activity" size={28} className="text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-black text-foreground text-xl md:text-2xl tracking-tight leading-none">SyncVet Defense</h1>
                        <span className="text-xs font-black tracking-widest uppercase text-primary mt-1.5 block">CAPSTONE 2026</span>
                    </div>
                </div>
                <button
                    onClick={() => setShowNotes(!showNotes)}
                    className="bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground px-6 py-3.5 rounded-md text-sm font-black tracking-widest uppercase border border-border transition-all duration-300 flex items-center gap-3 shadow-sm active:scale-95"
                >
                    <Icon name={showNotes ? "EyeOff" : "Eye"} size={18} />
                    <span className="hidden sm:inline">{showNotes ? 'Hide Script' : 'Display Script'}</span>
                </button>
            </nav> */}

            {/* Content Body */}
            <div className="flex-1 flex flex-col relative overflow-hidden bg-background z-20">
                <div className="flex-1 flex flex-col p-8 md:p-12 overflow-hidden relative" key={`slide-wrapper-${slideKey}`}>
                    {/* Slide Title */}
                    <div className="mb-8 flex items-end justify-between shrink-0 max-w-[1700px] w-full mx-auto" data-aos="fade-down" data-aos-easing="ease-out-cubic">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground tracking-widest uppercase py-1">{slides[currentSlide].title}</h2>
                            <div className="w-24 h-2 bg-primary rounded-full mt-4" />
                        </div>
                        <div className="flex items-stretch gap-4">
                            <SlideTimer duration={slides[currentSlide].duration} key={`slide-timer-${slideKey}`} />
                            <LiveClock />
                            <div className="text-muted-foreground font-black tracking-widest text-xl hidden md:flex items-center justify-center select-none bg-card px-5 py-3 rounded-md border border-border shadow-sm" data-aos="fade-left">
                                <div>
                                    <span className="text-foreground">{String(currentSlide + 1).padStart(2, '0')}</span>
                                    <span className="opacity-40 ml-1">/ {String(slides.length).padStart(2, '0')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Slide Area */}
                    <div id="slide-scroll-container" className="flex-1 w-full overflow-y-auto overflow-x-hidden pr-4 custom-scrollbar flex flex-col max-w-[1700px] mx-auto z-10">
                        {slides[currentSlide].content}
                    </div>

                    {/* Footer navigation */}
                    <div className="pt-0 mt-0 mb-[-2rem] flex justify-between items-center shrink-0 max-w-[1700px] w-full mx-auto" data-aos="fade-up" data-aos-offset="0">
                        <button onClick={prevSlide} disabled={currentSlide === 0} className="w-14 h-14 md:w-16 md:h-16 rounded-md flex items-center justify-center bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-20 transition-all hover:-translate-x-1 duration-300 shadow-sm">
                            <Icon name="ChevronLeft" size={28} />
                        </button>

                        <div className="flex gap-3 px-8 py-4 rounded-md bg-card border border-border hidden sm:flex shadow-sm">
                            {slides.map((_, i) => (
                                <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-primary shadow-sm' : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground'}`} aria-label={`Go to slide ${i + 1}`} />
                            ))}
                        </div>

                        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="w-14 h-14 md:w-16 md:h-16 rounded-md flex items-center justify-center bg-primary text-primary-foreground disabled:opacity-20 transition-all hover:translate-x-1 duration-300 shadow-md border border-primary">
                            <Icon name="ChevronRight" size={28} />
                        </button>
                    </div>
                </div>

                {/* Presenter Notes Overlay */}
                {showNotes && (
                    <div className="absolute inset-x-0 bottom-0 bg-card/95 backdrop-blur-xl px-8 py-8 md:px-14 border-t border-border z-50 shadow-2xl" data-aos="slide-up" data-aos-duration="400">
                        <div className="max-w-[1700px] mx-auto flex gap-6 md:gap-10 items-start">
                            <div className="bg-primary/10 p-5 rounded-md shrink-0 mt-1 border border-primary/20">
                                <Icon name="MessageSquareText" size={36} className="text-primary" />
                            </div>
                            <div className="max-h-56 overflow-y-auto custom-scrollbar pr-6 flex-1">
                                <h4 className="text-[12px] md:text-sm font-black tracking-widest text-primary mb-3 uppercase">Presenter Script</h4>
                                <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed font-serif italic text-balance">{slides[currentSlide].notes}</p>
                            </div>
                            <button onClick={() => setShowNotes(false)} className="text-muted-foreground hover:text-foreground p-3 shrink-0 transition-colors bg-muted rounded-md border border-border hover:bg-destructive/20 hover:text-destructive">
                                <Icon name="X" size={28} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
