import { useMutation, gql } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: likePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

function useToggleLikeMutation() {
  const [mutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(LIKE_PHOTO);
  return { mutation, mutationLoading, mutationError };
}

export { useToggleLikeMutation };
