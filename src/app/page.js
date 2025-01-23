import Link from "next/link";
import axios from "axios";

async function fetchPosts() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
}

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <section className="max-w-7xl mx-auto px-5 my-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-5">Blog Posts</h1>
        <ul className="space-y-5">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <p className="text-blue-500 hover:underline border p-2 rounded-xl">{post.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
