/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface CreateTblSiteplanInput {
  // An arbitrary string value with no semantic meaning. Will be included in the
  // payload verbatim. May be used to track mutations by the client.
  clientMutationId?: string | null,
  // The `TblSiteplan` to be created by this mutation.
  tblSiteplan: TblSiteplanInput,
};

export interface TblSiteplanInput {
  intSiteplanId?: string | null,
  varSiteplanLotSection?: string | null,
  varSiteplanLotLetter?: string | null,
  intSiteplanLotNumber?: number | null,
  varSiteplanLotInstanceId?: string | null,
  intSiteplanCommunityId?: number | null,
  varSiteplanLotStatus?: string | null,
  curSiteplanLotPrice?: string | null,
  intSiteplanLotSqFt?: number | null,
  varSiteplanLotImgPath?: string | null,
  varSiteplanLotHomeFeatures?: string | null,
  txtSiteplanLotAmenityDetails?: string | null,
  varSiteplanLotLat?: string | null,
  varSiteplanLotLong?: string | null,
  varSiteplanLotAcres?: string | null,
  varSiteplanAddress?: string | null,
  varSiteplanCity?: string | null,
  varSiteplanState?: string | null,
  varSiteplanZip?: string | null,
};

export interface UpdateTblSiteplanInput {
  // An arbitrary string value with no semantic meaning. Will be included in the
  // payload verbatim. May be used to track mutations by the client.
  clientMutationId?: string | null,
  // The globally unique `ID` which will identify a single `TblSiteplan` to be updated.
  id: string,
  // An object where the defined keys will be set on the `TblSiteplan` being updated.
  tblSiteplanPatch: TblSiteplanPatch,
};

export interface TblSiteplanPatch {
  intSiteplanId?: string | null,
  varSiteplanLotSection?: string | null,
  varSiteplanLotLetter?: string | null,
  intSiteplanLotNumber?: number | null,
  varSiteplanLotInstanceId?: string | null,
  intSiteplanCommunityId?: number | null,
  varSiteplanLotStatus?: string | null,
  curSiteplanLotPrice?: string | null,
  intSiteplanLotSqFt?: number | null,
  varSiteplanLotImgPath?: string | null,
  varSiteplanLotHomeFeatures?: string | null,
  txtSiteplanLotAmenityDetails?: string | null,
  varSiteplanLotLat?: string | null,
  varSiteplanLotLong?: string | null,
  varSiteplanLotAcres?: string | null,
  varSiteplanAddress?: string | null,
  varSiteplanCity?: string | null,
  varSiteplanState?: string | null,
  varSiteplanZip?: string | null,
};

export interface UpdateTblSiteplanByIntSiteplanIdInput {
  // An arbitrary string value with no semantic meaning. Will be included in the
  // payload verbatim. May be used to track mutations by the client.
  clientMutationId?: string | null,
  // An object where the defined keys will be set on the `TblSiteplan` being updated.
  tblSiteplanPatch: TblSiteplanPatch,
  intSiteplanId: string,
};

export interface DeleteTblSiteplanInput {
  // An arbitrary string value with no semantic meaning. Will be included in the
  // payload verbatim. May be used to track mutations by the client.
  clientMutationId?: string | null,
  // The globally unique `ID` which will identify a single `TblSiteplan` to be deleted.
  id: string,
};

export interface DeleteTblSiteplanByIntSiteplanIdInput {
  // An arbitrary string value with no semantic meaning. Will be included in the
  // payload verbatim. May be used to track mutations by the client.
  clientMutationId?: string | null,
  intSiteplanId: string,
};

