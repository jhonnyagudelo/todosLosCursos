import { gql, useQuery } from "@apollo/client";

function useSinglePhoto(id) {
  const getSinglePhoto = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `;
  return useQuery(getSinglePhoto, { variables: { id } });
}

export { useSinglePhoto };
