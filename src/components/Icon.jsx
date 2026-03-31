const { useEffect, useRef } = React;

window.Icon = ({ name, size = 20, className = "" }) => {
    const containerRef = useRef(null);
    useEffect(() => {
        if (window.lucide && containerRef.current) {
            containerRef.current.innerHTML = `<i data-lucide="${name}"></i>`;
            window.lucide.createIcons({
                icons: { [name]: window.lucide.icons[name] },
                nameAttr: 'data-lucide',
                root: containerRef.current,
                attrs: { class: className, width: size, height: size, 'stroke-width': 2 }
            });
        }
    }, [name, size, className]);
    return <span ref={containerRef} className={`inline-flex items-center justify-center shrink-0 ${className}`} />;
};
