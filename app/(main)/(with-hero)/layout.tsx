import { HeroCarousel } from "../../components/home/HeroCarousel";

export default function WithHeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroCarousel />
      {children}
    </>
  );
}
