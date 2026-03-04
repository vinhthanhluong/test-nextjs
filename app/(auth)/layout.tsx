import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function LayoutAuth({ children }: AuthLayoutProps) {
  return (
    <div className="bg-yellow-200 min-h-screen">
      <h1>Layout Auth</h1>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/006/240/302/large_2x/abstract-soft-focus-sunset-field-landscape-of-yellow-flowers-and-grass-meadow-warm-golden-hour-sunset-sunrise-time-tranquil-spring-summer-nature-closeup-and-blurred-forest-background-idyllic-nature-photo.jpg"
        width={500}
        height={500}
        alt="background"
      />
      <Image
        src="https://phongvu.vn/cong-nghe/wp-content/uploads/2024/10/background-ghep-anh-1-1024x640.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      {children}
    </div>
  );
}
