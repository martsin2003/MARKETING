import gql from 'graphql-tag';

export const getNetverifyLink = gql`
  query GetNetVerifyLink($linkType: String!, $userReference: String!) {
    getNetverifyLink(linkType: $linkType, userReference: $userReference) {
      success
      error
      link
    }
  }
`;
