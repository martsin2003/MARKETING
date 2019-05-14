import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblWMSection} from "./tblWMSection";
import {tblWMBuilder} from "./tblWMBuilder";
import {tblMoveInNowWMLot} from "./tblMoveInNowWMLot";


@Entity("tblWMLot",{schema:"public" } )
@Index("idx_20848_IX_tblWMLot_GiftedTo",["dteWMLotSoldDate","intWmLotGiftedToWmBuilder","intWmLotWmSection","varWMLotConstructionStatus","varWMLotIdentifier","varWMLotSalesStatus","varWMLotStatus",],{unique:true})
@Index("idx_20848_IX_tblWMLot_OwnedBy",["dteWMLotSoldDate","intWmLotOwnedByWmBuilder","intWmLotWmSection","varWMLotConstructionStatus","varWMLotIdentifier","varWMLotSalesStatus","varWMLotStatus",],{unique:true})
@Index("idx_20848_IX_tblWMLot_SoldTo",["dteWMLotSoldDate","intWmLotSoldToWmBuilder","intWmLotWmSection","varWMLotConstructionStatus","varWMLotIdentifier","varWMLotSalesStatus","varWMLotStatus",],{unique:true})
@Index("idx_20848_IX_tblWMLot_SoldBy",["dteWMLotSoldDate","intWmLotSoldByWmBuilder","intWmLotWmSection","varWMLotConstructionStatus","varWMLotIdentifier","varWMLotSalesStatus","varWMLotStatus",],{unique:true})
@Index("idx_20848_IX_tblWMLot",["intWmLotWmSection","varWMLotConstructionStatus","varWMLotIdentifier","varWMLotSalesStatus","varWMLotStatus",],{unique:true})
export class tblWMLot {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intWMLotID"
        })
    intWMLotID:string;
        

   
    @ManyToOne(type=>tblWMSection, tblWMSection=>tblWMSection.tblWmLots,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intWMLotWMSectionID'})
    intWmLotWmSection:tblWMSection | null;


    @Column("text",{ 
        nullable:false,
        name:"varWMLotIdentifier"
        })
    varWMLotIdentifier:string;
        

   
    @ManyToOne(type=>tblWMBuilder, tblWMBuilder=>tblWMBuilder.tblWmLots2,{  })
    @JoinColumn({ name:'intWMLotOwnedByWMBuilderID'})
    intWmLotOwnedByWmBuilder:tblWMBuilder | null;


   
    @ManyToOne(type=>tblWMBuilder, tblWMBuilder=>tblWMBuilder.tblWmLots4,{  })
    @JoinColumn({ name:'intWMLotSoldToWMBuilderID'})
    intWmLotSoldToWmBuilder:tblWMBuilder | null;


   
    @ManyToOne(type=>tblWMBuilder, tblWMBuilder=>tblWMBuilder.tblWmLots,{  })
    @JoinColumn({ name:'intWMLotGiftedToWMBuilderID'})
    intWmLotGiftedToWmBuilder:tblWMBuilder | null;


    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotEstDeliveryDate"
        })
    dteWMLotEstDeliveryDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotEstDeliveryDatePlanning"
        })
    dteWMLotEstDeliveryDatePlanning:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMLotBuyerLastNames"
        })
    varWMLotBuyerLastNames:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMLotAddress"
        })
    varWMLotAddress:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotSoldDate"
        })
    dteWMLotSoldDate:Date | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'available'",
        name:"varWMLotSalesStatus"
        })
    varWMLotSalesStatus:string;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curWMLotSalesPrice"
        })
    curWMLotSalesPrice:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'pre-construction'",
        name:"varWMLotConstructionStatus"
        })
    varWMLotConstructionStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotFoundationStartDate"
        })
    dteWMLotFoundationStartDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotFoundationReleaseDate"
        })
    dteWMLotFoundationReleaseDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotFrameStartDate"
        })
    dteWMLotFrameStartDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotFrameReleaseDate"
        })
    dteWMLotFrameReleaseDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotFrameCompleteDate"
        })
    dteWMLotFrameCompleteDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotDrywallCompleteDate"
        })
    dteWMLotDrywallCompleteDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotFinalDate"
        })
    dteWMLotFinalDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMLotMortgageLender"
        })
    varWMLotMortgageLender:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotLoanApplicationDate"
        })
    dteWMLotLoanApplicationDate:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intWMLotSettlementYear"
        })
    intWMLotSettlementYear:number | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varWMLotStatus"
        })
    varWMLotStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMLotCreatedDate"
        })
    dteWMLotCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMLotModifiedDate"
        })
    dteWMLotModifiedDate:Date;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMLotModel"
        })
    varWMLotModel:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intWMLotSalesStatus"
        })
    intWMLotSalesStatus:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intWMLotConstructionStatus"
        })
    intWMLotConstructionStatus:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMLotConstructionStatusModifiedDate"
        })
    dteWMLotConstructionStatusModifiedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMLotSalesStatusModifiedDate"
        })
    dteWMLotSalesStatusModifiedDate:Date;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMLotPolygonJSON"
        })
    varWMLotPolygonJSON:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMLotCenterCoordinates"
        })
    varWMLotCenterCoordinates:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMLotMonthMarkerCoordinates"
        })
    varWMLotMonthMarkerCoordinates:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMLotSalesStatusMarkerCoordinates"
        })
    varWMLotSalesStatusMarkerCoordinates:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotOwnedByModifiedDate"
        })
    dteWMLotOwnedByModifiedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotSoldToModifiedDate"
        })
    dteWMLotSoldToModifiedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotGiftedToModifiedDate"
        })
    dteWMLotGiftedToModifiedDate:Date | null;
        

   
    @ManyToOne(type=>tblWMBuilder, tblWMBuilder=>tblWMBuilder.tblWmLots3,{  })
    @JoinColumn({ name:'intWMLotSoldByWMBuilderID'})
    intWmLotSoldByWmBuilder:tblWMBuilder | null;


    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteWMLotSoldByModifiedDate"
        })
    dteWMLotSoldByModifiedDate:Date | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bWMLotDoNotSellFlg"
        })
    bWMLotDoNotSellFlg:boolean;
        

    @Column("integer",{ 
        nullable:true,
        name:"intWMLotSettlementMonth"
        })
    intWMLotSettlementMonth:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMLotHidePolygonJSON"
        })
    varWMLotHidePolygonJSON:string | null;
        

   
    @OneToMany(type=>tblMoveInNowWMLot, tblMoveInNowWMLot=>tblMoveInNowWMLot.intMoveInNowWmLotWmLot,{ onDelete: 'CASCADE' , })
    tblMoveInNowWmLots:tblMoveInNowWMLot[];
    
}
