import Footer from "./Footer";
import Navbar from "./Navbar";
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="flex-auto p-0 m-0">{children}</main>
            <Footer />
        </>
    )
}
