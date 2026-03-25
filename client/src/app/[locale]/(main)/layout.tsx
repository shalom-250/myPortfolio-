import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col pt-20 lg:pt-24">
                <SmoothScroll>
                    {children}
                    <Footer />
                </SmoothScroll>
            </main>
        </div>
    );
}
