import gql from 'graphql-tag';
import { tblCommunityFragment } from './communities.fragments';

export const allTblCommunitiesQuery = gql`
  query allTblCommunitiesQuery(
    $first: Int
    $last: Int
    $offset: Int
    $before: Cursor
    $after: Cursor
    $orderBy: [TblCommunitiesOrderBy!]
    $condition: TblCommunityCondition
    $filter: TblCommunityFilter
  ) {
    allTblCommunities(
      first: $first
      last: $last
      offset: $offset
      before: $before
      after: $after
      orderBy: $orderBy
      condition: $condition
      filter: $filter
    ) {
      nodes {
        ...tblCommunityFragment
      }
    }
  }
  ${tblCommunityFragment}
`;
