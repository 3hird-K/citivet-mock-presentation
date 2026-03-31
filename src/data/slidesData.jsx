const ZoomableImage = ({ src, alt, className }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <React.Fragment>
            <img
                src={src}
                alt={alt}
                className={`cursor-pointer transition-transform hover:scale-[1.02] ${className}`}
                onClick={() => setIsOpen(true)}
            />
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-12 cursor-pointer transition-opacity"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-border"
                    />
                    <button className="absolute top-6 right-6 bg-card text-foreground p-3 rounded-lg border border-border hover:bg-muted transition-colors shadow-lg">
                        <window.Icon name="X" size={32} />
                    </button>
                </div>
            )}
        </React.Fragment>
    );
};

window.slidesData = [
    {
        id: "title",
        title: "SyncVet Overview",
        content: (
            <div className="flex flex-col items-center justify-center my-auto min-h-[400px] text-center max-w-4xl mx-auto py-8">
                <div className="relative mb-8 group" data-aos="zoom-in" data-aos-easing="ease-out-cubic">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-[40px] opacity-40 group-hover:opacity-80 transition-opacity duration-1000"></div>
                    <div className="w-40 h-40 md:w-48 md:h-48 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full flex items-center justify-center relative shadow-xl">
                        <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-40 duration-1000"></div>
                        <window.Icon name="Activity" size={64} className="text-primary" />
                    </div>
                </div>
                <h1 data-aos="fade-up" data-aos-delay="100" className="text-6xl md:text-8xl lg:text-[7rem] font-black text-foreground mb-6 tracking-tighter leading-tight py-1">
                    Sync<span className="text-primary">Vet</span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="text-2xl md:text-4xl text-muted-foreground font-medium tracking-tight h-auto max-w-2xl px-4">
                    Mobile and Web Platform for Animal Health Services - CDO
                </p>
                {/* <p data-aos="fade-up" data-aos-delay="200" className="text-xl md:text-2xl text-muted-foreground font-medium tracking-tight h-auto max-w-2xl px-4">
                    Cagayan De Oro City Veterinary Office
                </p> */}
            </div>
        ),
        notes: "Good morning/afternoon, panel members and everyone present. My name is Jungkook, and today I will be presenting our capstone project titled SyncVet..."
    },
    {
        id: "background",
        title: "Background of the Study",
        content: (
            <div className="flex flex-col gap-6 pt-4 max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div data-aos="fade-right" data-aos-delay="100" className="bento-card p-8 rounded-lg flex flex-col justify-center items-center text-center">
                        <div className="text-destructive font-black text-6xl mb-3 tracking-tighter drop-shadow-lg">59k</div>
                        <p className="text-card-foreground font-medium text-base leading-snug">Global Human Rabies Deaths Annually(WHO)</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="bento-card p-8 rounded-lg flex flex-col justify-center items-center text-center">
                        <div className="text-accent-foreground font-black text-6xl mb-3 tracking-tighter drop-shadow-lg">4M</div>
                        <p className="text-card-foreground font-medium text-base leading-snug">Animal Bite Cases in the PH Annually</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="300" className="bento-card p-6 md:p-8 rounded-lg flex flex-col justify-center relative overflow-hidden">
                        <window.Icon name="FileText" size={160} className="absolute -right-10 -bottom-10 text-foreground/5 opacity-20" />
                        <div className="w-12 h-12 bg-primary/20 rounded-md flex items-center justify-center mb-5 relative z-10 border border-primary/20">
                            <window.Icon name="Landmark" size={24} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-black text-card-foreground mb-3 relative z-10">The Local Reality</h3>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium relative z-10">
                            CDO City Veterinary Office relies heavily on <span className="text-destructive font-bold">manual paper-based systems</span>. Field teams use physical logbooks, causing massive data delays.
                        </p>
                    </div>
                </div>
                <div data-aos="flip-up" data-aos-delay="400" className="bg-muted p-8 md:p-10 rounded-lg border border-border flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-xl backdrop-blur-md">
                    <div className="bg-primary p-6 rounded-lg shrink-0 shadow-lg">
                        <window.Icon name="AlertTriangle" size={48} className="text-primary-foreground" />
                    </div>
                    <div className="text-center sm:text-left">
                        <div className="text-5xl md:text-6xl font-black text-foreground mb-3 tracking-tighter">76%</div>
                        <p className="text-muted-foreground font-medium text-lg md:text-xl">Of recent cases involve bites from OWNED but unvaccinated pets.</p>
                    </div>
                </div>
            </div>
        ),
        notes: "Globally, rabies causes 59,000 deaths. In the PH, we have 4M animal bites. 76% from owned pets. CVO operations rely on paper..."
    },
    {
        id: "problem",
        title: "Statement of the Problem",
        content: (
            <div className="flex flex-col gap-6 pt-4 max-w-6xl mx-auto w-full">
                <div data-aos="fade-right" className="p-6 md:p-8 rounded-lg bg-primary/10 border border-primary/20 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 shrink-0 shadow-lg backdrop-blur-sm">
                    <div className="bg-primary/20 p-5 rounded-lg shrink-0 text-primary shadow-lg">
                        <window.Icon name="Target" size={36} />
                    </div>
                    <div>
                        <h3 className="text-destructive font-black uppercase tracking-widest text-sm mb-3">General Problem</h3>
                        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-snug">The CVO lacks an integrated, real-time digital system, resulting in fragmented and paper-dependent workflows.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                        { icon: "Unplug", title: "Disconnected Systems", desc: "Field & walk-in records separated." },
                        { icon: "BookOpen", title: "Paper Dependency", desc: "Logbooks cause huge processing delays." },
                        { icon: "PhoneOff", title: "No Mobile Tool", desc: "No offline app for field capture." },
                        { icon: "Repeat", title: "Repetitive Entry", desc: "Manual one-by-one pet registration." },
                        { icon: "Clock", title: "Delayed Integration", desc: "No real-time data slows decisions." }
                    ].map((p, i) => (
                        <div key={i} data-aos="zoom-in-up" data-aos-delay={`${i * 100}`} className={`bento-card p-6 md:p-8 rounded-lg flex flex-col items-center text-center`}>
                            <div className="bg-muted w-14 h-14 rounded-lg flex items-center justify-center mb-5 border border-border shadow-inner">
                                <window.Icon name={p.icon} size={28} className="text-muted-foreground" />
                            </div>
                            <h4 className="text-card-foreground font-black text-lg mb-2 tracking-tight">{p.title}</h4>
                            <p className="text-muted-foreground text-sm font-medium leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
        notes: "Our research identified one general problem and five specific problems..."
    },
    {
        id: "objectives",
        title: "Objectives of the Study",
        content: (
            <div className="flex flex-col gap-8 pt-4 max-w-6xl mx-auto w-full">
                <p data-aos="fade-down" className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium text-center max-w-4xl mx-auto leading-relaxed shrink-0 bg-card p-8 rounded-lg border border-border shadow-lg">
                    To design, develop, and test a real-time mobile and web platform for integrated management of rabies vaccination and walk-in services at the CDO-CVO.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {[
                        { action: "DESIGN", icon: "PenTool", desc: "Complete system architecture, UI/UX for React Native mobile & Web Admin, and sync mechanisms." },
                        { action: "DEVELOP", icon: "Code2", desc: "Batch entry, offline data capture, walk-in management, and real-time cloud synchronization." },
                        { action: "TEST", icon: "TestTube", desc: "Evaluate functionality, usability, offline performance, and sync reliability via simulation." }
                    ].map((obj, i) => (
                        <div key={i} data-aos="flip-left" data-aos-delay={`${i * 150}`} className={`px-8 py-10 rounded-lg border border-primary/20 bg-primary/5 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500 shadow-xl backdrop-blur-sm group`}>
                            <div className={`w-24 h-24 rounded-lg bg-card flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500 border border-border`}>
                                <window.Icon name={obj.icon} size={44} className="text-primary" />
                            </div>
                            <h3 className={`text-4xl font-black mb-5 text-primary tracking-tighter`}>{obj.action}</h3>
                            <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed">{obj.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
        notes: "Our general objective is to design, develop, and test SyncVet..."
    },
    {
        id: "significance",
        title: "Significance of the Study",
        content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 max-w-6xl mx-auto w-full">
                {[
                    { title: "City Vet Office", icon: "Building2", desc: "Digital workflow reducing paper reliance and directly supporting a rabies-free city goal." },
                    { title: "Veterinary Staff", icon: "Stethoscope", desc: "User-friendly offline app reducing double-entry and frustrating paperwork." },
                    { title: "Pet Owners", icon: "Heart", desc: "Better access to services, simplified tracking, and digital pet passports." },
                    { title: "Policymakers", icon: "PieChart", desc: "Real-time aggregated reports and hotspot maps for evidence-based planning." },
                    { title: "Future Researchers", icon: "GraduationCap", desc: "A documented case study of modern mobile-web veterinary system development." }
                ].map((item, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} className={`bento-card p-6 md:p-10 rounded-lg flex flex-col justify-start`}>
                        <div className="bg-primary/20 border border-primary/20 w-16 h-16 rounded-md flex items-center justify-center mb-6 shrink-0 shadow-lg">
                            <window.Icon name={item.icon} size={32} className="text-primary" />
                        </div>
                        <h4 className="text-card-foreground font-black text-2xl mb-4 tracking-tight">{item.title}</h4>
                        <p className="text-muted-foreground text-base leading-relaxed font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        ),
        notes: "SyncVet is significant to multiple groups of stakeholders..."
    },
    {
        id: "scope",
        title: "Scope & Limitations",
        content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 items-stretch max-w-6xl mx-auto w-full">
                <div data-aos="fade-right" className="bg-card p-8 md:p-12 rounded-lg border border-border shadow-xl backdrop-blur-md h-full flex flex-col">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="bg-primary/20 p-4 rounded-md border border-primary/30 shadow-lg">
                            <window.Icon name="CheckCircle2" size={36} className="text-primary" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter">Scope</h3>
                    </div>
                    <ul className="space-y-6">
                        {[
                            "React Native mobile app & Web Admin portal",
                            "Supports dogs, cats, poultry, livestock",
                            "Covers urban & peri-urban barangays in CDO",
                            "Offline field capture & walk-in records",
                            "Batch registration & QR pet passports"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-5 text-card-foreground font-medium items-center p-4 bg-muted rounded-md border border-border hover:bg-muted/80 transition-colors">
                                <div className="w-3 h-3 rounded-full bg-primary shrink-0 shadow-sm" />
                                <span className="text-base md:text-lg leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div data-aos="fade-left" data-aos-delay="100" className="bg-card p-8 md:p-12 rounded-lg border border-border shadow-xl backdrop-blur-md h-full flex flex-col">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="bg-secondary/10 p-4 rounded-md border border-secondary/20 shadow-lg">
                            <window.Icon name="XCircle" size={36} className="text-secondary" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter">Limitations</h3>
                    </div>
                    <ul className="space-y-6">
                        {[
                            "Geographically limited to Cagayan de Oro City",
                            "No predictive analytics or genetic modeling",
                            "Phil-AHIS national integration not implemented",
                            "Assumes minimum digital literacy & device access",
                            "Does not measure long-term epidemiological impact"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-5 text-muted-foreground font-medium items-center p-4 bg-muted rounded-md border border-border hover:bg-muted/80 transition-colors">
                                <div className="w-3 h-3 rounded-full bg-destructive shrink-0 shadow-sm" />
                                <span className="text-base md:text-lg leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ),
        notes: "Let me now clarify what the study covers and where its boundaries lie..."
    },
    {
        id: "features",
        title: "Key Features of SyncVet",
        content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 max-w-6xl mx-auto w-full">
                {[
                    { icon: "Smartphone", title: "React Native App", text: "Primary field tool for staff and owners." },
                    { icon: "LayoutDashboard", title: "Web Portal", text: "Command center for CVO managers." },
                    { icon: "RefreshCw", title: "Real-Time Sync", text: "Cloud-based instant data transfer." },
                    { icon: "Layers", title: "Batch Pet Entry", text: "Register multiple pets in one session." },
                    { icon: "QrCode", title: "Digital Passport", text: "QR lookup for vaccination history." },
                    { icon: "WifiOff", title: "Offline-First", text: "Local storage queued for later sync." },
                ].map((f, i) => (
                    <div key={i} data-aos="zoom-in" data-aos-delay={`${i * 100}`} className={`bento-card p-8 md:p-10 rounded-lg group`}>
                        <div className="bg-muted shadow-inner border border-border w-16 h-16 rounded-md flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:text-primary-foreground group-hover:bg-primary transition-all duration-300">
                            <window.Icon name={f.icon} size={32} />
                        </div>
                        <h4 className="font-black text-card-foreground text-xl md:text-2xl mb-3 tracking-tight">{f.title}</h4>
                        <p className="text-base text-muted-foreground leading-relaxed font-medium">{f.text}</p>
                    </div>
                ))}
            </div>
        ),
        notes: "Now let me walk you through the key features..."
    },
    {
        id: "comparison",
        title: "Related Systems Comparison",
        content: (
            <div data-aos="fade-up" className="overflow-x-auto rounded-lg border border-border bg-card shadow-2xl mb-4 mt-6 max-w-6xl mx-auto w-full">
                <table className="w-full text-left border-collapse m-0 min-w-[800px]">
                    <thead>
                        <tr className="border-b border-border bg-muted/60">
                            <th className="px-8 py-6 text-base font-black tracking-widest text-muted-foreground uppercase">Feature</th>
                            <th className="px-6 py-6 text-sm font-black tracking-widest text-muted-foreground uppercase text-center w-36">RabDash</th>
                            <th className="px-6 py-6 text-sm font-black tracking-widest text-muted-foreground uppercase text-center w-36">Pawnec</th>
                            <th className="px-6 py-6 text-sm font-black tracking-widest text-muted-foreground uppercase text-center w-36">RADSS</th>
                            <th className="px-6 py-6 text-sm font-black tracking-widest text-muted-foreground uppercase text-center w-36">VetCloud</th>
                            <th className="px-6 py-6 text-base font-black tracking-widest text-primary uppercase text-center w-48 bg-primary/10 shadow-inner">SyncVet</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {[
                            { f: "Offline Data Entry", r: false, p: false, ra: false, v: false },
                            { f: "Batch Pet Entry", r: false, p: false, ra: false, v: false },
                            { f: "Real-Time Dashboard", r: true, p: true, ra: false, v: true },
                            { f: "QR Code Pet Tagging", r: false, p: true, ra: false, v: false },
                            { f: "Offline Sync", r: false, p: false, ra: false, v: false },
                            { f: "Appointment Sched.", r: false, p: true, ra: false, v: true },
                            { f: "Pet Owner Portal", r: false, p: true, ra: false, v: true },
                            { f: "Zero Cost (Gov't)", r: true, p: false, ra: true, v: false }
                        ].map((row, i) => {
                            const renderIcon = (val) => val ? <window.Icon name="Check" size={24} className="text-primary mx-auto" strokeWidth={3} /> : <window.Icon name="X" size={24} className="text-destructive mx-auto" />;
                            return (
                                <tr key={i} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-8 py-5 text-foreground font-semibold text-base lg:text-lg">{row.f}</td>
                                    <td className="px-6 py-5 text-center">{renderIcon(row.r)}</td>
                                    <td className="px-6 py-5 text-center">{renderIcon(row.p)}</td>
                                    <td className="px-6 py-5 text-center">{renderIcon(row.ra)}</td>
                                    <td className="px-6 py-5 text-center">{renderIcon(row.v)}</td>
                                    <td className="px-6 py-5 text-center bg-primary/5">
                                        <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto shadow-lg">
                                            <window.Icon name="Check" size={20} strokeWidth={4} />
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
        id: "architecture",
        title: "System Architecture",
        content: (
            <div className="flex flex-col items-center justify-start w-full pt-8 max-w-5xl mx-auto">
                <div className="w-full relative flex flex-col pt-2">
                    <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full point-events-none"></div>

                    <div data-aos="fade-down" className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 relative z-10">
                        <div className="bg-card p-5 rounded-lg border border-border text-center shadow-lg hover:-translate-y-1 transition-transform"><window.Icon name="Users" size={32} className="mx-auto text-primary mb-3" /> <span className="text-sm font-black tracking-widest uppercase text-muted-foreground">Field Staff</span></div>
                        <div className="bg-card p-5 rounded-lg border border-border text-center shadow-lg hover:-translate-y-1 transition-transform"><window.Icon name="User" size={32} className="mx-auto text-primary mb-3" /> <span className="text-sm font-black tracking-widest uppercase text-muted-foreground">Pet Owners</span></div>
                        <div className="bg-card p-5 rounded-lg border border-border text-center shadow-lg hover:-translate-y-1 transition-transform"><window.Icon name="Shield" size={32} className="mx-auto text-primary mb-3" /> <span className="text-sm font-black tracking-widest uppercase text-muted-foreground">CVO Admins</span></div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                        <div className="bg-card border border-border p-8 rounded-lg text-center shadow-xl group hover:-translate-y-1 transition-transform backdrop-blur-md">
                            <div className="bg-primary/10 w-20 h-20 mx-auto rounded-md flex items-center justify-center mb-5 border border-primary/20"><window.Icon name="Smartphone" size={40} className="text-primary" /></div>
                            <h4 className="font-black text-foreground text-2xl tracking-tight mb-2">React Native App</h4>
                            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mt-1">Offline-First Interface</p>
                        </div>
                        <div className="bg-card border border-border p-8 rounded-lg text-center shadow-xl group hover:-translate-y-1 transition-transform backdrop-blur-md">
                            <div className="bg-primary/10 w-20 h-20 mx-auto rounded-md flex items-center justify-center mb-5 border border-primary/20"><window.Icon name="Monitor" size={40} className="text-primary" /></div>
                            <h4 className="font-black text-foreground text-2xl tracking-tight mb-2">Web Admin Portal</h4>
                            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-muted-foreground mt-1">Command Dashboard</p>
                        </div>
                    </div>
                    <div className="bg-primary border border-primary/40 p-8 rounded-lg text-center shadow-2xl mb-4 group hover:-translate-y-1 transition-transform backdrop-blur-md">
                        <window.Icon name="Cloud" size={40} className="mx-auto text-primary-foreground mb-4 drop-shadow-md" />
                        <h4 className="font-black text-foreground text-2xl tracking-tight mb-2">Real-Time Sync Engine</h4>
                        <p className="text-primary-foreground/80 text-sm font-bold tracking-widest uppercase opacity-90">Cloud API • Conflict Resolution • Local Queue</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300" className="bg-card border border-border p-6 rounded-lg text-center flex items-center justify-center gap-5 shadow-2xl mx-auto w-3/4 backdrop-blur-md">
                        <window.Icon name="Database" size={40} className="text-muted-foreground" />
                        <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight">Central Postgres DB</h3>
                    </div>
                </div>
            </div>
        ),
        notes: "This slide illustrates how SyncVet works from a technical standpoint..."
    },
    {
        id: "dataflow",
        title: "Data Flow Diagram",
        content: (
            <div className="flex flex-col items-center justify-center pt-8 max-w-5xl mx-auto w-full">
                <div data-aos="zoom-in" className="bg-card p-4 md:p-8 rounded-lg border border-border shadow-md relative w-full">
                    <div className="absolute inset-0 bg-primary/10 rounded-lg -z-10 blur-xl"></div>
                    <ZoomableImage src="src/assets/image.png" alt="SyncVet Data Flow Diagram" className="w-full h-auto max-h-[80vh] object-contain rounded-md shadow-sm border border-border/50" />
                </div>
                <p data-aos="fade-up" data-aos-delay="200" className="mt-8 text-lg text-muted-foreground font-medium text-center bg-muted/50 px-8 py-5 rounded-lg border border-border shadow-sm">
                    Illustrates the comprehensive synchronization cycle between the offline-first mobile app and the central Postgres database. Click image to enlarge.
                </p>
            </div>
        ),
        notes: "This data flow diagram illustrates how records captured offline in the field are queued locally and synchronized to the central database once connection is restored..."
    },
    {
        id: "conclusion",
        title: "Conclusion",
        content: (
            <div className="flex flex-col gap-10 pt-4 max-w-6xl mx-auto w-full">
                <p data-aos="fade-down" className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium text-center leading-relaxed shrink-0 bg-card p-8 md:p-10 rounded-lg border border-border shadow-xl backdrop-blur-md">
                    SyncVet bridges the gap between field veterinary operations and centralized data management through an offline-first, citizen-centric platform.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {[
                        { icon: "CheckCircle2", title: "Problem-Driven Design", text: "Built in direct response to specific CVO pain points." },
                        { icon: "WifiOff", title: "Offline-First Priority", text: "Functions perfectly in low-connectivity areas critical for field work in LGUs." },
                        { icon: "DollarSign", title: "Zero Deployment Cost", text: "Viable and sustainable for resource-limited government offices." },
                        { icon: "HeartPulse", title: "Public Health Impact", text: "Modernizes operations and supports CDO's goal of becoming rabies-free." }
                    ].map((item, i) => (
                        <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`} className={`bg-card border border-border p-8 md:p-10 rounded-lg flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 shadow-xl hover:-translate-y-2 transition-transform`}>
                            <div className="bg-primary/10 border border-primary/20 p-5 rounded-md shrink-0 shadow-sm"><window.Icon name={item.icon} size={40} className="text-primary" /></div>
                            <div>
                                <h4 className="text-card-foreground font-black text-2xl mb-3 tracking-tight">{item.title}</h4>
                                <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-medium">{item.text}</p>
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
                            "Rabies Alliance. (2024). Philippines rabies status and data.",
                            "Ngo‑Thi, T.‑A., et al. (2024). Advancing mHealth research in low‑resource settings. Annals of the New York Academy of Sciences, 1540(1), 123–138.",
                            "Holdt Sommers, J., et al. (2022). A systematic review of the Technology Acceptance Model in health information systems. Healthcare, 6(3), 100.",
                            "World Health Organization. (2022). Rabies (Health topic page).",
                            "GARC (Global Alliance for Rabies Control). (n.d.). GARC App.",
                            "World Health Organization. (2024). Rabies. https://www.who.int/news-room/fact-sheets/detail/rabies",
                            "Ahmed, M. F., et al. (2018). A smartphone‑based application improves the accuracy of animal disease reporting. Frontiers in Veterinary Science, 5, 54.",
                            "Castañeda, K. A., et al. (2024). A centralized mobile app for dog rabies vaccination reporting by city veterinary offices and private veterinarians. Journal of Computing and Science in Humanities.",
                            "Department of Agriculture – Regional Field Office 3. (n.d.). Philippine Animal Health Information System (Phil‑AHIS). DA‑RFO III.",
                            "Department of Health (DOH). (2026, March 7). DOH logs 17 rabies cases from January 4 to February 21, 2026. Manila Times / GMA Network.",
                            "Philippine News Agency (PNA). (2026, March 5). PH records 300-400 annual rabies deaths, 4M animal bite cases.",
                            "World Health Organization (WHO). (2024). Rabies fact sheet.",
                            "Castañeda, K. A., Lim, J. A., & Tan, R. M. (2024). A centralized mobile app for dog rabies vaccination reporting by private and city veterinarians in Davao City. Journal of Computing and Science in Humanities.",
                            "Pawnec Philippines. (2025). eHealth Card: Beta launch ready to jab, scan & go in Metro Manila veterinary clinics.",
                            "Bureau of Animal Industry. (2026). RADSS-PhilAHIS: Online reporting system for monitoring animal health events.",
                            "VetCloud Software. (2025). Vet Cloud Software: #1 veterinary clinic management in the Philippines.",
                            "Vetport. (2020). How to choose the best software solution for your veterinary clinic.",
                            "Costa, J. P., et al. (2023). Modelling the predictors of mobile health (mHealth) adoption among healthcare professionals. International Journal of Environmental Research and Public Health.",
                            "Panayotov, P., et al. (2017). The Ilocos Norte Communities against Rabies Exposure Elimination Project in the Philippines.",
                            "Reyes, M. L., & Santos, J. P. (2025). Navigating veterinary practice in the digital age: Implementing a veterinary information management system. eJournals.ph.",
                            "Department of Agriculture - Bureau of Animal Industry. (n.d.). Philippine Animal Health Information System (PhilAHIS).",
                            "PCHRD-DOST. (2025). RabDash DC: Rabies data analytics dashboard.",
                            "City Veterinary Office – Cagayan de Oro. (2026). High-density rabies vaccination program reports.",
                            "Benis, A., et al. (2021). One Digital Health: A unified framework for future health ecosystems. Journal of Medical Internet Research.",
                            "Benis, A., et al. (2023). One Digital Health intervention for monitoring human and animal health. JMIR Public Health and Surveillance.",
                            "Cabrera, G. R. (2024). A centralized mobile app for dog rabies vaccination reporting by private and city veterinarians in Davao City.",
                            "Department of Health (DOH). (2026, March 7). DOH logs 17 rabies cases in first two months of 2026. Manila Standard.",
                            "Department of Health (DOH). (2026). Rabies update: 65% drop in early cases. GMA Network / Manila Times.",
                            "Gibson, A. D., et al. (2018). One million dog vaccinations recorded on mHealth innovation used to direct teams in numerous rabies control campaigns. PLOS ONE.",
                            "Manila Times. (2026, March 8). Philippines rabies cases down 65% as DOH urges pet vaccination.",
                            "Monroe, B., et al. (2021). Every dog has its data: Evaluation of a technology-aided rabies vaccination campaign. PLOS Neglected Tropical Diseases.",
                            "Outbreak News Today. (2026, March). Philippines report decrease in rabies in early 2026.",
                            "Philippine News Agency (PNA). (2026, March 5). PH records 300-400 annual rabies deaths, 4M animal bite cases. https://www.pna.gov.ph/articles/1270326",
                            "Philippine News Agency (PNA). (2025, March 3). CDO launches high-density rabies vaccination drive.",
                            "Subrata, I. M., et al. (2022). Designing a rabies control mobile application for a community-based rabies surveillance system during COVID-19 in Bali. Veterinary World.",
                            "World Health Organization (WHO). (2025). Rabies in the South-East Asia Region.",
                            "City Veterinary Office – Cagayan de Oro. (2026). High-density rabies vaccination program and walk-in services.",
                            "City Veterinary Office – Cagayan de Oro. (n.d.). Frontline services: Rabies vaccination and stray animal management. City Government of Cagayan de Oro.",
                            "Department of Agriculture – Regional Field Office 10 (DA RFO-10). (2026). Responsible pet ownership key to rabies eradication.",
                            "Reissig, L., et al. (2022). Why farmers perceive the use of e-government services as burdensome. Government Information Quarterly.",
                            "World Organisation for Animal Health (WOAH). (2021). Digital technologies and implications for Veterinary Services.",
                            "Philippine Information Agency (PIA). (2025, September 24). DOH urges continued caution against rabies despite decline in cases.",
                            "ABS-CBN News. (2025, June 2). DOH: Rabies cases in 2025 down 32 percent from last year.",
                            "Inquirer.net. (2025, August 16). DOH logs 211 rabies cases from January to August 2025.",
                            "Reuters. (2017). Vets in Philippines turn to technology to track and tackle rabies.",
                            "Mission Rabies. (n.d.). WVS Data Collection App for rabies vaccination tracking.",
                            "PCHRD-DOST. (n.d.). RabDash DC: Rabies Data Analytics Dashboard.",
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
                                <div key={i} className="text-muted-foreground text-xs md:text-sm p-3 bg-muted/50 rounded-md border border-border/50 hover:bg-muted/80 transition-colors flex gap-3 shadow-sm">
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
        title: "Q&A",
        content: (
            <div className="flex flex-col items-center justify-center my-auto min-h-[500px] text-center pt-6 pb-12 w-full">
                <div data-aos="zoom-in" className="w-56 h-56 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-full flex items-center justify-center mb-12 relative shadow-2xl">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-60 duration-[2000ms]"></div>
                    <window.Icon name="HeartHandshake" size={88} className="text-primary" />
                </div>
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-7xl md:text-[8rem] font-black text-foreground mb-8 tracking-tighter py-2">Ready for Questions</h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-2xl md:text-4xl text-muted-foreground max-w-2xl font-medium">Thank you for your valuable time and attention.</p>
            </div>
        ),
        notes: "We look forward to your valuable feedback. Thank you!"
    }
];