// Methods to use when ordering `TblSiteplan`.
export enum TblSiteplansOrderBy {
  CUR_SITEPLAN_LOT_PRICE_ASC = "CUR_SITEPLAN_LOT_PRICE_ASC",
  CUR_SITEPLAN_LOT_PRICE_DESC = "CUR_SITEPLAN_LOT_PRICE_DESC",
  INT_SITEPLAN_COMMUNITY_ID_ASC = "INT_SITEPLAN_COMMUNITY_ID_ASC",
  INT_SITEPLAN_COMMUNITY_ID_DESC = "INT_SITEPLAN_COMMUNITY_ID_DESC",
  INT_SITEPLAN_ID_ASC = "INT_SITEPLAN_ID_ASC",
  INT_SITEPLAN_ID_DESC = "INT_SITEPLAN_ID_DESC",
  INT_SITEPLAN_LOT_NUMBER_ASC = "INT_SITEPLAN_LOT_NUMBER_ASC",
  INT_SITEPLAN_LOT_NUMBER_DESC = "INT_SITEPLAN_LOT_NUMBER_DESC",
  INT_SITEPLAN_LOT_SQ_FT_ASC = "INT_SITEPLAN_LOT_SQ_FT_ASC",
  INT_SITEPLAN_LOT_SQ_FT_DESC = "INT_SITEPLAN_LOT_SQ_FT_DESC",
  NATURAL = "NATURAL",
  PRIMARY_KEY_ASC = "PRIMARY_KEY_ASC",
  PRIMARY_KEY_DESC = "PRIMARY_KEY_DESC",
  TXT_SITEPLAN_LOT_AMENITY_DETAILS_ASC = "TXT_SITEPLAN_LOT_AMENITY_DETAILS_ASC",
  TXT_SITEPLAN_LOT_AMENITY_DETAILS_DESC = "TXT_SITEPLAN_LOT_AMENITY_DETAILS_DESC",
  VAR_SITEPLAN_ADDRESS_ASC = "VAR_SITEPLAN_ADDRESS_ASC",
  VAR_SITEPLAN_ADDRESS_DESC = "VAR_SITEPLAN_ADDRESS_DESC",
  VAR_SITEPLAN_CITY_ASC = "VAR_SITEPLAN_CITY_ASC",
  VAR_SITEPLAN_CITY_DESC = "VAR_SITEPLAN_CITY_DESC",
  VAR_SITEPLAN_LOT_ACRES_ASC = "VAR_SITEPLAN_LOT_ACRES_ASC",
  VAR_SITEPLAN_LOT_ACRES_DESC = "VAR_SITEPLAN_LOT_ACRES_DESC",
  VAR_SITEPLAN_LOT_HOME_FEATURES_ASC = "VAR_SITEPLAN_LOT_HOME_FEATURES_ASC",
  VAR_SITEPLAN_LOT_HOME_FEATURES_DESC = "VAR_SITEPLAN_LOT_HOME_FEATURES_DESC",
  VAR_SITEPLAN_LOT_IMG_PATH_ASC = "VAR_SITEPLAN_LOT_IMG_PATH_ASC",
  VAR_SITEPLAN_LOT_IMG_PATH_DESC = "VAR_SITEPLAN_LOT_IMG_PATH_DESC",
  VAR_SITEPLAN_LOT_INSTANCE_ID_ASC = "VAR_SITEPLAN_LOT_INSTANCE_ID_ASC",
  VAR_SITEPLAN_LOT_INSTANCE_ID_DESC = "VAR_SITEPLAN_LOT_INSTANCE_ID_DESC",
  VAR_SITEPLAN_LOT_LAT_ASC = "VAR_SITEPLAN_LOT_LAT_ASC",
  VAR_SITEPLAN_LOT_LAT_DESC = "VAR_SITEPLAN_LOT_LAT_DESC",
  VAR_SITEPLAN_LOT_LETTER_ASC = "VAR_SITEPLAN_LOT_LETTER_ASC",
  VAR_SITEPLAN_LOT_LETTER_DESC = "VAR_SITEPLAN_LOT_LETTER_DESC",
  VAR_SITEPLAN_LOT_LONG_ASC = "VAR_SITEPLAN_LOT_LONG_ASC",
  VAR_SITEPLAN_LOT_LONG_DESC = "VAR_SITEPLAN_LOT_LONG_DESC",
  VAR_SITEPLAN_LOT_SECTION_ASC = "VAR_SITEPLAN_LOT_SECTION_ASC",
  VAR_SITEPLAN_LOT_SECTION_DESC = "VAR_SITEPLAN_LOT_SECTION_DESC",
  VAR_SITEPLAN_LOT_STATUS_ASC = "VAR_SITEPLAN_LOT_STATUS_ASC",
  VAR_SITEPLAN_LOT_STATUS_DESC = "VAR_SITEPLAN_LOT_STATUS_DESC",
  VAR_SITEPLAN_STATE_ASC = "VAR_SITEPLAN_STATE_ASC",
  VAR_SITEPLAN_STATE_DESC = "VAR_SITEPLAN_STATE_DESC",
  VAR_SITEPLAN_ZIP_ASC = "VAR_SITEPLAN_ZIP_ASC",
  VAR_SITEPLAN_ZIP_DESC = "VAR_SITEPLAN_ZIP_DESC",
}


