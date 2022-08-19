export default function Header({
    children,
}) {
    return (
        <header>
            <div className="mx-auto p-4" style={{backgroundColor: '#F03246'}}>
            <h1 className="text-center font-semibold text-2xl text-white">
                {children}
            </h1>
            </div>
        </header>
    );
}
