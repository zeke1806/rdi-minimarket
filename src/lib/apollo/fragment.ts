import { gql } from '@apollo/client';

export const CATEGORY_FRAG = gql`
  fragment CategoryFrag on Category {
    id: ID!
    name: String!
  }
`;
