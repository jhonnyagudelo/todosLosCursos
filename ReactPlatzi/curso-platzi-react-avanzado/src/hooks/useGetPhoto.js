import { useQuery, gql } from "@apollo/client";

function useGetPhoto(categoryId) {
  const getPhotos = gql`
    query getphotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `;
  const { loading, error, data } = useQuery(getPhotos, {
    variables: { categoryId },
  });
  return { loading, error, data };
}

export { useGetPhoto };
