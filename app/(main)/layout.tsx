import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="flex flex-1 flex-col items-center pt-20">{children}</div>
      <Footer />
    </>
  );
}