export interface TblSiteplanCondition {
  // Checks for equality with the object’s `intSiteplanId` field.
  intSiteplanId?: string | null,
  // Checks for equality with the object’s `varSiteplanLotSection` field.
  varSiteplanLotSection?: string | null,
  // Checks for equality with the object’s `varSiteplanLotLetter` field.
  varSiteplanLotLetter?: string | null,
  // Checks for equality with the object’s `intSiteplanLotNumber` field.
  intSiteplanLotNumber?: number | null,
  // Checks for equality with the object’s `varSiteplanLotInstanceId` field.
  varSiteplanLotInstanceId?: string | null,
  // Checks for equality with the object’s `intSiteplanCommunityId` field.
  intSiteplanCommunityId?: number | null,
  // Checks for equality with the object’s `varSiteplanLotStatus` field.
  varSiteplanLotStatus?: string | null,
  // Checks for equality with the object’s `curSiteplanLotPrice` field.
  curSiteplanLotPrice?: string | null,
  // Checks for equality with the object’s `intSiteplanLotSqFt` field.
  intSiteplanLotSqFt?: number | null,
  // Checks for equality with the object’s `varSiteplanLotImgPath` field.
  varSiteplanLotImgPath?: string | null,
  // Checks for equality with the object’s `varSiteplanLotHomeFeatures` field.
  varSiteplanLotHomeFeatures?: string | null,
  // Checks for equality with the object’s `txtSiteplanLotAmenityDetails` field.
  txtSiteplanLotAmenityDetails?: string | null,
  // Checks for equality with the object’s `varSiteplanLotLat` field.
  varSiteplanLotLat?: string | null,
  // Checks for equality with the object’s `varSiteplanLotLong` field.
  varSiteplanLotLong?: string | null,
  // Checks for equality with the object’s `varSiteplanLotAcres` field.
  varSiteplanLotAcres?: string | null,
  // Checks for equality with the object’s `varSiteplanAddress` field.
  varSiteplanAddress?: string | null,
  // Checks for equality with the object’s `varSiteplanCity` field.
  varSiteplanCity?: string | null,
  // Checks for equality with the object’s `varSiteplanState` field.
  varSiteplanState?: string | null,
  // Checks for equality with the object’s `varSiteplanZip` field.
  varSiteplanZip?: string | null,
};

export interface CreateTblSiteplanGeneratedMutationVariables {
  input: CreateTblSiteplanInput,
};

export interface CreateTblSiteplanGeneratedMutation {
  // Creates a single `TblSiteplan`.
  createTblSiteplan:  {
    __typename: "CreateTblSiteplanPayload",
    // The `TblSiteplan` that was created by this mutation.
    tblSiteplan:  {
      __typename: "TblSiteplan",
      // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
      id: string,
      intSiteplanId: string,
      varSiteplanLotSection: string | null,
      varSiteplanLotLetter: string | null,
      intSiteplanLotNumber: number | null,
      varSiteplanLotInstanceId: string | null,
      intSiteplanCommunityId: number | null,
      varSiteplanLotStatus: string | null,
      curSiteplanLotPrice: string | null,
      intSiteplanLotSqFt: number | null,
      varSiteplanLotImgPath: string | null,
      varSiteplanLotHomeFeatures: string | null,
      txtSiteplanLotAmenityDetails: string | null,
      varSiteplanLotLat: string | null,
      varSiteplanLotLong: string | null,
      varSiteplanLotAcres: string | null,
      varSiteplanAddress: string | null,
      varSiteplanCity: string | null,
      varSiteplanState: string | null,
      varSiteplanZip: string | null,
    } | null,
  } | null,
};

export interface UpdateTblSiteplanGeneratedMutationVariables {
  input: UpdateTblSiteplanInput,
};

export interface UpdateTblSiteplanGeneratedMutation {
  // Updates a single `TblSiteplan` using its globally unique id and a patch.
  updateTblSiteplan:  {
    __typename: "UpdateTblSiteplanPayload",
    // The `TblSiteplan` that was updated by this mutation.
    tblSiteplan:  {
      __typename: "TblSiteplan",
      // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
      id: string,
      intSiteplanId: string,
      varSiteplanLotSection: string | null,
      varSiteplanLotLetter: string | null,
      intSiteplanLotNumber: number | null,
      varSiteplanLotInstanceId: string | null,
      intSiteplanCommunityId: number | null,
      varSiteplanLotStatus: string | null,
      curSiteplanLotPrice: string | null,
      intSiteplanLotSqFt: number | null,
      varSiteplanLotImgPath: string | null,
      varSiteplanLotHomeFeatures: string | null,
      txtSiteplanLotAmenityDetails: string | null,
      varSiteplanLotLat: string | null,
      varSiteplanLotLong: string | null,
      varSiteplanLotAcres: string | null,
      varSiteplanAddress: string | null,
      varSiteplanCity: string | null,
      varSiteplanState: string | null,
      varSiteplanZip: string | null,
    } | null,
  } | null,
};

