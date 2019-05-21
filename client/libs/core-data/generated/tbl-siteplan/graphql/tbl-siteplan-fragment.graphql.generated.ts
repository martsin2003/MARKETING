import gql from 'graphql-tag';

export const tblSiteplanFragmentGenerated = gql`
    fragment tblSiteplanFragmentGenerated on TblSiteplan {
        intSiteplanId,
        varSiteplanLotSection,
        varSiteplanLotLetter,
        intSiteplanLotNumber,
        varSiteplanLotInstanceId,
        intSiteplanCommunityId,
        varSiteplanLotStatus,
        curSiteplanLotPrice,
        intSiteplanLotSqFt,
        varSiteplanLotImgPath,
        varSiteplanLotHomeFeatures,
        txtSiteplanLotAmenityDetails,
        varSiteplanLotLat,
        varSiteplanLotLong,
        varSiteplanLotAcres,
        varSiteplanAddress,
        varSiteplanCity,
        varSiteplanState,
        varSiteplanZip,
    }
`;
