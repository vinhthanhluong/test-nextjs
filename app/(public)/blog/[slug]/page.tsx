import type { Metadata } from 'next';
import { notFound } from "next/navigation";
interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

// Create function post detail slug
async function getPostDetailBySlug(slug : string) {
  const postDetail = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  //404
  if (!postDetail.ok) notFound();

  const data = await postDetail.json();

  return data;
}

// generateMetadata
export async function generateMetadata({ params }: BlogDetailProps) : Promise<Metadata> {
  const { slug } = await params;
  const data = await getPostDetailBySlug(slug);
 
  return {
    title: data.title,
    description: data.description,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; //useParams of react-router-dom
  const data = await getPostDetailBySlug(slug);


  return (
    <div className="text-center p-10" id='detailBlog'>
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.body}</p>
    </div>
  );
}
