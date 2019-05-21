import gql from 'graphql-tag';
import { tblCommunityFragmentGenerated } from './tbl-community-fragment.graphql.generated';

export const createTblCommunityGeneratedMutation = gql`
    mutation CreateTblCommunityGenerated($input: CreateTblCommunityInput!) {
        createTblCommunity(input: $input) {
            tblCommunity {
                ...tblCommunityFragmentGenerated
            }
        }
    }
    ${ tblCommunityFragmentGenerated }
`;

export const updateTblCommunityGeneratedMutation = gql`
    mutation UpdateTblCommunityGenerated($input: UpdateTblCommunityInput!) {
        updateTblCommunity(input: $input) {
            tblCommunity {
                ...tblCommunityFragmentGenerated
            }
        }
    }
    ${ tblCommunityFragmentGenerated }
`;

export const updateTblCommunityByIntCommunityIdGeneratedMutation = gql`
    mutation UpdateTblCommunityByIntCommunityIdGenerated($input: UpdateTblCommunityByIntCommunityIdInput!) {
        updateTblCommunityByIntCommunityId(input: $input) {
            tblCommunity {
                ...tblCommunityFragmentGenerated
            }
        }
    }
    ${ tblCommunityFragmentGenerated }
`;

export const deleteTblCommunityGeneratedMutation = gql`
    mutation DeleteTblCommunityGenerated($input: DeleteTblCommunityInput!) {
        deleteTblCommunity(input: $input) {
            tblCommunity {
                ...tblCommunityFragmentGenerated
            }
        }
    }
    ${ tblCommunityFragmentGenerated }
`;

export const deleteTblCommunityByIntCommunityIdGeneratedMutation = gql`
    mutation DeleteTblCommunityByIntCommunityIdGenerated($input: DeleteTblCommunityByIntCommunityIdInput!) {
        deleteTblCommunityByIntCommunityId(input: $input) {
            tblCommunity {
                ...tblCommunityFragmentGenerated
            }
        }
    }
    ${ tblCommunityFragmentGenerated }
`;

export const allTblCommunitiesGeneratedQuery = gql`
    query AllTblCommunitiesGenerated($first: Int, $last: Int, $offset: Int, $before: Cursor, $after: Cursor, $orderBy: [TblCommunitiesOrderBy!], $condition: TblCommunityCondition, $filter: TblCommunityFilter) {
        allTblCommunities(first: $first, last: $last, offset: $offset, before: $before, after: $after, orderBy: $orderBy, condition: $condition, filter: $filter) {
            nodes {
                ...tblCommunityFragmentGenerated
            }
        }
    }
    ${ tblCommunityFragmentGenerated }
`;

export const tblCommunityByIntCommunityIdGeneratedQuery = gql`
    query TblCommunityByIntCommunityIdGenerated($intCommunityId: BigInt!) {
        tblCommunityByIntCommunityId(intCommunityId: $intCommunityId) {
            ...tblCommunityFragmentGenerated
        }
    }
    ${ tblCommunityFragmentGenerated }
`;

export const tblCommunityGeneratedQuery = gql`
    query TblCommunityGenerated($nodeId: ID!) {
        tblCommunity(nodeId: $nodeId) {
            ...tblCommunityFragmentGenerated
        }
    }
    ${ tblCommunityFragmentGenerated }
`;


















