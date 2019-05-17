import gql from 'graphql-tag';
import { tblSiteplanFragmentGenerated } from './tbl-siteplan-fragment.graphql.generated';

export const createTblSiteplanGeneratedMutation = gql`
    mutation CreateTblSiteplanGenerated($input: CreateTblSiteplanInput!) {
        createTblSiteplan(input: $input) {
            tblSiteplan {
                ...tblSiteplanFragmentGenerated
            }
        }
    }
    ${ tblSiteplanFragmentGenerated }
`;

export const updateTblSiteplanGeneratedMutation = gql`
    mutation UpdateTblSiteplanGenerated($input: UpdateTblSiteplanInput!) {
        updateTblSiteplan(input: $input) {
            tblSiteplan {
                ...tblSiteplanFragmentGenerated
            }
        }
    }
    ${ tblSiteplanFragmentGenerated }
`;

export const updateTblSiteplanByIntSiteplanIdGeneratedMutation = gql`
    mutation UpdateTblSiteplanByIntSiteplanIdGenerated($input: UpdateTblSiteplanByIntSiteplanIdInput!) {
        updateTblSiteplanByIntSiteplanId(input: $input) {
            tblSiteplan {
                ...tblSiteplanFragmentGenerated
            }
        }
    }
    ${ tblSiteplanFragmentGenerated }
`;

export const deleteTblSiteplanGeneratedMutation = gql`
    mutation DeleteTblSiteplanGenerated($input: DeleteTblSiteplanInput!) {
        deleteTblSiteplan(input: $input) {
            tblSiteplan {
                ...tblSiteplanFragmentGenerated
            }
        }
    }
    ${ tblSiteplanFragmentGenerated }
`;

export const deleteTblSiteplanByIntSiteplanIdGeneratedMutation = gql`
    mutation DeleteTblSiteplanByIntSiteplanIdGenerated($input: DeleteTblSiteplanByIntSiteplanIdInput!) {
        deleteTblSiteplanByIntSiteplanId(input: $input) {
            tblSiteplan {
                ...tblSiteplanFragmentGenerated
            }
        }
    }
    ${ tblSiteplanFragmentGenerated }
`;

export const allTblSiteplansGeneratedQuery = gql`
    query AllTblSiteplansGenerated($first: Int, $last: Int, $offset: Int, $before: Cursor, $after: Cursor, $orderBy: [TblSiteplansOrderBy!], $condition: TblSiteplanCondition) {
        allTblSiteplans(first: $first, last: $last, offset: $offset, before: $before, after: $after, orderBy: $orderBy, condition: $condition) {
            nodes {
                ...tblSiteplanFragmentGenerated
            }
        }
    }
    ${ tblSiteplanFragmentGenerated }
`;

export const tblSiteplanByIntSiteplanIdGeneratedQuery = gql`
    query TblSiteplanByIntSiteplanIdGenerated($intSiteplanId: BigInt!) {
        tblSiteplanByIntSiteplanId(intSiteplanId: $intSiteplanId) {
            ...tblSiteplanFragmentGenerated
        }
    }
    ${ tblSiteplanFragmentGenerated }
`;

export const tblSiteplanGeneratedQuery = gql`
    query TblSiteplanGenerated($id: ID!) {
        tblSiteplan(id: $id) {
            ...tblSiteplanFragmentGenerated
        }
    }
    ${ tblSiteplanFragmentGenerated }
`;


















