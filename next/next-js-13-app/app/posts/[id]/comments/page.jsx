const fetchComments = async(id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 }
  }).then((res) => res?.json())
}

export default async function Comments({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul>
      {comments?.map((i) => (
        <li key={i?.id}>
          <h2>{i?.name}</h2>
          <p>{i?.body}</p>
        </li>
      ))}
    </ul>
  );
}
