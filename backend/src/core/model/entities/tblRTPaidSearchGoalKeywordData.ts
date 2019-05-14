import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTPaidSearchKeyword} from "./tblRTPaidSearchKeyword";
import {tblRTPaidSearchGoal} from "./tblRTPaidSearchGoal";


@Entity("tblRTPaidSearchGoalKeywordData",{schema:"public" } )
@Index("idx_20352_IX_tblRTPaidSearchGoalKeywordData",["dteRTPaidSearchGoalKeywordDataDate","intRTPaidSearchGoalKeywordDataID","intRtPaidSearchGoalKeywordDataRtPaidSearchGoal","intRtPaidSearchGoalKeywordDataRtPaidSearchKeyword",])
export class tblRTPaidSearchGoalKeywordData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTPaidSearchGoalKeywordDataID"
        })
    intRTPaidSearchGoalKeywordDataID:string;
        

   
    @ManyToOne(type=>tblRTPaidSearchKeyword, tblRTPaidSearchKeyword=>tblRTPaidSearchKeyword.tblRtPaidSearchGoalKeywordDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchGoalKeywordDataRTPaidSearchKeywordID'})
    intRtPaidSearchGoalKeywordDataRtPaidSearchKeyword:tblRTPaidSearchKeyword | null;


   
    @ManyToOne(type=>tblRTPaidSearchGoal, tblRTPaidSearchGoal=>tblRTPaidSearchGoal.tblRtPaidSearchGoalKeywordDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchGoalKeywordDataRTPaidSearchGoalID'})
    intRtPaidSearchGoalKeywordDataRtPaidSearchGoal:tblRTPaidSearchGoal | null;


    @Column("integer",{ 
        nullable:false,
        name:"intRTPaidSearchGoalKeywordDataValue"
        })
    intRTPaidSearchGoalKeywordDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchGoalKeywordDataDate"
        })
    dteRTPaidSearchGoalKeywordDataDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchGoalKeywordDataCreatedDate"
        })
    dteRTPaidSearchGoalKeywordDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchGoalKeywordDataModifiedDate"
        })
    dteRTPaidSearchGoalKeywordDataModifiedDate:Date;
        
}
