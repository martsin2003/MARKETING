import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPCommunityModelElevation} from "./tblFPCommunityModelElevation";
import {tblFPCommunityModelGroupGallery} from "./tblFPCommunityModelGroupGallery";
import {tblFPCommunityModelOptionGallery} from "./tblFPCommunityModelOptionGallery";


@Entity("tblModel",{schema:"public" } )
export class tblModel {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intModelID"
        })
    intModelID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"id"
        })
    id:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelCommunityID"
        })
    intModelCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelName"
        })
    varModelName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelHomeType"
        })
    varModelHomeType:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLABonusRoom"
        })
    bModelLABonusRoom:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelGarageSpacesMax"
        })
    intModelGarageSpacesMax:number | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'NA'",
        name:"varModelGarageEntry"
        })
    varModelGarageEntry:string | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'NA'",
        name:"varModelGarageDetached"
        })
    varModelGarageDetached:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelMarketingHeadline"
        })
    varModelMarketingHeadline:string | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'Active'",
        name:"varModelStatus"
        })
    varModelStatus:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelFloorplanPDF"
        })
    varModelFloorplanPDF:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"baths_high"
        })
    baths_high:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"baths_low"
        })
    baths_low:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "true",
        name:"bModelDisplayOnSite"
        })
    bModelDisplayOnSite:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelHasBasement"
        })
    bModelHasBasement:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLADiningRoom"
        })
    bModelLADiningRoom:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLAFamilyRoom"
        })
    bModelLAFamilyRoom:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLAGameRoom"
        })
    bModelLAGameRoom:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLAGuestRoom"
        })
    bModelLAGuestRoom:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLALivingRoom"
        })
    bModelLALivingRoom:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLALoft"
        })
    bModelLALoft:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLAMediaRoom"
        })
    bModelLAMediaRoom:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLAOffice"
        })
    bModelLAOffice:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLAStudy"
        })
    bModelLAStudy:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelLASunRoom"
        })
    bModelLASunRoom:boolean | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "'0'",
        name:"curModelPriceBase"
        })
    curModelPriceBase:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteModelCreatedDate"
        })
    dteModelCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteModelModifiedDate"
        })
    dteModelModifiedDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"elevation_a_filename"
        })
    elevation_a_filename:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"elevation_a_label"
        })
    elevation_a_label:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"elevation_b_filename"
        })
    elevation_b_filename:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"elevation_b_label"
        })
    elevation_b_label:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"elevation_c_filename"
        })
    elevation_c_filename:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"elevation_c_label"
        })
    elevation_c_label:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"floorplan_filename"
        })
    floorplan_filename:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelBathsFullMax"
        })
    intModelBathsFullMax:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelBathsFullMin"
        })
    intModelBathsFullMin:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelBathsHalfMax"
        })
    intModelBathsHalfMax:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelBathsHalfMin"
        })
    intModelBathsHalfMin:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelBedsMax"
        })
    intModelBedsMax:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelBedsMin"
        })
    intModelBedsMin:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelGarageSpacesMin"
        })
    intModelGarageSpacesMin:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelIDOld"
        })
    intModelIDOld:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInteractiveFloorPlanID"
        })
    intModelInteractiveFloorPlanID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelModelGenericID"
        })
    intModelModelGenericID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelSqFtMax"
        })
    intModelSqFtMax:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelSqFtMin"
        })
    intModelSqFtMin:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelStories"
        })
    intModelStories:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"seo_name"
        })
    seo_name:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"syndicate"
        })
    syndicate:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtModelMarketingDescription"
        })
    txtModelMarketingDescription:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtModelMarketingFeatures"
        })
    txtModelMarketingFeatures:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelFloorplanDisplay"
        })
    varModelFloorplanDisplay:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelMarketingVideoTourURL"
        })
    varModelMarketingVideoTourURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelMasterBedroomLocation"
        })
    varModelMasterBedroomLocation:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varLivingAreaList"
        })
    varLivingAreaList:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelFloorplanID"
        })
    intModelFloorplanID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelPlanCode"
        })
    varModelPlanCode:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelElevationThumbnail"
        })
    intModelElevationThumbnail:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bModelUseInteractiveFloorplan"
        })
    bModelUseInteractiveFloorplan:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelMarketingMatterportTourURL"
        })
    varModelMarketingMatterportTourURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelMyVisionDesignMyHomeURL"
        })
    varModelMyVisionDesignMyHomeURL:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bModelMyEnergyFlg"
        })
    bModelMyEnergyFlg:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bModelMLOSFlg"
        })
    bModelMLOSFlg:boolean;
        

   
    @OneToMany(type=>tblFPCommunityModelElevation, tblFPCommunityModelElevation=>tblFPCommunityModelElevation.intFpCommunityModelElevationModel,{ onDelete: 'CASCADE' , })
    tblFpCommunityModelElevations:tblFPCommunityModelElevation[];
    

   
    @OneToMany(type=>tblFPCommunityModelGroupGallery, tblFPCommunityModelGroupGallery=>tblFPCommunityModelGroupGallery.intFpCommunityModelGroupGalleryModel)
    tblFpCommunityModelGroupGallerys:tblFPCommunityModelGroupGallery[];
    

   
    @OneToMany(type=>tblFPCommunityModelOptionGallery, tblFPCommunityModelOptionGallery=>tblFPCommunityModelOptionGallery.intFpCommunityModelOptionGalleryModel)
    tblFpCommunityModelOptionGallerys:tblFPCommunityModelOptionGallery[];
    
}
