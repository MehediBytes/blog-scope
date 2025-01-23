import axios from "axios";

async function fetchPostDetails(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
}

export default async function BlogDetailsPage({ params }) {
    const { id } = await params;

    const post = await fetchPostDetails(id);

    return (
        <div className="max-w-7xl mx-auto min-h-screen px-4">
            <div className="flex items-center justify-center">
                <div className="p-6 bg-white rounded-xl shadow-md text-center">
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
}
