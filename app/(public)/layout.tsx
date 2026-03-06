import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";

interface LayoutPublicProps {
  children: React.ReactNode;
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <div className="bg-blue-200 min-h-screen">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}
