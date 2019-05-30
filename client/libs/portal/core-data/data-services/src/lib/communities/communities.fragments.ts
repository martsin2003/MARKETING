import gql from 'graphql-tag';

export const tblCommunityFragment = gql`
  fragment tblCommunityFragment on TblCommunity {
    intCommunityId
    intCrmCommunityId
    varCommunityName
    varCommunityParentName
    varCommunityDisplayName
    varCommunityType
    varCommunityAddress
    varCommunityAddress2
    varCommunityCity
    varCommunityState
    varCommunityCounty
    varCommunityZip
    fltCommunityLatitude
    fltCommunityLongitude
    bCommunityUseLatLongDirections
  }
`;
