import Link from "next/link";

type SearchParam = Promise<{ keyword: string }>;

type SearchPageProps = {
  searchParams: SearchParam;
};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  let posts: Post[] = [];
  try {
    const { keyword } = await searchParams;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?id=${keyword}`,
      {
        cache: "no-cache",
      },
    );

    const data = await response.json();
    posts = Array.isArray(data) ? data : [data];
  } catch (error: any) {
    return (
      <div className="text-red-500">{error?.message || "Đã có lỗi xảy ra"}</div>
    );
  }

  if(posts.length === 0) {
    return <div className="text-center p-3 text-red-500">Không tìm thấy bài viết</div>
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-4 p-10">
        {posts.map((pt) => (
          <Link
            key={pt.id}
            href={`/blog/${pt.id}`}
            className="bg-white p-4 rounded shadow-md"
          >
            <h3 className="text-2xl font-bold">{pt.title}</h3>
            <p className="text-gray-600 line-clamp-3">{pt.body}</p>
            <p className="text-blue-500 mt-2">Read more....</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
