import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTEmailMarketingItem} from "./tblRTEmailMarketingItem";
import {tblRTGAGoal} from "./tblRTGAGoal";


@Entity("tblRTEmailMarketingItemGAGoalData",{schema:"public" } )
@Index("idx_19930_IX_tblRTEmailMarketingItemGAGoalData",["intRTEmailMarketingItemGAGoalDataID","intRtEmailMarketingItemGaGoalDataRtEmailMarketingItem","intRtEmailMarketingItemGaGoalDataRtgaGoal","intRTEmailMarketingItemGAGoalDataValue",],{unique:true})
export class tblRTEmailMarketingItemGAGoalData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTEmailMarketingItemGAGoalDataID"
        })
    intRTEmailMarketingItemGAGoalDataID:string;
        

   
    @ManyToOne(type=>tblRTEmailMarketingItem, tblRTEmailMarketingItem=>tblRTEmailMarketingItem.tblRtEmailMarketingItemGaGoalDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTEmailMarketingItemGAGoalDataRTEmailMarketingItemID'})
    intRtEmailMarketingItemGaGoalDataRtEmailMarketingItem:tblRTEmailMarketingItem | null;


   
    @ManyToOne(type=>tblRTGAGoal, tblRTGAGoal=>tblRTGAGoal.tblRtEmailMarketingItemGaGoalDatas,{  nullable:false, })
    @JoinColumn({ name:'intRTEmailMarketingItemGAGoalDataRTGAGoalID'})
    intRtEmailMarketingItemGaGoalDataRtgaGoal:tblRTGAGoal | null;


    @Column("integer",{ 
        nullable:false,
        name:"intRTEmailMarketingItemGAGoalDataValue"
        })
    intRTEmailMarketingItemGAGoalDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEmailMarketingItemGAGoalDataCreatedDate"
        })
    dteRTEmailMarketingItemGAGoalDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEmailMarketingItemGAGoalDataModifiedDate"
        })
    dteRTEmailMarketingItemGAGoalDataModifiedDate:Date;
        
}
