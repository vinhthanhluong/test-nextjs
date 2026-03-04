import Image from "next/image";

interface LayoutPublicProps {
  children: React.ReactNode;
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <div className="bg-blue-200 min-h-screen">
      <header>
        <h1>Layout Public</h1>
      </header>
      {children}
      <footer>Footer</footer>
    </div>
  );
}
