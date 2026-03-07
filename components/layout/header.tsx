"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRef, useState } from "react";

export default function Header() {
  const router = useRouter();

  // const [keyword , setKeyWord ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerSearchPage = () => {
    const value = inputRef.current?.value;
    if(value?.trim() === "") return;
    router.push(`/search?keyword=${value?.trim()}`);
  };

  return (
    <header className="p-4 border-b">
      <h1>Header public</h1>
      <div className="flex items-center gap-1">
        <Input
          ref={inputRef}
          className="bg-white text-black max-w-50"
          placeholder="Nhập nội dung tìm kiếm...."
        />
        <Button onClick={handlerSearchPage}>Tìm kiếm</Button>
      </div>
    </header>
  );
}