export interface UpdateTblSiteplanByIntSiteplanIdGeneratedMutationVariables {
  input: UpdateTblSiteplanByIntSiteplanIdInput,
};

export interface UpdateTblSiteplanByIntSiteplanIdGeneratedMutation {
  // Updates a single `TblSiteplan` using a unique key and a patch.
  updateTblSiteplanByIntSiteplanId:  {
    __typename: "UpdateTblSiteplanPayload",
    // The `TblSiteplan` that was updated by this mutation.
    tblSiteplan:  {
      __typename: "TblSiteplan",
      // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
      id: string,
      intSiteplanId: string,
      varSiteplanLotSection: string | null,
      varSiteplanLotLetter: string | null,
      intSiteplanLotNumber: number | null,
      varSiteplanLotInstanceId: string | null,
      intSiteplanCommunityId: number | null,
      varSiteplanLotStatus: string | null,
      curSiteplanLotPrice: string | null,
      intSiteplanLotSqFt: number | null,
      varSiteplanLotImgPath: string | null,
      varSiteplanLotHomeFeatures: string | null,
      txtSiteplanLotAmenityDetails: string | null,
      varSiteplanLotLat: string | null,
      varSiteplanLotLong: string | null,
      varSiteplanLotAcres: string | null,
      varSiteplanAddress: string | null,
      varSiteplanCity: string | null,
      varSiteplanState: string | null,
      varSiteplanZip: string | null,
    } | null,
  } | null,
};

export interface DeleteTblSiteplanGeneratedMutationVariables {
  input: DeleteTblSiteplanInput,
};

export interface DeleteTblSiteplanGeneratedMutation {
  // Deletes a single `TblSiteplan` using its globally unique id.
  deleteTblSiteplan:  {
    __typename: "DeleteTblSiteplanPayload",
    // The `TblSiteplan` that was deleted by this mutation.
    tblSiteplan:  {
      __typename: "TblSiteplan",
      // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
      id: string,
      intSiteplanId: string,
      varSiteplanLotSection: string | null,
      varSiteplanLotLetter: string | null,
      intSiteplanLotNumber: number | null,
      varSiteplanLotInstanceId: string | null,
      intSiteplanCommunityId: number | null,
      varSiteplanLotStatus: string | null,
      curSiteplanLotPrice: string | null,
      intSiteplanLotSqFt: number | null,
      varSiteplanLotImgPath: string | null,
      varSiteplanLotHomeFeatures: string | null,
      txtSiteplanLotAmenityDetails: string | null,
      varSiteplanLotLat: string | null,
      varSiteplanLotLong: string | null,
      varSiteplanLotAcres: string | null,
      varSiteplanAddress: string | null,
      varSiteplanCity: string | null,
      varSiteplanState: string | null,
      varSiteplanZip: string | null,
    } | null,
  } | null,
};

export interface DeleteTblSiteplanByIntSiteplanIdGeneratedMutationVariables {
  input: DeleteTblSiteplanByIntSiteplanIdInput,
};

export interface DeleteTblSiteplanByIntSiteplanIdGeneratedMutation {
  // Deletes a single `TblSiteplan` using a unique key.
  deleteTblSiteplanByIntSiteplanId:  {
    __typename: "DeleteTblSiteplanPayload",
    // The `TblSiteplan` that was deleted by this mutation.
    tblSiteplan:  {
      __typename: "TblSiteplan",
      // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
      id: string,
      intSiteplanId: string,
      varSiteplanLotSection: string | null,
      varSiteplanLotLetter: string | null,
      intSiteplanLotNumber: number | null,
      varSiteplanLotInstanceId: string | null,
      intSiteplanCommunityId: number | null,
      varSiteplanLotStatus: string | null,
      curSiteplanLotPrice: string | null,
      intSiteplanLotSqFt: number | null,
      varSiteplanLotImgPath: string | null,
      varSiteplanLotHomeFeatures: string | null,
      txtSiteplanLotAmenityDetails: string | null,
      varSiteplanLotLat: string | null,
      varSiteplanLotLong: string | null,
      varSiteplanLotAcres: string | null,
      varSiteplanAddress: string | null,
      varSiteplanCity: string | null,
      varSiteplanState: string | null,
      varSiteplanZip: string | null,
    } | null,
  } | null,
};

export interface AllTblSiteplansGeneratedQueryVariables {
  first?: number | null,
  last?: number | null,
  offset?: number | null,
  before?: string | null,
  after?: string | null,
  orderBy?: Array< TblSiteplansOrderBy > | null,
  condition?: TblSiteplanCondition | null,
};

