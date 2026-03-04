import Link from "next/link";

export default function ListBlogs() {
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      <Link href="/blog/bai-viet-1" className="bg-white p-4 rounded shadow-md">Bài viết 1</Link>
      <Link href="/blog/bai-viet-2" className="bg-white p-4 rounded shadow-md">Bài viết 2</Link>
      <Link href="/blog/bai-viet-3" className="bg-white p-4 rounded shadow-md">Bài viết 3</Link>
      <Link href="/blog/bai-viet-4" className="bg-white p-4 rounded shadow-md">Bài viết 4</Link>
    </div>
  );
}
