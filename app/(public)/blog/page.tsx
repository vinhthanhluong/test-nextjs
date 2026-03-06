import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function ListBlogs() {
  let data: Post[] = [];
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts" , {
      cache: 'no-cache'
    });
    data = await response.json();
  } catch (error: any) {
    return (
      <div className="text-red-500">{error?.message || "Đã xảy ra lỗi!!"}</div>
    );
  }

  console.log("🎄 ~ ListBlogs ~ response:", data);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-4 p-10">
        {data.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="bg-white p-4 rounded shadow-md"
          >
            <h3 className="text-2xl font-bold">{post.title}</h3>
            <p className="text-gray-600 line-clamp-3">{post.body}</p>
            <p className="text-blue-500 mt-2">Read more....</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
