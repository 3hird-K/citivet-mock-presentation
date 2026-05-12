const ZoomableImage = ({ src, alt, className }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isZoomedIn, setIsZoomedIn] = React.useState(false);

    React.useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                setIsZoomedIn(false);
            }
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen]);

    return (
        <React.Fragment>
            <img
                src={src}
                alt={alt}
                className={`cursor-pointer transition-transform hover:scale-[1.02] ${className}`}
                onClick={() => setIsOpen(true)}
            />
            {isOpen && window.ReactDOM && window.ReactDOM.createPortal(
                <div
                    className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-xl overflow-auto custom-scrollbar"
                    onClick={() => { setIsOpen(false); setIsZoomedIn(false); }}
                >
                    <div className={`min-h-full min-w-full flex ${isZoomedIn ? 'items-start justify-center' : 'items-center justify-center'} p-4 md:p-12`}>
                        <div className="relative">
                            <img
                                src={src}
                                alt={alt}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsZoomedIn(!isZoomedIn);
                                }}
                                className={`${isZoomedIn ? 'max-w-none w-[2000px] h-auto cursor-zoom-out' : 'max-w-[95vw] max-h-[90vh] cursor-zoom-in'} object-contain rounded-2xl shadow-[0_0_150px_rgba(0,0,0,0.9)] border border-white/5 bg-white p-2 md:p-4 transition-all duration-300`}
                            />
                        </div>
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); setIsZoomedIn(false); }}
                        className="fixed top-6 right-6 lg:top-10 lg:right-10 bg-black/50 hover:bg-black/80 text-white p-4 rounded-full border border-white/20 hover:scale-110 transition-all shadow-2xl z-[100001] backdrop-blur-md"
                    >
                        <window.Icon name="X" size={32} />
                    </button>

                    {!isZoomedIn && (
                        <p className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase select-none pointer-events-none bg-black/50 px-6 py-2 rounded-full backdrop-blur-md border border-white/10">
                            Click image to zoom in, anywhere else to close
                        </p>
                    )}
                </div>,
                document.body
            )}
        </React.Fragment>
    );
};