export interface AllTblSiteplansGeneratedQuery {
  // Reads and enables pagination through a set of `TblSiteplan`.
  allTblSiteplans:  {
    __typename: "TblSiteplansConnection",
    // A list of `TblSiteplan` objects.
    nodes:  Array< {
      __typename: "TblSiteplan",
      // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
      id: string,
      intSiteplanId: string,
      varSiteplanLotSection: string | null,
      varSiteplanLotLetter: string | null,
      intSiteplanLotNumber: number | null,
      varSiteplanLotInstanceId: string | null,
      intSiteplanCommunityId: number | null,
      varSiteplanLotStatus: string | null,
      curSiteplanLotPrice: string | null,
      intSiteplanLotSqFt: number | null,
      varSiteplanLotImgPath: string | null,
      varSiteplanLotHomeFeatures: string | null,
      txtSiteplanLotAmenityDetails: string | null,
      varSiteplanLotLat: string | null,
      varSiteplanLotLong: string | null,
      varSiteplanLotAcres: string | null,
      varSiteplanAddress: string | null,
      varSiteplanCity: string | null,
      varSiteplanState: string | null,
      varSiteplanZip: string | null,
    } | null >,
  } | null,
};

export interface TblSiteplanByIntSiteplanIdGeneratedQueryVariables {
  intSiteplanId: string,
};

export interface TblSiteplanByIntSiteplanIdGeneratedQuery {
  tblSiteplanByIntSiteplanId:  {
    __typename: "TblSiteplan",
    // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
    id: string,
    intSiteplanId: string,
    varSiteplanLotSection: string | null,
    varSiteplanLotLetter: string | null,
    intSiteplanLotNumber: number | null,
    varSiteplanLotInstanceId: string | null,
    intSiteplanCommunityId: number | null,
    varSiteplanLotStatus: string | null,
    curSiteplanLotPrice: string | null,
    intSiteplanLotSqFt: number | null,
    varSiteplanLotImgPath: string | null,
    varSiteplanLotHomeFeatures: string | null,
    txtSiteplanLotAmenityDetails: string | null,
    varSiteplanLotLat: string | null,
    varSiteplanLotLong: string | null,
    varSiteplanLotAcres: string | null,
    varSiteplanAddress: string | null,
    varSiteplanCity: string | null,
    varSiteplanState: string | null,
    varSiteplanZip: string | null,
  } | null,
};

export interface TblSiteplanGeneratedQueryVariables {
  id: string,
};

export interface TblSiteplanGeneratedQuery {
  // Reads a single `TblSiteplan` using its globally unique `ID`.
  tblSiteplan:  {
    __typename: "TblSiteplan",
    // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
    id: string,
    intSiteplanId: string,
    varSiteplanLotSection: string | null,
    varSiteplanLotLetter: string | null,
    intSiteplanLotNumber: number | null,
    varSiteplanLotInstanceId: string | null,
    intSiteplanCommunityId: number | null,
    varSiteplanLotStatus: string | null,
    curSiteplanLotPrice: string | null,
    intSiteplanLotSqFt: number | null,
    varSiteplanLotImgPath: string | null,
    varSiteplanLotHomeFeatures: string | null,
    txtSiteplanLotAmenityDetails: string | null,
    varSiteplanLotLat: string | null,
    varSiteplanLotLong: string | null,
    varSiteplanLotAcres: string | null,
    varSiteplanAddress: string | null,
    varSiteplanCity: string | null,
    varSiteplanState: string | null,
    varSiteplanZip: string | null,
  } | null,
};

export interface tblSiteplanFragmentGeneratedFragment {
  __typename: "TblSiteplan",
  // A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  id: string,
  intSiteplanId: string,
  varSiteplanLotSection: string | null,
  varSiteplanLotLetter: string | null,
  intSiteplanLotNumber: number | null,
  varSiteplanLotInstanceId: string | null,
  intSiteplanCommunityId: number | null,
  varSiteplanLotStatus: string | null,
  curSiteplanLotPrice: string | null,
  intSiteplanLotSqFt: number | null,
  varSiteplanLotImgPath: string | null,
  varSiteplanLotHomeFeatures: string | null,
  txtSiteplanLotAmenityDetails: string | null,
  varSiteplanLotLat: string | null,
  varSiteplanLotLong: string | null,
  varSiteplanLotAcres: string | null,
  varSiteplanAddress: string | null,
  varSiteplanCity: string | null,
  varSiteplanState: string | null,
  varSiteplanZip: string | null,
};
