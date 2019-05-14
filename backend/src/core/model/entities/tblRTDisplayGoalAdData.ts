import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTDisplayAd} from "./tblRTDisplayAd";
import {tblRTDisplayGoal} from "./tblRTDisplayGoal";


@Entity("tblRTDisplayGoalAdData",{schema:"public" } )
@Index("idx_19799_IX2_tblRTDisplayGoalAdData",["dteRTDisplayGoalAdDataDate","intRtDisplayGoalAdDataRtDisplayAd","intRtDisplayGoalAdDataRtDisplayGoal","intRTDisplayGoalAdDataValue",])
@Index("idx_19799_IX_tblRTDisplayGoalAdData",["dteRTDisplayGoalAdDataDate","intRTDisplayGoalAdDataID","intRtDisplayGoalAdDataRtDisplayAd","intRtDisplayGoalAdDataRtDisplayGoal",],{unique:true})
export class tblRTDisplayGoalAdData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTDisplayGoalAdDataID"
        })
    intRTDisplayGoalAdDataID:string;
        

   
    @ManyToOne(type=>tblRTDisplayAd, tblRTDisplayAd=>tblRTDisplayAd.tblRtDisplayGoalAdDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTDisplayGoalAdDataRTDisplayAdID'})
    intRtDisplayGoalAdDataRtDisplayAd:tblRTDisplayAd | null;


   
    @ManyToOne(type=>tblRTDisplayGoal, tblRTDisplayGoal=>tblRTDisplayGoal.tblRtDisplayGoalAdDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTDisplayGoalAdDataRTDisplayGoalID'})
    intRtDisplayGoalAdDataRtDisplayGoal:tblRTDisplayGoal | null;


    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayGoalAdDataValue"
        })
    intRTDisplayGoalAdDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayGoalAdDataDate"
        })
    dteRTDisplayGoalAdDataDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayGoalAdDataCreatedDate"
        })
    dteRTDisplayGoalAdDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayGoalAdDataModifiedDate"
        })
    dteRTDisplayGoalAdDataModifiedDate:Date;
        
}