window.slidesData = [
    {
        id: "title",
        duration: 15,
        title: "SyncVet Overview",
        content: (
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12 relative">
                {/* Visual Accent */}
                <div data-aos="zoom-in" className="mb-10 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse-slow"></div>
                    <div className="relative w-24 h-24 bg-card border border-primary/20 rounded-2xl flex items-center justify-center shadow-sm">
                        <window.Icon name="Activity" size={48} className="text-primary" />
                    </div>
                </div>

                <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
                    <span className="text-foreground">Sync</span>
                    <span className="text-primary">Vet</span>
                </h1>

                <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-5xl px-6 leading-tight mb-10">
                    A Web and Mobile-Based <span className="text-foreground font-bold">Animal Health Management System</span> with <span className="text-primary font-black uppercase tracking-tight">Predictive Resource Forecasting</span> for the Cagayan de Oro City Veterinary Office
                </p>

                <div data-aos="fade-up" data-aos-delay="300">
                    <a
                        href="https://docs.google.com/document/d/1E8l9FYV4jhtoRUmHWkaCyxX7IwUQsTf5/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground rounded-full font-black tracking-[0.2em] uppercase text-[10px] border border-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 group backdrop-blur-md"
                    >
                        <window.Icon name="FileText" size={16} className="group-hover:rotate-12 transition-transform" />
                        <span>View Documentation</span>
                    </a>
                </div>
            </div>
        ),
        notes: "Good morning/afternoon, panel members and everyone present. My name is Jungkook, and today I will be presenting our capstone project titled SyncVet..."
    },
    {
        id: "background",
        duration: 30,
        title: "Background of the Study",
        content: (
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 items-stretch">
                    {/* Global Impact - Focused Hero */}
                    <div data-aos="fade-right" className="bg-gradient-to-br from-destructive/10 to-transparent border border-destructive/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
                        <window.Icon name="Globe" size={120} className="absolute -right-8 -top-8 text-destructive/5 opacity-40 group-hover:rotate-12 transition-transform duration-1000" />
                        <span className="text-destructive font-black uppercase tracking-[0.4em] text-[10px] mb-6 block border-l-2 border-destructive pl-4">Global Crisis</span>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-6xl font-black text-foreground tracking-tighter">59k</h3>
                            <p className="text-xl font-bold text-foreground/90 leading-tight">Human rabies deaths annually worldwide.</p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4 font-medium opacity-80 italic">Underserved communities are the most vulnerable.</p>
                    </div>

                    {/* National Context - Integrated Stats */}
                    <div data-aos="fade-up" data-aos-delay="100" className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block border-l-2 border-primary pl-4">National Scope</span>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-4xl font-black text-foreground">4.0M</h4>
                                <p className="text-sm md:text-base text-muted-foreground font-medium leading-snug">Animal bite cases recorded in the Philippines every year.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-4xl font-black text-primary">76%</h4>
                                <p className="text-sm md:text-base text-muted-foreground font-medium leading-snug">Of bites come from owned but unvaccinated pets.</p>
                            </div>
                        </div>
                    </div>

                    {/* Local Challenge - Problem Statement */}
                    <div data-aos="fade-left" data-aos-delay="200" className="bg-muted/30 border border-border rounded-3xl p-8 flex flex-col justify-center relative group">
                        <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary mb-6 shadow-sm group-hover:rotate-6 transition-transform">
                            <window.Icon name="DatabaseZap" size={24} />
                        </div>
                        <span className="text-muted-foreground font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">The LGU Reality</span>
                        <p className="text-lg md:text-xl font-bold text-foreground leading-snug">
                            Local Government Units (LGUs) struggle with <span className="text-primary font-black underline decoration-4 underline-offset-4">fragmented records</span> and critical data delays.
                        </p>
                        <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                            <window.Icon name="FileWarning" size={16} className="text-destructive" />
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Manual Inefficiency</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        notes: "Globally, rabies causes 59,000 deaths. In the PH, we have 4M animal bites. 76% from owned pets. CVO operations rely on paper..."
    },
    {
        id: "problem",
        duration: 90,
        title: "Statement of the Problem",
        content: (
            <div className="flex flex-col gap-6 pt-4 max-w-6xl mx-auto w-full">
                <div data-aos="fade-right" className="p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 shrink-0">
                    <div className="bg-primary/10 p-4 rounded-lg shrink-0 text-primary border border-primary/20">
                        <window.Icon name="Target" size={32} />
                    </div>
                    <div>
                        <h3 className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2">General Problem</h3>
                        <p className="text-xl md:text-2xl font-bold text-foreground leading-tight tracking-tight">Fragmented and <span className="text-primary font-black uppercase">paper-dependent</span> workflows due to the lack of an integrated digital system.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {[
                        { title: "Disconnected Systems", icon: "Link2Off", desc: "Field and walk-in records are completely separated." },
                        { title: "No Mobile Tool", icon: "Smartphone", desc: "Lack of an offline-ready application for field data capture." },
                        { title: "Delayed Integration", icon: "Clock", desc: "No real-time data access significantly slows down critical decisions." },
                        { title: "Reactive Planning", icon: "Brain", desc: "Lack of predictive tools leads to resource stockouts or waste." }
                    ].map((p, i) => (
                        <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} className="flex items-center gap-5 p-5 rounded-xl bg-muted/20 border border-border/50">
                            <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                                <window.Icon name={p.icon} size={24} className="text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-black text-foreground text-xl tracking-tight uppercase mb-0.5">{p.title}</h4>
                                <p className="text-sm md:text-base text-muted-foreground font-medium leading-snug">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        notes: "Our research identified one general problem and five specific problems..."
    },
    {
        id: "objectives",
        duration: 90,
        title: "Objectives of the Study",
        content: (
            <div className="flex flex-col gap-8 pt-4 max-w-6xl mx-auto w-full">
                <div data-aos="zoom-in" className="bg-primary/5 p-8 rounded-xl border border-primary/20 text-center mb-2 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Main Goal</div>
                    <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed max-w-4xl mx-auto">
                        To design, develop, and test a real-time mobile and web animal health management system with <span className="text-primary underline decoration-2 underline-offset-4">predictive resource forecasting</span> for the CDO-CVO.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-stretch">
                    {[
                        { action: "DESIGN", icon: "PenTool", desc: "System architecture and UI/UX for Mobile, Web, and ML-dashboards." },
                        { action: "DEVELOP", icon: "Code2", desc: "Offline data capture and real-time cloud sync with forecasting engines." },
                        { action: "FORECAST", icon: "TrendingUp", desc: "Use past-month data to predict current-month vaccine & supply needs." },
                        { action: "TEST", icon: "TestTube", desc: "Evaluate functionality, usability, and forecast accuracy via field simulation." }
                    ].map((obj, i) => (
                        <div key={i} data-aos="fade-up" data-aos-delay={`${i * 150}`} className={`flex-1 p-6 rounded-2xl border border-border bg-card flex flex-col items-center text-center transition-all hover:border-primary/40 shadow-sm relative group`}>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary/20 group-hover:bg-primary transition-colors rounded-b-full"></div>
                            <div className={`w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 border border-primary/10`}>
                                <window.Icon name={obj.icon} size={24} className="text-primary" />
                            </div>
                            <h3 className={`text-xl font-black mb-2 text-foreground tracking-widest uppercase`}>{obj.action}</h3>
                            <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-[240px]">{obj.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
        notes: "Our general objective is to design, develop, and test SyncVet..."
    },
    {
        id: "significance",
        duration: 45,
        title: "Significance of the Study",
        content: (
            <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
                {/* Direct Impact Group */}
                <div className="flex flex-col gap-4">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] opacity-70 ml-2">Direct Stakeholders</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { title: "City Vet Office", icon: "Building2", desc: "Optimized inventory through ML-driven forecasting based on past-month patterns." },
                            { title: "Veterinary Staff", icon: "Stethoscope", desc: "Proactive resource alerts for the current month driven by historical data." },
                            { title: "Pet Owners", icon: "Heart", desc: "Improved vaccine availability through data-driven supply chain forecasting." }
                        ].map((item, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/30 transition-all flex flex-col gap-4">
                                <div className="bg-primary/5 border border-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                                    <window.Icon name={item.icon} size={24} />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-black text-lg mb-1 tracking-tight uppercase">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Extended Value Group */}
                <div className="flex flex-col gap-4">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] opacity-70 ml-2">Extended Impact</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
                        {[
                            { title: "Policymakers", icon: "PieChart", desc: "Real-time aggregated reports and hotspot maps for evidence-based planning." },
                            { title: "Future Researchers", icon: "GraduationCap", desc: "A documented case study of modern mobile-web veterinary system development." }
                        ].map((item, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={`${(i + 3) * 100}`} className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/30 transition-all flex items-center gap-6">
                                <div className="bg-primary/5 border border-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <window.Icon name={item.icon} size={28} />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-black text-lg mb-1 tracking-tight uppercase">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        notes: "SyncVet is significant to multiple groups of stakeholders..."
    },
    {
        id: "scope",
        duration: 60,
        title: "Scope & Limitations",
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 items-stretch max-w-6xl mx-auto w-full">
                <div data-aos="fade-right" className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6 border-b border-border pb-6">
                        <div className="bg-primary/5 p-3 rounded-xl border border-primary/10">
                            <window.Icon name="CheckCircle2" size={24} className="text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-black text-foreground tracking-widest uppercase">Scope</h3>
                    </div>
                    <ul className="space-y-2">
                        {[
                            "React Native mobile app & Web Admin portal",
                            "Supports dogs and cats only",
                            "Covers urban & peri-urban barangays in CDO",
                            "Offline field capture & walk-in records",
                            "Batch registration & QR pet passports",
                            "Current-month forecasting using past-month data"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 text-foreground font-medium items-center p-3 hover:bg-muted/30 transition-colors rounded-xl">
                                <window.Icon name="Check" size={14} className="text-primary shrink-0" />
                                <span className="text-sm md:text-base leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div data-aos="fade-left" data-aos-delay="100" className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6 border-b border-border pb-6">
                        <div className="bg-muted p-3 rounded-xl border border-border">
                            <window.Icon name="XCircle" size={24} className="text-muted-foreground" />
                        </div>
                        <h3 className="text-lg md:text-xl font-black text-muted-foreground tracking-widest uppercase">Limitations</h3>
                    </div>
                    <ul className="space-y-2">
                        {[
                            "Geographically limited to Cagayan de Oro City",
                            "Phil-AHIS national integration not implemented",
                            "Assumes minimum digital literacy & device access",
                            "Does not measure long-term epidemiological impact"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 text-muted-foreground font-medium items-center p-3 hover:bg-muted/30 transition-colors rounded-xl">
                                <window.Icon name="Slash" size={12} className="text-muted-foreground/40 shrink-0" />
                                <span className="text-sm md:text-base leading-snug opacity-70">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ),
        notes: "Let me now clarify what the study covers and where its boundaries lie..."
    },
    // {
    //     id: "features",
    //     title: "Key Features of SyncVet",
    //     content: (
    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 max-w-6xl mx-auto w-full">
    //             {[
    //                 { icon: "Smartphone", title: "React Native App", text: "Primary field tool for staff and owners." },
    //                 { icon: "LayoutDashboard", title: "Web Portal", text: "Command center for CVO managers." },
    //                 { icon: "RefreshCw", title: "Real-Time Sync", text: "Cloud-based instant data transfer." },
    //                 { icon: "Layers", title: "Batch Pet Entry", text: "Register multiple pets in one session." },
    //                 { icon: "QrCode", title: "Digital Passport", text: "QR lookup for vaccination history." },
    //                 { icon: "WifiOff", title: "Offline-First", text: "Local storage queued for later sync." },
    //             ].map((f, i) => (
    //                 <div key={i} data-aos="zoom-in" data-aos-delay={`${i * 100}`} className={`bento-card p-8 md:p-10 rounded-lg group`}>
    //                     <div className="bg-muted shadow-inner border border-border w-16 h-16 rounded-md flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:text-primary-foreground group-hover:bg-primary transition-all duration-300">
    //                         <window.Icon name={f.icon} size={32} />
    //                     </div>
    //                     <h4 className="font-black text-card-foreground text-xl md:text-2xl mb-3 tracking-tight">{f.title}</h4>
    //                     <p className="text-base text-muted-foreground leading-relaxed font-medium">{f.text}</p>
    //                 </div>
    //             ))}
    //         </div>
    //     ),
    //     notes: "Now let me walk you through the key features..."
    // },
    {
        id: "comparison",
        duration: 60,
        title: "Related Systems Comparison",
        content: (
            <div data-aos="fade-up" className="overflow-x-auto rounded-xl border border-border bg-card shadow-md mb-4 mt-6 max-w-6xl mx-auto w-full custom-scrollbar">
                <table className="w-full text-left border-collapse m-0 min-w-[800px]">
                    <thead>
                        <tr className="border-b border-border bg-muted/50">
                            <th className="px-6 py-5 text-[10px] font-black tracking-widest text-muted-foreground uppercase">Feature</th>
                            <th className="px-4 py-5 text-[10px] font-black tracking-widest text-muted-foreground uppercase text-center w-32">RabDash</th>
                            <th className="px-4 py-5 text-[10px] font-black tracking-widest text-muted-foreground uppercase text-center w-32">Pawnec</th>
                            <th className="px-4 py-5 text-[10px] font-black tracking-widest text-muted-foreground uppercase text-center w-32">RADSS</th>
                            <th className="px-4 py-5 text-[10px] font-black tracking-widest text-muted-foreground uppercase text-center w-32">VetCloud</th>
                            <th className="px-4 py-5 text-[11px] font-black tracking-widest text-primary uppercase text-center w-40 bg-primary/5">SyncVet</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {[
                            { f: "Offline Data Entry", r: false, p: false, ra: false, v: false },
                            { f: "Batch Pet Entry", r: false, p: false, ra: false, v: false },
                            { f: "Real-Time Dashboard", r: true, p: true, ra: false, v: true },
                            { f: "QR Code Pet Tagging", r: false, p: true, ra: false, v: false },
                            { f: "ML-Driven Forecasting", r: false, p: false, ra: false, v: false },
                            { f: "Appointment Sched.", r: false, p: true, ra: false, v: true },
                            { f: "Pet Owner Portal", r: false, p: true, ra: false, v: true },
                            { f: "Zero Cost (Gov't)", r: true, p: false, ra: true, v: false }
                        ].map((row, i) => {
                            const renderIcon = (val) => val ? <window.Icon name="Check" size={20} className="text-primary mx-auto" strokeWidth={3} /> : <window.Icon name="Minus" size={16} className="text-muted-foreground/20 mx-auto" />;
                            return (
                                <tr key={i} className="hover:bg-muted/30 transition-colors group">
                                    <td className="px-6 py-4 text-foreground font-bold text-sm">{row.f}</td>
                                    <td className="px-4 py-4 text-center">{renderIcon(row.r)}</td>
                                    <td className="px-4 py-4 text-center">{renderIcon(row.p)}</td>
                                    <td className="px-4 py-4 text-center">{renderIcon(row.ra)}</td>
                                    <td className="px-4 py-4 text-center">{renderIcon(row.v)}</td>
                                    <td className="px-4 py-4 text-center bg-primary/[0.02]">
                                        <div className="bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center mx-auto border border-primary/20">
                                            <window.Icon name="Check" size={16} strokeWidth={4} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        ),
        notes: "SyncVet is the only system offering offline entry, batch entry, QR code, offline sync, and zero deployment cost..."
    },
    {
        id: "methodology",
        duration: 120,
        title: "Software Development Methodology",
        content: (
            <div className="flex flex-col gap-8 pt-4 max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Framework & Process */}
                    <div className="space-y-10">
                        <div data-aos="fade-right">
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-3 block">Development Framework</span>
                            <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase mb-4">Agile Scrum</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">
                                Iterative development through <span className="text-primary font-bold">2-week Sprints</span> for rapid prototyping and continuous testing.
                            </p>
                        </div>

                        {/* Scrum Roles - Minimalist */}
                        <div data-aos="fade-right" data-aos-delay="100" className="space-y-4">
                            <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] border-l-2 border-primary pl-4">Team Roles</h4>
                            <div className="flex flex-wrap gap-3">
                                {["Scrum Master", "Full-Stack Dev", "UI/UX Designer", "QA Specialist"].map((role, i) => (
                                    <div key={i} className="px-4 py-2 bg-card border border-border rounded-full text-xs font-bold text-foreground">
                                        {role}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sprint Lifecycle - Simple List */}
                        <div data-aos="fade-right" data-aos-delay="200" className="space-y-4">
                            <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] border-l-2 border-primary pl-4">Sprint Cycle</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {["Planning", "Development", "Stand-ups", "Review & Retro"].map((step, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-sm font-bold text-foreground/80 uppercase tracking-wide">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Visual Aid & Backlog */}
                    <div className="space-y-8">
                        <div data-aos="zoom-in" className="bg-card p-3 rounded-2xl border border-border shadow-soft relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            <ZoomableImage src="src/assets/scrumagile.jpg" alt="Scrum Methodology" className="w-full h-auto object-contain rounded-xl" />
                        </div>

                        <div data-aos="fade-up" className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
                            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">Core Backlog</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                                {["Offline-First Mobile", "Admin Dashboard", "QR Pet Passports", "ML Forecasting"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-tight">
                                        <window.Icon name="ChevronRight" size={14} className="text-primary" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        notes: "We adopted Agile Scrum for its iterative nature. Our 2-week sprints allowed us to handle complex offline-sync requirements. Roles were clearly defined, and our product backlog focused on the core features like offline capture and QR passports."
    },
    {
        id: "usecase",
        duration: 90,
        title: "Use Case Diagram",
        content: (
            <div className="flex flex-col items-center justify-center pt-8 max-w-5xl mx-auto w-full">
                <div data-aos="zoom-in" className="bg-card p-4 md:p-6 rounded-2xl border border-border shadow-md relative w-full overflow-hidden">
                    <ZoomableImage src="src/assets/usecase.jpg" alt="SyncVet Use Case Diagram" className="w-full h-auto max-h-[55vh] object-contain rounded-xl border border-border/50 bg-white/5 dark:bg-black/20 p-1" />
                </div>
                <p data-aos="fade-up" data-aos-delay="200" className="mt-8 text-sm md:text-base text-muted-foreground font-medium text-center bg-muted/30 px-8 py-4 rounded-xl border border-border">
                    <span className="text-primary font-black uppercase tracking-widest text-[10px] block mb-1">Functional Mapping</span>
                    Illustrates core platform interactions and user roles within the SyncVet ecosystem. <span className="text-foreground font-bold">Click image to enlarge.</span>
                </p>
            </div>
        ),
        notes: "This Use Case diagram highlights the primary functions available to Field Staff, Pet Owners, and CVO Admins..."
    },
    {
        id: "architecture",
        duration: 90,
        title: "System Architecture",
        content: (
            <div className="flex flex-col items-center justify-center pt-8 max-w-5xl mx-auto w-full">
                <div data-aos="zoom-in" className="bg-card p-4 md:p-6 rounded-2xl border border-border shadow-md relative w-full overflow-hidden">
                    <ZoomableImage src="src/assets/systemarchitecture.jpg" alt="SyncVet System Architecture" className="w-full h-auto max-h-[55vh] object-contain rounded-xl border border-border/50 bg-white/5 dark:bg-black/20 p-1" />
                </div>
                <p data-aos="fade-up" data-aos-delay="200" className="mt-8 text-sm md:text-base text-muted-foreground font-medium text-center bg-muted/30 px-8 py-4 rounded-xl border border-border">
                    <span className="text-primary font-black uppercase tracking-widest text-[10px] block mb-1">Technical Stack</span>
                    Architecture featuring the React Native app, Web portal, and a <span className="text-primary font-bold">Predictive Engine</span> for monthly forecasting. <span className="text-foreground font-bold">Click image to enlarge.</span>
                </p>
            </div>
        ),
        notes: "This slide illustrates how SyncVet works from a technical standpoint, including our offline-first sync engine..."
    },
    {
        id: "dataflow",
        duration: 120,
        title: "Data Flow Diagram",
        content: (
            <div className="flex flex-col items-center justify-center pt-8 max-w-5xl mx-auto w-full">
                <div data-aos="zoom-in" className="bg-card p-4 md:p-6 rounded-2xl border border-border shadow-md relative w-full overflow-hidden">
                    <ZoomableImage src="src/assets/dataflowdiagram.png" alt="SyncVet Data Flow Diagram" className="w-full h-auto max-h-[55vh] object-contain rounded-xl border border-border/50 bg-white/5 dark:bg-black/20 p-1" />
                </div>
                <p data-aos="fade-up" data-aos-delay="200" className="mt-8 text-sm md:text-base text-muted-foreground font-medium text-center bg-muted/30 px-8 py-4 rounded-xl border border-border">
                    <span className="text-primary font-black uppercase tracking-widest text-[10px] block mb-1">Process Logic</span>
                    Data flows from field capture to a cloud database, where <span className="text-primary font-bold">Past-Month data</span> generates the next forecast. <span className="text-foreground font-bold">Click image to enlarge.</span>
                </p>
            </div>
        ),
        notes: "This data flow diagram illustrates how records captured offline in the field are queued locally and synchronized to the central database once connection is restored..."
    },
    {
        id: "requirements",
        duration: 60,
        title: "System Requirements",
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 max-w-6xl mx-auto w-full">
                {/* Hardware Section */}
                <div data-aos="fade-right" className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <window.Icon name="Cpu" size={24} />
                        </div>
                        <h3 className="text-xl font-black text-foreground tracking-tight uppercase">3.4 Hardware Requirements</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors group">
                            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                                <window.Icon name="Smartphone" size={14} /> Mobile App & Field Deployment
                            </h4>
                            <ul className="space-y-2">
                                {["Android OS v10 or higher", "3GB+ RAM | 32GB+ Internal Storage", "Stable Offline Capture Performance"].map((item, i) => (
                                    <li key={i} className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary/40" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors">
                            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                                <window.Icon name="Monitor" size={14} /> Admin Web Portal
                            </h4>
                            <ul className="space-y-2">
                                {["AMD Ryzen 5 / Intel Core i5+", "8GB+ RAM | 256GB SSD Storage", "Stable Internet Connection"].map((item, i) => (
                                    <li key={i} className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary/40" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Software Section */}
                <div data-aos="fade-left" className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <window.Icon name="Code2" size={24} />
                        </div>
                        <h3 className="text-xl font-black text-foreground tracking-tight uppercase">3.5 Software Requirements</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "React Native", icon: "Layers", desc: "Android Mobile App" },
                            { name: "Next.js", icon: "Globe", desc: "Admin Web Portal" },
                            { name: "Supabase", icon: "Database", desc: "Backend & Real-time" },
                            { name: "Clerk", icon: "ShieldCheck", desc: "Authentication" },
                            { name: "Tailwind / ShadCN", icon: "Palette", desc: "UI Components" },
                            { name: "Vercel / Render", icon: "Cloud", desc: "Hosting Services" }
                        ].map((s, i) => (
                            <div key={i} className="p-4 bg-muted/20 border border-border/50 rounded-xl flex flex-col gap-2 group hover:bg-muted/40 transition-colors">
                                <window.Icon name={s.icon} size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                <div>
                                    <h4 className="text-sm font-black text-foreground leading-tight">{s.name}</h4>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                        <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                            Selected for <span className="text-primary font-bold">Offline-First Architecture</span>, Real-time Sync, and Zero-Cost Deployment in LGU contexts.
                        </p>
                    </div>
                </div>
            </div>
        ),
        notes: "Our hardware requirements ensure stability across both field and office environments. The software stack was strategically chosen for its real-time capabilities and cost-effectiveness for government use."
    },
    {
        id: "conclusion",
        duration: 45,
        title: "Conclusion",
        content: (
            <div className="flex flex-col gap-8 pt-4 max-w-5xl mx-auto w-full">
                <p data-aos="fade-down" className="text-xl md:text-2xl text-foreground font-medium text-center leading-relaxed shrink-0 bg-muted/20 p-8 rounded-2xl border border-border">
                    SyncVet bridges the gap between field veterinary operations and centralized data management through an offline-first, citizen-centric platform.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {[
                        { icon: "CheckCircle2", title: "Problem-Driven Design", text: "Built in direct response to specific CVO pain points." },
                        { icon: "WifiOff", title: "Offline-First Priority", text: "Functions perfectly in low-connectivity areas critical for field work in LGUs." },
                        { icon: "DollarSign", title: "Zero Deployment Cost", text: "Viable and sustainable for resource-limited government offices." },
                        { icon: "HeartPulse", title: "Public Health Impact", text: "Modernizes operations and supports CDO's goal of becoming rabies-free." }
                    ].map((item, i) => (
                        <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} className={`bg-card p-8 rounded-[1.5rem] border border-border flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 shadow-sm hover:border-primary/20 transition-all`}>
                            <div className="bg-primary/5 border border-primary/10 p-4 rounded-xl shrink-0"><window.Icon name={item.icon} size={32} className="text-primary" /></div>
                            <div>
                                <h4 className="text-foreground font-black text-xl mb-1.5 tracking-tight">{item.title}</h4>
                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        notes: "To summarize, SyncVet directly addresses the critical problems..."
    },
    {
        id: "references",
        duration: 0,
        title: "References",
        content: (
            <div data-aos="zoom-in" className="flex flex-col max-w-6xl mx-auto w-full h-[65vh]">
                <div className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-xl backdrop-blur-md flex-1 overflow-hidden flex flex-col">
                    <div className="flex items-center gap-4 mb-6 shrink-0 border-b border-border pb-4">
                        <window.Icon name="BookMarked" size={32} className="text-primary" />
                        <h3 className="text-2xl font-black text-foreground tracking-tight">Literature & Citations</h3>
                        <div className="ml-auto bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20">54 Sources</div>
                    </div>
                    <div className="overflow-y-auto custom-scrollbar pr-4 space-y-3 flex-1 pb-4">
                        {[
                            "Rabies Alliance. (2024). Philippines rabies status and data. https://rabiesalliance.org/country/philippines",
                            "Ngo‑Thi, T.‑A., et al. (2024). Advancing mHealth research in low‑resource settings. Annals of the New York Academy of Sciences, 1540(1), 123–138. https://doi.org/10.1111/nyas.1540.1.123",
                            "Holdt Sommers, J., et al. (2022). A systematic review of the Technology Acceptance Model in health information systems. Healthcare, 6(3), 100. https://doi.org/10.3390/healthcare6030100",
                            "World Health Organization. (2022). Rabies (Health topic page). https://www.who.int/health-topics/rabies",
                            "GARC (Global Alliance for Rabies Control). (n.d.). GARC App. https://dev.rabiesalliance.org/tools/surveillance-tools/garc-app",
                            "World Health Organization. (2024). Rabies. https://www.who.int/news-room/fact-sheets/detail/rabies",
                            "Ahmed, M. F., et al. (2018). A smartphone‑based application improves the accuracy of animal disease reporting. Frontiers in Veterinary Science, 5, 54. https://doi.org/10.3389/fvets.2018.00054",
                            "Castañeda, K. A., et al. (2024). A centralized mobile app for dog rabies vaccination reporting by city veterinary offices and private veterinarians. Journal of Computing and Science in Humanities, X(X), Y–Z. https://ojs.upmin.edu.ph/index.php/jcsh/article/view/70",
                            "Department of Agriculture – Regional Field Office 3. (n.d.). Philippine Animal Health Information System (Phil‑AHIS). DA‑RFO III. https://rfo3.da.gov.ph",
                            "Department of Health (DOH). (2026, March 7). DOH logs 17 rabies cases from January 4 to February 21, 2026. Manila Times / GMA Network.",
                            "Philippine News Agency (PNA). (2026, March 5). PH records 300-400 annual rabies deaths, 4M animal bite cases.",
                            "World Health Organization (WHO). (2024). Rabies fact sheet. Retrieved from https://www.who.int/news-room/fact-sheets/detail/rabies",
                            "Castañeda, K. A., Lim, J. A., & Tan, R. M. (2024). A centralized mobile app for dog rabies vaccination reporting by private and city veterinarians in Davao City. Journal of Computing and Science in Humanities, 5(2), 1-12. https://ojs.upmin.edu.ph/index.php/jcsh/article/view/70",
                            "Pawnec Philippines. (2025). eHealth Card: Beta launch ready to jab, scan & go in Metro Manila veterinary clinics. https://ph.pawnec.com/blogs/pet-digest/ehealth-card-beta-launch-ready-to-jab-scan-and-go-in-metro-manila-veterinary-clinics",
                            "Bureau of Animal Industry. (2026). RADSS-PhilAHIS: Online reporting system for monitoring animal health events. https://radss-philahis.bai.gov.ph",
                            "VetCloud Software. (2025). Vet Cloud Software: #1 veterinary clinic management in the Philippines. https://vetcloudsoftware.org",
                            "Vetport. (2020). How to choose the best software solution for your veterinary clinic. https://www.vetport.com/choose-best-software",
                            "Costa, J. P., et al. (2023). Modelling the predictors of mobile health (mHealth) adoption among healthcare professionals. International Journal of Environmental Research and Public Health, 20(11), 6215. https://doi.org/10.3390/ijerph20116215",
                            "Panayotov, P., et al. (2017). The Ilocos Norte Communities against Rabies Exposure Elimination Project in the Philippines: Epidemiological and economic aspects. Frontiers in Veterinary Science, 4, 54. https://doi.org/10.3389/fvets.2017.00054",
                            "Reyes, M. L., & Santos, J. P. (2025). Navigating veterinary practice in the digital age: Implementing a veterinary information management system. eJournals.ph, 12(4), 45-58. https://www.ejournals.ph/article.php?id=30198",
                            "Department of Agriculture - Bureau of Animal Industry. (n.d.). Philippine Animal Health Information System (PhilAHIS). https://rfo3.da.gov.ph",
                            "PCHRD-DOST. (2025). RabDash DC: Rabies data analytics dashboard. https://www.pchrd.dost.gov.ph/heartnovation/rabdash-dc-rabies-data-analytics-dashboard/",
                            "City Veterinary Office – Cagayan de Oro. (2026). High-density rabies vaccination program reports (Facebook official page updates, March 2026).",
                            "Benis, A., et al. (2021). One Digital Health: A unified framework for future health ecosystems. Journal of Medical Internet Research. https://doi.org/10.2196/22189",
                            "Benis, A., et al. (2023). One Digital Health intervention for monitoring human and animal health. JMIR Public Health and Surveillance.",
                            "Cabrera, G. R. (2024). A centralized mobile app for dog rabies vaccination reporting by private and city veterinarians in Davao City. Journal of Community Science and Health, University of the Philippines Mindanao.",
                            "Department of Health (DOH). (2026, March 7). DOH logs 17 rabies cases in first two months of 2026. Manila Standard. https://manilastandard.net/news/public-health/314712676/doh-logs-17-rabies-cases-in-first-two-months-of-2026.html",
                            "Department of Health (DOH). (2026). Rabies update: 65% drop in early cases. GMA Network / Manila Times.",
                            "Gibson, A. D., et al. (2018). One million dog vaccinations recorded on mHealth innovation used to direct teams in numerous rabies control campaigns. PLOS ONE, 13(7), e0200942. https://doi.org/10.1371/journal.pone.0200942",
                            "Manila Times. (2026, March 8). Philippines rabies cases down 65% as DOH urges pet vaccination. https://www.manilatimes.net/2026/03/08/news/national/philippines-rabies-cases-down-65-as-doh-urges-pet-vaccination/2295362",
                            "Monroe, B., et al. (2021). Every dog has its data: Evaluation of a technology-aided rabies vaccination campaign. PLOS Neglected Tropical Diseases. https://pmc.ncbi.nlm.nih.gov/articles/PMC8591122/",
                            "Outbreak News Today. (2026, March). Philippines report decrease in rabies in early 2026. https://outbreaknewstoday.substack.com/p/philippines-report-decrease-in-rabies",
                            "Philippine News Agency (PNA). (2026, March 5). PH records 300-400 annual rabies deaths, 4M animal bite cases. https://www.pna.gov.ph/articles/1270326",
                            "Philippine News Agency (PNA). (2025, March 3). CDO launches high-density rabies vaccination drive. https://www.pna.gov.ph/articles/1245254",
                            "Subrata, I. M., et al. (2022). Designing a rabies control mobile application for a community-based rabies surveillance system during COVID-19 in Bali. Veterinary World, 15(5), 1234–1245. https://doi.org/10.14202/vetworld.2022.1234-1245",
                            "World Health Organization (WHO). (2024). Rabies fact sheet. https://www.who.int/news-room/fact-sheets/detail/rabies",
                            "World Health Organization (WHO). (2025). Rabies in the South-East Asia Region.",
                            "City Veterinary Office – Cagayan de Oro. (2026). High-density rabies vaccination program and walk-in services [Official Facebook updates, March 2026].",
                            "City Veterinary Office – Cagayan de Oro. (n.d.). Frontline services: Rabies vaccination and stray animal management. City Government of Cagayan de Oro. https://www.cagayandeoro.gov.ph/index.php/news/the-city-hall/the-departments-and-offices/27-city-veterinary-office.html",
                            "Department of Agriculture – Regional Field Office 10 (DA RFO-10). (2026). Responsible pet ownership key to rabies eradication. https://cagayandeoro.da.gov.ph/?p=75351",
                            "Reissig, L., et al. (2022). Why farmers perceive the use of e-government services as burdensome. Government Information Quarterly.",
                            "World Organisation for Animal Health (WOAH). (2021). Digital technologies and implications for Veterinary Services.",
                            "Philippine Information Agency (PIA). (2025, September 24). DOH urges continued caution against rabies despite decline in cases.",
                            "ABS-CBN News. (2025, June 2). DOH: Rabies cases in 2025 down 32 percent from last year.",
                            "Inquirer.net. (2025, August 16). DOH logs 211 rabies cases from January to August 2025.",
                            "Reuters. (2017). Vets in Philippines turn to technology to track and tackle rabies.",
                            "Mission Rabies. (n.d.). WVS Data Collection App for rabies vaccination tracking. https://rabiestaskforce.com/toolkit/wvs-data-collection-app",
                            "PCHRD-DOST. (n.d.). RabDash DC: Rabies Data Analytics Dashboard. https://www.pchrd.dost.gov.ph/heartnovation/rabdash-dc-rabies-data-analytics-dashboard/",
                            "GALVmed. (2025). Digital inclusion: Increasing access to animal health digital technologies by women.",
                            "ICAR-NIVEDI. (2025). National e-Governance Award for livestock disease forecasting platform.",
                            "Xu, X., et al. (2025). Enhancing rural veterinary governance: Coupling digital technology with public awareness. Frontiers in Veterinary Science.",
                            "HealthforAnimals. (n.d.). Digital revolution in animal health.",
                            "World Bank. (2025). Unlocking digital citizen-centric service delivery.",
                            "National Awards for e-Governance. (2024). Citations for citizen-centric and e-governance projects in animal health.",
                            "Cabrera, G. R., et al. (2024). RabDash mobile application for centralized rabies data collection in Davao City."
                        ].filter((v, i, a) => a.indexOf(v) === i).map((ref, i) => {
                            const urlRegex = /(https?:\/\/[^\s]+)/g;
                            const parts = ref.split(urlRegex);
                            return (
                                <div key={i} className="text-muted-foreground text-sm p-3 bg-muted/50 rounded-md border border-border/50 hover:bg-muted/80 transition-colors flex gap-3 shadow-sm">
                                    <span className="text-secondary-foreground/60 font-black shrink-0 select-none w-6 text-right">[{i + 1}]</span>
                                    <span className="leading-snug break-words">
                                        {parts.map((part, idx) =>
                                            urlRegex.test(part) ?
                                                <a key={idx} href={part} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">{part}</a>
                                                : part
                                        )}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        ),
        notes: "Here are the primary references and related literature that informed our research and methodology."
    },
    {
        id: "qa",
        duration: 0,
        title: "Q&A",
        content: (
            <div className="flex flex-col items-center justify-center min-h-[500px] text-center w-full">
                <div data-aos="zoom-in" className="w-40 h-40 bg-primary/5 border border-primary/10 rounded-full flex items-center justify-center mb-10 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-20 duration-[3000ms]"></div>
                    <window.Icon name="HeartHandshake" size={64} className="text-primary" />
                </div>
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-6xl font-black text-foreground mb-4 tracking-tight uppercase">Ready for Questions</h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-xl md:text-2xl text-muted-foreground max-w-xl font-medium tracking-tight">Thank you for your valuable time and attention.</p>
            </div>
        ),
        notes: "We look forward to your valuable feedback. Thank you!"
    }
];
