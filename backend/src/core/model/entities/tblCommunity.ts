import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblBDXHotHome} from "./tblBDXHotHome";
import {tblCommunityARHeaderGraphic} from "./tblCommunityARHeaderGraphic";
import {tblCommunityBrochure} from "./tblCommunityBrochure";
import {tblCommunityEmailMarketingAssets} from "./tblCommunityEmailMarketingAssets";
import {tblCommunityEvent} from "./tblCommunityEvent";
import {tblCommunityFlag} from "./tblCommunityFlag";
import {tblCommunityMicrositeSliderGallery} from "./tblCommunityMicrositeSliderGallery";
import {tblCommunityOfferAddendum} from "./tblCommunityOfferAddendum";
import {tblCommunityProject} from "./tblCommunityProject";
import {tblCommunityPromotion} from "./tblCommunityPromotion";
import {tblCommunitySitePlanHomeType} from "./tblCommunitySitePlanHomeType";
import {tblCommunitySiteplanGallery} from "./tblCommunitySiteplanGallery";
import {tblEDMonthlyDashboard} from "./tblEDMonthlyDashboard";
import {tblEDYearlyDashboard} from "./tblEDYearlyDashboard";
import {tblFPCommunityModelElevation} from "./tblFPCommunityModelElevation";
import {tblFPCommunityModelGroupGallery} from "./tblFPCommunityModelGroupGallery";
import {tblFPCommunityModelOptionGallery} from "./tblFPCommunityModelOptionGallery";
import {tblFPUserSavedFloorplan} from "./tblFPUserSavedFloorplan";
import {tblHomeEstimate} from "./tblHomeEstimate";
import {tblMBFCommunityAccess} from "./tblMBFCommunityAccess";
import {tblMoveInBrochure} from "./tblMoveInBrochure";
import {tblPlanBrochure} from "./tblPlanBrochure";
import {tblWMCommunity} from "./tblWMCommunity";


