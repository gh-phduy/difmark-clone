import NavBar from "../components/layout/NavBar";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-midnight-850 font-sans text-slate-200">
      <NavBar />
      <div className="flex flex-1 flex-col items-center">{children}</div>
      {/* No Footer here as per implementation plan for checkout */}
    </div>
  );
}
