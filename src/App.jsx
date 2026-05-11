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
            if (e.key === 'n') setShowNotes(prev => !prev);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, slides.length]);

    if (!slides.length || !Icon) return <div className="text-foreground p-10 flex items-center justify-center h-screen font-black text-4xl animate-pulse">Initializing SyncVet...</div>;

    return (
        <div className="h-screen w-screen flex flex-col relative bg-background overflow-hidden font-sans antialiased text-foreground mx-auto">
            
            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col relative overflow-hidden pt-8 pb-20 px-8 md:px-12 lg:px-16">
                <div className="max-w-[1500px] w-full mx-auto h-full flex flex-col" key={`slide-wrapper-${slideKey}`}>
                    
                    {/* Slide Header (Integrated) */}
                    <header className="mb-10 flex items-start justify-between shrink-0 gap-6" data-aos="fade-down">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                                    <Icon name="Activity" size={16} className="text-primary" />
                                </div>
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/70">SyncVet Defense • Slide {currentSlide + 1}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground tracking-tight leading-tight uppercase py-1 border-l-4 border-primary pl-6">
                                {slides[currentSlide].title}
                            </h2>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <LiveClock />
                            <SlideTimer duration={slides[currentSlide].duration} key={`slide-timer-${slideKey}`} />
                        </div>
                    </header>

                    {/* Slide Body */}
                    <div id="slide-scroll-container" className="flex-1 w-full overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar flex flex-col justify-center z-10">
                        {slides[currentSlide].content}
                    </div>
                </div>

                {/* Simplified Bottom Controls */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] flex justify-between items-center z-50 pointer-events-none px-4">
                    <button onClick={prevSlide} disabled={currentSlide === 0} className="w-12 h-12 rounded-xl flex items-center justify-center bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-10 transition-all pointer-events-auto shadow-sm active:scale-95">
                        <Icon name="ChevronLeft" size={24} />
                    </button>

                    <div className="flex items-center gap-4 pointer-events-auto">
                        <div className="flex gap-1.5 px-4 py-2.5 rounded-full bg-muted/50 border border-border/50 hidden sm:flex">
                            {slides.map((_, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => setCurrentSlide(i)} 
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-primary' : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} 
                                    aria-label={`Go to slide ${i + 1}`} 
                                />
                            ))}
                        </div>
                    </div>

                    <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary text-primary-foreground disabled:opacity-10 transition-all pointer-events-auto shadow-lg border border-primary active:scale-95">
                        <Icon name="ChevronRight" size={24} />
                    </button>
                </div>

                {/* Script Overlay (Toned Down) */}
                {showNotes && (
                    <div className="fixed inset-x-0 bottom-0 bg-card/98 backdrop-blur-xl px-8 py-8 md:px-16 border-t border-border z-[100] shadow-2xl transition-all duration-500 animate-in slide-in-from-bottom">
                        <div className="max-w-[1200px] mx-auto flex gap-8 items-start">
                            <div className="bg-primary/5 p-4 rounded-xl shrink-0 border border-primary/10">
                                <Icon name="MessageSquareText" size={28} className="text-primary" />
                            </div>
                            <div className="max-h-[25vh] overflow-y-auto custom-scrollbar pr-6 flex-1">
                                <h4 className="text-[10px] font-black tracking-[0.2em] text-primary/60 uppercase mb-3">Presenter Notes</h4>
                                <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">{slides[currentSlide].notes}</p>
                            </div>
                            <button onClick={() => setShowNotes(false)} className="text-muted-foreground hover:text-foreground p-2 shrink-0 transition-all bg-muted/50 rounded-lg">
                                <Icon name="X" size={20} />
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};