@Entity("tblCommunity",{schema:"public" } )
export class tblCommunity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityID"
        })
    intCommunityID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCRMCommunityID"
        })
    intCRMCommunityID:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityUseInCRM"
        })
    bCommunityUseInCRM:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityNameInCRM"
        })
    varCommunityNameInCRM:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityName"
        })
    varCommunityName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityParentName"
        })
    varCommunityParentName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityDisplayName"
        })
    varCommunityDisplayName:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunitySalesRepID"
        })
    intCommunitySalesRepID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySalesRepEmail"
        })
    varCommunitySalesRepEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySalesRepPhone"
        })
    varCommunitySalesRepPhone:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunitySalesRep2ID"
        })
    intCommunitySalesRep2ID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySalesRep2Email"
        })
    varCommunitySalesRep2Email:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySalesRep2Phone"
        })
    varCommunitySalesRep2Phone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityELeadRecipientList"
        })
    varCommunityELeadRecipientList:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityType"
        })
    varCommunityType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityStyle"
        })
    varCommunityStyle:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityMHBR"
        })
    varCommunityMHBR:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityModelHours"
        })
    txtCommunityModelHours:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAddress"
        })
    varCommunityAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAddress2"
        })
    varCommunityAddress2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityCity"
        })
    varCommunityCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityState"
        })
    varCommunityState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityCounty"
        })
    varCommunityCounty:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityZip"
        })
    varCommunityZip:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        default: () => "'0'",
        precision:53,
        name:"fltCommunityLatitude"
        })
    fltCommunityLatitude:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        default: () => "'0'",
        precision:53,
        name:"fltCommunityLongitude"
        })
    fltCommunityLongitude:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAddress_old"
        })
    varCommunityAddress_old:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAddress2_old"
        })
    varCommunityAddress2_old:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityCity_old"
        })
    varCommunityCity_old:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityState_old"
        })
    varCommunityState_old:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityCounty_old"
        })
    varCommunityCounty_old:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityZip_old"
        })
    varCommunityZip_old:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        default: () => "'0'",
        precision:53,
        name:"fltCommunityLatitude_old"
        })
    fltCommunityLatitude_old:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        default: () => "'0'",
        precision:53,
        name:"fltCommunityLongitude_old"
        })
    fltCommunityLongitude_old:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityUseLatLongDirections"
        })
    bCommunityUseLatLongDirections:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityDirections"
        })
    txtCommunityDirections:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityBaseballWI"
        })
    bCommunityBaseballWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityBaseballNB"
        })
    bCommunityBaseballNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityBasketballWI"
        })
    bCommunityBasketballWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityBasketballNB"
        })
    bCommunityBasketballNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityBeachWI"
        })
    bCommunityBeachWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityBeachNB"
        })
    bCommunityBeachNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityCenterWI"
        })
    bCommunityCenterWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityCenterNB"
        })
    bCommunityCenterNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityClubhouseWI"
        })
    bCommunityClubhouseWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityClubhouseNB"
        })
    bCommunityClubhouseNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityDiningWI"
        })
    bCommunityDiningWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityDiningNB"
        })
    bCommunityDiningNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityGolfWI"
        })
    bCommunityGolfWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityGolfNB"
        })
    bCommunityGolfNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityFitnessWI"
        })
    bCommunityFitnessWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityFitnessNB"
        })
    bCommunityFitnessNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityGatedWI"
        })
    bCommunityGatedWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityGatedNB"
        })
    bCommunityGatedNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityLakeWI"
        })
    bCommunityLakeWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityLakeNB"
        })
    bCommunityLakeNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityMarinaWI"
        })
    bCommunityMarinaWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityMarinaNB"
        })
    bCommunityMarinaNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityParksWI"
        })
    bCommunityParksWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityParksNB"
        })
    bCommunityParksNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityPlaygroundWI"
        })
    bCommunityPlaygroundWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityPlaygroundNB"
        })
    bCommunityPlaygroundNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityPondWI"
        })
    bCommunityPondWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityPondNB"
        })
    bCommunityPondNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityPoolWI"
        })
    bCommunityPoolWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityPoolNB"
        })
    bCommunityPoolNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityRecreationWI"
        })
    bCommunityRecreationWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityRecreationNB"
        })
    bCommunityRecreationNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunitySchoolsWI"
        })
    bCommunitySchoolsWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunitySchoolsNB"
        })
    bCommunitySchoolsNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityShoppingWI"
        })
    bCommunityShoppingWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityShoppingNB"
        })
    bCommunityShoppingNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunitySoccerWI"
        })
    bCommunitySoccerWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunitySoccerNB"
        })
    bCommunitySoccerNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunitySwimmingWI"
        })
    bCommunitySwimmingWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunitySwimmingNB"
        })
    bCommunitySwimmingNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityTennisWI"
        })
    bCommunityTennisWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityTennisNB"
        })
    bCommunityTennisNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityTrailsWI"
        })
    bCommunityTrailsWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityTrailsNB"
        })
    bCommunityTrailsNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityViewsWI"
        })
    bCommunityViewsWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityViewsNB"
        })
    bCommunityViewsNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityVolleyballWI"
        })
    bCommunityVolleyballWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityVolleyballNB"
        })
    bCommunityVolleyballNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityWaterfrontLotsWI"
        })
    bCommunityWaterfrontLotsWI:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityWaterfrontLotsNB"
        })
    bCommunityWaterfrontLotsNB:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityServiceTypeHOA"
        })
    bCommunityServiceTypeHOA:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityServiceTypeMaintenance"
        })
    bCommunityServiceTypeMaintenance:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityServiceTypeMedicalCare"
        })
    bCommunityServiceTypeMedicalCare:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityServiceTypeSecurity"
        })
    bCommunityServiceTypeSecurity:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityServiceTypeShopping"
        })
    bCommunityServiceTypeShopping:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityUtilElectric"
        })
    bCommunityUtilElectric:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityUtilGas"
        })
    bCommunityUtilGas:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityUtilSewer"
        })
    bCommunityUtilSewer:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityUtilTelephone"
        })
    bCommunityUtilTelephone:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityUtilWater"
        })
    bCommunityUtilWater:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityUtilWasteWater"
        })
    bCommunityUtilWasteWater:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityAmenitiesNearby"
        })
    txtCommunityAmenitiesNearby:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityTaxes"
        })
    varCommunityTaxes:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySchoolDistrictName"
        })
    varCommunitySchoolDistrictName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySchoolDistrictLEAID"
        })
    varCommunitySchoolDistrictLEAID:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityMarketingHeadline"
        })
    varCommunityMarketingHeadline:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityFeatures"
        })
    txtCommunityFeatures:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityOverview"
        })
    txtCommunityOverview:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityIncentive"
        })
    txtCommunityIncentive:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityIncentiveURL"
        })
    varCommunityIncentiveURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityIncentiveDisclaimer"
        })
    txtCommunityIncentiveDisclaimer:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEbrochurePDF"
        })
    varCommunityEbrochurePDF:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityLogo"
        })
    varCommunityLogo:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityVideoTourURL"
        })
    varCommunityVideoTourURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySiteplanPdf"
        })
    varCommunitySiteplanPdf:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunitySiteplanPDFSize"
        })
    intCommunitySiteplanPDFSize:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySiteplanLarge"
        })
    varCommunitySiteplanLarge:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityInteractiveSiteplan"
        })
    bCommunityInteractiveSiteplan:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityInteractiveSiteplanPath"
        })
    varCommunityInteractiveSiteplanPath:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        default: () => "'0'",
        precision:53,
        name:"fltCommunityInteractiveSiteplanLatitude"
        })
    fltCommunityInteractiveSiteplanLatitude:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        default: () => "'0'",
        precision:53,
        name:"fltCommunityInteractiveSiteplanLongitude"
        })
    fltCommunityInteractiveSiteplanLongitude:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityInteractiveSiteplanZoom"
        })
    intCommunityInteractiveSiteplanZoom:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityMetaTitle"
        })
    varCommunityMetaTitle:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityMetaDescription"
        })
    txtCommunityMetaDescription:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunitySEOFooterBlurb"
        })
    txtCommunitySEOFooterBlurb:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityMetaKeywords"
        })
    txtCommunityMetaKeywords:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAvailability"
        })
    varCommunityAvailability:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityStatus"
        })
    varCommunityStatus:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityCreatedDate"
        })
    dteCommunityCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityModifiedDate"
        })
    dteCommunityModifiedDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityDivision"
        })
    varCommunityDivision:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityOldID"
        })
    intCommunityOldID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityVRPassword"
        })
    varCommunityVRPassword:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityVRUsername"
        })
    varCommunityVRUsername:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySeoName"
        })
    varCommunitySeoName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySeoCity"
        })
    varCommunitySeoCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityThumb"
        })
    varCommunityThumb:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySalesOfficeCrossStreet"
        })
    varCommunitySalesOfficeCrossStreet:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySalesOfficeFax"
        })
    varCommunitySalesOfficeFax:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityRegionID"
        })
    intCommunityRegionID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityPrice"
        })
    intCommunityPrice:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityFloorplanMap"
        })
    varCommunityFloorplanMap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityPriceDescription"
        })
    varCommunityPriceDescription:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityPriceStatus"
        })
    varCommunityPriceStatus:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunitySyndicate"
        })
    bCommunitySyndicate:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"id"
        })
    id:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"sales_office_phone"
        })
    sales_office_phone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"sales_office_email"
        })
    sales_office_email:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"sales_office_contact"
        })
    sales_office_contact:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"leads_email"
        })
    leads_email:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"bCommunityServiceGroundsCare"
        })
    bCommunityServiceGroundsCare:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityBuildOnYourLot"
        })
    bCommunityBuildOnYourLot:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityMarketChannelList"
        })
    varCommunityMarketChannelList:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityOutOf"
        })
    bCommunityOutOf:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityShareContacts"
        })
    bCommunityShareContacts:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityDivisionID"
        })
    intCommunityDivisionID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtStateSeoName"
        })
    txtStateSeoName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityNearbyAmenity"
        })
    txtCommunityNearbyAmenity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunitySiteplanFolder"
        })
    varCommunitySiteplanFolder:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        name:"intCommunityAssociationFees"
        })
    intCommunityAssociationFees:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"fltCommunityPropertyTax"
        })
    fltCommunityPropertyTax:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"fltCommunityHazardInsurance"
        })
    fltCommunityHazardInsurance:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityTypeID"
        })
    intCommunityTypeID:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bComingSoon"
        })
    bComingSoon:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bArchived"
        })
    bArchived:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityLegalName"
        })
    varCommunityLegalName:string | null;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curCommunityInitialCapitalContribution"
        })
    curCommunityInitialCapitalContribution:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intCommunityFloorplanCommunityID"
        })
    intCommunityFloorplanCommunityID:number;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityArchived"
        })
    bCommunityArchived:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityTouchscreenSubdomain"
        })
    varCommunityTouchscreenSubdomain:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityTabletSubdomain"
        })
    varCommunityTabletSubdomain:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityBrochureIncludeWithHomeBrochure"
        })
    bCommunityBrochureIncludeWithHomeBrochure:boolean | null;
        

    @Column("double precision",{ 
        nullable:true,
        default: () => "'0'",
        precision:53,
        name:"fltCommunityAgentCommission"
        })
    fltCommunityAgentCommission:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAgentPolicyRefType"
        })
    varCommunityAgentPolicyRefType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAgentPolicyTitle"
        })
    varCommunityAgentPolicyTitle:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAgentPolicyURLPDF"
        })
    varCommunityAgentPolicyURLPDF:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityGreenRefType"
        })
    varCommunityGreenRefType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityGreenTitle"
        })
    varCommunityGreenTitle:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityGreenURLPDF"
        })
    varCommunityGreenURLPDF:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bCommunityFullInteractiveSiteplan"
        })
    bCommunityFullInteractiveSiteplan:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityAutomatedEmailSurveyURL"
        })
    varCommunityAutomatedEmailSurveyURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityTouchscreenVideoGoogleDriveID"
        })
    varCommunityTouchscreenVideoGoogleDriveID:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bCommunitySmartHomeFlg"
        })
    bCommunitySmartHomeFlg:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bCommunitySmartHomeTechFlg"
        })
    bCommunitySmartHomeTechFlg:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityMyCommandCommunityTypeDisplay"
        })
    varCommunityMyCommandCommunityTypeDisplay:string | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'R'",
        name:"varCommunityMyCommandPricingFormatDisplay"
        })
    varCommunityMyCommandPricingFormatDisplay:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityEmpowerMyCommandListingImage"
        })
    varCommunityEmpowerMyCommandListingImage:string | null;
        

   
    @OneToMany(type=>tblBDXHotHome, tblBDXHotHome=>tblBDXHotHome.intBdxHotHomeCommunity,{ onDelete: 'SET NULL' , })
    tblBdxHotHomes:tblBDXHotHome[];
    

   
    @OneToMany(type=>tblCommunityARHeaderGraphic, tblCommunityARHeaderGraphic=>tblCommunityARHeaderGraphic.intCommunityArHeaderGraphicCommunity,{ onDelete: 'CASCADE' , })
    tblCommunityArHeaderGraphics:tblCommunityARHeaderGraphic[];
    

   
    @OneToMany(type=>tblCommunityBrochure, tblCommunityBrochure=>tblCommunityBrochure.intCommunityBrochureCommunity,{ onDelete: 'CASCADE' , })
    tblCommunityBrochures:tblCommunityBrochure[];
    

   
    @OneToMany(type=>tblCommunityEmailMarketingAssets, tblCommunityEmailMarketingAssets=>tblCommunityEmailMarketingAssets.intCommunityEmailMarketingAssetsCommunity,{ onDelete: 'CASCADE' , })
    tblCommunityEmailMarketingAssetss:tblCommunityEmailMarketingAssets[];
    

   
    @OneToMany(type=>tblCommunityEvent, tblCommunityEvent=>tblCommunityEvent.intCommunityEventCommunity,{ onDelete: 'CASCADE' , })
    tblCommunityEvents:tblCommunityEvent[];
    

   
    @OneToMany(type=>tblCommunityFlag, tblCommunityFlag=>tblCommunityFlag.intCommunityFlagCommunity,{ onDelete: 'SET NULL' , })
    tblCommunityFlags:tblCommunityFlag[];
    

   
    @OneToMany(type=>tblCommunityMicrositeSliderGallery, tblCommunityMicrositeSliderGallery=>tblCommunityMicrositeSliderGallery.intCommunityMicrositeSliderGalleryCommunity,{ onDelete: 'CASCADE' , })
    tblCommunityMicrositeSliderGallerys:tblCommunityMicrositeSliderGallery[];
    

   
    @OneToMany(type=>tblCommunityOfferAddendum, tblCommunityOfferAddendum=>tblCommunityOfferAddendum.intCommunityOfferAddendumCommunity)
    tblCommunityOfferAddendums:tblCommunityOfferAddendum[];
    

   
    @OneToMany(type=>tblCommunityProject, tblCommunityProject=>tblCommunityProject.intCommunityProjectCommunity,{ onDelete: 'CASCADE' , })
    tblCommunityProjects:tblCommunityProject[];
    

   
    @OneToMany(type=>tblCommunityPromotion, tblCommunityPromotion=>tblCommunityPromotion.intCommunityPromotionCommunity,{ onDelete: 'CASCADE' , })
    tblCommunityPromotions:tblCommunityPromotion[];
    

   
    @OneToMany(type=>tblCommunitySitePlanHomeType, tblCommunitySitePlanHomeType=>tblCommunitySitePlanHomeType.intCommunitySitePlanHomeTypeCommunity,{ onDelete: 'CASCADE' , })
    tblCommunitySitePlanHomeTypes:tblCommunitySitePlanHomeType[];
    

   
    @OneToMany(type=>tblCommunitySiteplanGallery, tblCommunitySiteplanGallery=>tblCommunitySiteplanGallery.intCommunitySiteplanGalleryCommunity,{ onDelete: 'CASCADE' , })
    tblCommunitySiteplanGallerys:tblCommunitySiteplanGallery[];
    

   
    @OneToMany(type=>tblEDMonthlyDashboard, tblEDMonthlyDashboard=>tblEDMonthlyDashboard.intEdMonthlyDashboardCommunity,{ onDelete: 'CASCADE' , })
    tblEdMonthlyDashboards:tblEDMonthlyDashboard[];
    

   
    @OneToMany(type=>tblEDYearlyDashboard, tblEDYearlyDashboard=>tblEDYearlyDashboard.intEdYearlyDashboardCommunity,{ onDelete: 'CASCADE' , })
    tblEdYearlyDashboards:tblEDYearlyDashboard[];
    

   
    @OneToMany(type=>tblFPCommunityModelElevation, tblFPCommunityModelElevation=>tblFPCommunityModelElevation.intFpCommunityModelElevationCommunity,{ onDelete: 'CASCADE' , })
    tblFpCommunityModelElevations:tblFPCommunityModelElevation[];
    

   
    @OneToMany(type=>tblFPCommunityModelGroupGallery, tblFPCommunityModelGroupGallery=>tblFPCommunityModelGroupGallery.intFpCommunityModelGroupGalleryCommunity)
    tblFpCommunityModelGroupGallerys:tblFPCommunityModelGroupGallery[];
    

   
    @OneToMany(type=>tblFPCommunityModelOptionGallery, tblFPCommunityModelOptionGallery=>tblFPCommunityModelOptionGallery.intFpCommunityModelOptionGalleryCommunity)
    tblFpCommunityModelOptionGallerys:tblFPCommunityModelOptionGallery[];
    

   
    @OneToMany(type=>tblFPUserSavedFloorplan, tblFPUserSavedFloorplan=>tblFPUserSavedFloorplan.intFpUserSavedFloorplanCommunity)
    tblFpUserSavedFloorplans:tblFPUserSavedFloorplan[];
    

   
    @OneToMany(type=>tblHomeEstimate, tblHomeEstimate=>tblHomeEstimate.intHomeEstimateCommunity,{ onDelete: 'SET NULL' , })
    tblHomeEstimates:tblHomeEstimate[];
    

   
    @OneToMany(type=>tblMBFCommunityAccess, tblMBFCommunityAccess=>tblMBFCommunityAccess.intMbfCommunityAccessCommunity,{ onDelete: 'CASCADE' , })
    tblMbfCommunityAccesss:tblMBFCommunityAccess[];
    

   
    @OneToMany(type=>tblMoveInBrochure, tblMoveInBrochure=>tblMoveInBrochure.intMoveInBrochureModel,{ onDelete: 'CASCADE' , })
    tblMoveInBrochures:tblMoveInBrochure[];
    

   
    @OneToMany(type=>tblPlanBrochure, tblPlanBrochure=>tblPlanBrochure.intPlanBrochureModel,{ onDelete: 'CASCADE' , })
    tblPlanBrochures:tblPlanBrochure[];
    

   
    @OneToMany(type=>tblWMCommunity, tblWMCommunity=>tblWMCommunity.intWmCommunityCommunity,{ onDelete: 'CASCADE' , })
    tblWmCommunitys:tblWMCommunity[];
    
}
