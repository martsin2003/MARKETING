import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblModelInvest",{schema:"public" } )
export class tblModelInvest {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intModelInvestID"
        })
    intModelInvestID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestCommunityID"
        })
    intModelInvestCommunityID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestModelID"
        })
    intModelInvestModelID:number | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'0'",
        name:"varModelInvestElevation"
        })
    varModelInvestElevation:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHomesite"
        })
    varModelInvestHomesite:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHomesiteAddress"
        })
    varModelInvestHomesiteAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHomesiteCity"
        })
    varModelInvestHomesiteCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHomesiteState"
        })
    varModelInvestHomesiteState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHomesiteZip"
        })
    varModelInvestHomesiteZip:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestSquareFootage"
        })
    intModelInvestSquareFootage:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestSeries"
        })
    intModelInvestSeries:number | null;
        

    @Column("real",{ 
        nullable:true,
        default: () => "'0'",
        precision:24,
        name:"sngModelInvestBedroomNumberOf"
        })
    sngModelInvestBedroomNumberOf:number | null;
        

    @Column("real",{ 
        nullable:true,
        default: () => "'0'",
        precision:24,
        name:"sngModelInvestBathroomNumberOf"
        })
    sngModelInvestBathroomNumberOf:number | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "'0'",
        name:"curModelInvestPrice"
        })
    curModelInvestPrice:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestAvailability"
        })
    varModelInvestAvailability:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestSalesHours"
        })
    varModelInvestSalesHours:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestVirtualTour"
        })
    varModelInvestVirtualTour:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtModelInvestFeatures"
        })
    txtModelInvestFeatures:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtModelInvestIncentives"
        })
    txtModelInvestIncentives:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtModelInvestDisclaimers"
        })
    txtModelInvestDisclaimers:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bModelInvestSold"
        })
    bModelInvestSold:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bModelInvestLive"
        })
    bModelInvestLive:boolean;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelInvestUseFlyer"
        })
    bModelInvestUseFlyer:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelInvestHasFlyer"
        })
    bModelInvestHasFlyer:boolean | null;
        

    @Column("numeric",{ 
        nullable:true,
        name:"curModelInvestBasePrice"
        })
    curModelInvestBasePrice:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestElevationPDFFlyer"
        })
    varModelInvestElevationPDFFlyer:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestElevationImageList"
        })
    varModelInvestElevationImageList:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestElevationImageDetail"
        })
    varModelInvestElevationImageDetail:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestSalesRepID"
        })
    intModelInvestSalesRepID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestSalesRepEmail"
        })
    varModelInvestSalesRepEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestSalesRepPhone"
        })
    varModelInvestSalesRepPhone:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestSalesRep2ID"
        })
    intModelInvestSalesRep2ID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestSalesRep2Email"
        })
    varModelInvestSalesRep2Email:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestSalesRep2Phone"
        })
    varModelInvestSalesRep2Phone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestFloor1"
        })
    varModelInvestFloor1:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestFloor2"
        })
    varModelInvestFloor2:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intScale1stFloor"
        })
    intScale1stFloor:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intScale2ndFloor"
        })
    intScale2ndFloor:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelInvestHasOffer"
        })
    bModelInvestHasOffer:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestBathroomFullNumberOf"
        })
    intModelInvestBathroomFullNumberOf:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestBathroomHalfNumberOf"
        })
    intModelInvestBathroomHalfNumberOf:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestGarageNumberOfCars"
        })
    intModelInvestGarageNumberOfCars:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestStoriesNumberOf"
        })
    intModelInvestStoriesNumberOf:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bModelInvestOfferProgram"
        })
    bModelInvestOfferProgram:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestNumParkingSpaces"
        })
    intModelInvestNumParkingSpaces:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestFoundationType"
        })
    varModelInvestFoundationType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestRoofType"
        })
    varModelInvestRoofType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestArchitectureStyle"
        })
    varModelInvestArchitectureStyle:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestExteriorType"
        })
    varModelInvestExteriorType:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestRoomCount"
        })
    intModelInvestRoomCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestYearUpdated"
        })
    intModelInvestYearUpdated:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestBuildingUnitCount"
        })
    intModelInvestBuildingUnitCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestNumFloors"
        })
    intModelInvestNumFloors:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasAttic"
        })
    varModelInvestHasAttic:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasBarbequeArea"
        })
    varModelInvestHasBarbequeArea:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasBasement"
        })
    varModelInvestHasBasement:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestIsCableReady"
        })
    varModelInvestIsCableReady:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasCeilingFan"
        })
    varModelInvestHasCeilingFan:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasDeck"
        })
    varModelInvestHasDeck:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasDisabledAccess"
        })
    varModelInvestHasDisabledAccess:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasDock"
        })
    varModelInvestHasDock:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasDoorman"
        })
    varModelInvestHasDoorman:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasDoublepaneWindows"
        })
    varModelInvestHasDoublepaneWindows:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasElevator"
        })
    varModelInvestHasElevator:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasFireplace"
        })
    varModelInvestHasFireplace:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasGarden"
        })
    varModelInvestHasGarden:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasGatedEntry"
        })
    varModelInvestHasGatedEntry:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasGreenhouse"
        })
    varModelInvestHasGreenhouse:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasHotTubSpa"
        })
    varModelInvestHasHotTubSpa:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasIntercom"
        })
    varModelInvestHasIntercom:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasJettedBathTub"
        })
    varModelInvestHasJettedBathTub:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasLawn"
        })
    varModelInvestHasLawn:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasMotherInLaw"
        })
    varModelInvestHasMotherInLaw:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestIsNewConstruction"
        })
    varModelInvestIsNewConstruction:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasPatio"
        })
    varModelInvestHasPatio:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasPond"
        })
    varModelInvestHasPond:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasPool"
        })
    varModelInvestHasPool:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasPorch"
        })
    varModelInvestHasPorch:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasRVParking"
        })
    varModelInvestHasRVParking:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasSauna"
        })
    varModelInvestHasSauna:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasSecuritySystem"
        })
    varModelInvestHasSecuritySystem:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasSkylight"
        })
    varModelInvestHasSkylight:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasSportscourt"
        })
    varModelInvestHasSportscourt:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasSprinklerSystem"
        })
    varModelInvestHasSprinklerSystem:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasVaultedCeiling"
        })
    varModelInvestHasVaultedCeiling:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestIsWaterfront"
        })
    varModelInvestIsWaterfront:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHasWetBar"
        })
    varModelInvestHasWetBar:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestHeatingFuel"
        })
    varModelInvestHeatingFuel:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMasterBedLocation"
        })
    varMasterBedLocation:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varLivingAreaList"
        })
    varLivingAreaList:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bBasement"
        })
    bBasement:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSpecAmenityList"
        })
    varSpecAmenityList:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varMarketingHeadline"
        })
    varMarketingHeadline:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSpecDescription"
        })
    varSpecDescription:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteModelInvestMoveInYearMonth"
        })
    dteModelInvestMoveInYearMonth:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelInvestMLS"
        })
    varModelInvestMLS:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"fltModelInvestLatitude"
        })
    fltModelInvestLatitude:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"fltModelInvestLongitude"
        })
    fltModelInvestLongitude:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtModelInvestDescription"
        })
    txtModelInvestDescription:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelInvestFloorplanElevationID"
        })
    intModelInvestFloorplanElevationID:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bModelInvestArchived"
        })
    bModelInvestArchived:boolean;
        
}
