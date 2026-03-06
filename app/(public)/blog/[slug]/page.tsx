import { notFound } from "next/navigation";
interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; //useParams of react-router-dom
  const postDetail = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
  );
  const data = await postDetail.json();

  //404
  if (!postDetail.ok) notFound();

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.body}</p>
    </div>
  );
}
