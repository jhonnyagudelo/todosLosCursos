import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res?.json());
};

export default async function ListOfPosts() {
  const posts = await fetchPost();
  return posts.slice(0, 5)?.map((i) => (
    <article key={i?.id}>
      <Link href="posts/[id]" as={`/posts/${i?.id}`}>
        <h2>{i?.title}</h2>
        <p>{i?.body}</p>
        <LikeButton />
      </Link>
    </article>
  ));
}
