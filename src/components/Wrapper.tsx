export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative z-10 top-28 max-w-7xl mx-auto">
            {children}
        </main>
    );
}