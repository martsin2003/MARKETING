import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTPaidSearchAd} from "./tblRTPaidSearchAd";
import {tblRTPaidSearchGoal} from "./tblRTPaidSearchGoal";


@Entity("tblRTPaidSearchGoalAdData",{schema:"public" } )
@Index("idx_20340_IX2_tblRTPaidSearchGoalAdData",["dteRTPaidSearchGoalAdDataDate","intRtPaidSearchGoalAdDataRtPaidSearchAd","intRtPaidSearchGoalAdDataRtPaidSearchGoal","intRTPaidSearchGoalAdDataValue",])
@Index("idx_20340_IX_tblRTPaidSearchGoalAdData",["dteRTPaidSearchGoalAdDataDate","intRTPaidSearchGoalAdDataID","intRtPaidSearchGoalAdDataRtPaidSearchAd","intRtPaidSearchGoalAdDataRtPaidSearchGoal",])
export class tblRTPaidSearchGoalAdData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTPaidSearchGoalAdDataID"
        })
    intRTPaidSearchGoalAdDataID:string;
        

   
    @ManyToOne(type=>tblRTPaidSearchAd, tblRTPaidSearchAd=>tblRTPaidSearchAd.tblRtPaidSearchGoalAdDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchGoalAdDataRTPaidSearchAdID'})
    intRtPaidSearchGoalAdDataRtPaidSearchAd:tblRTPaidSearchAd | null;


   
    @ManyToOne(type=>tblRTPaidSearchGoal, tblRTPaidSearchGoal=>tblRTPaidSearchGoal.tblRtPaidSearchGoalAdDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchGoalAdDataRTPaidSearchGoalID'})
    intRtPaidSearchGoalAdDataRtPaidSearchGoal:tblRTPaidSearchGoal | null;


    @Column("integer",{ 
        nullable:false,
        name:"intRTPaidSearchGoalAdDataValue"
        })
    intRTPaidSearchGoalAdDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchGoalAdDataDate"
        })
    dteRTPaidSearchGoalAdDataDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchGoalAdDataCreatedDate"
        })
    dteRTPaidSearchGoalAdDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchGoalAdDataModifiedDate"
        })
    dteRTPaidSearchGoalAdDataModifiedDate:Date;
        
}
