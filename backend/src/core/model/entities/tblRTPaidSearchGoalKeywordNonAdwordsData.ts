import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTPaidSearchKeyword} from "./tblRTPaidSearchKeyword";
import {tblRTGAGoal} from "./tblRTGAGoal";


@Entity("tblRTPaidSearchGoalKeywordNonAdwordsData",{schema:"public" } )
@Index("idx_20358_IX2_tblRTPaidSearchGoalKeywordNonAdwordsData",["dteRTPaidSearchGoalKeywordNonAdwordsDataDate","intRTPaidSearchGoalKeywordNonAdwordsDataValue",])
@Index("idx_20358_IX_tblRTPaidSearchGoalKeywordNonAdwordsData",["dteRTPaidSearchGoalKeywordNonAdwordsDataDate","intRtPaidSearchGoalKeywordNonAdwordsDataRtgaGoal","intRtPaidSearchGoalKeywordNonAdwordsDataRtPaidSearchKeyword","intRTPaidSearchGoalKeywordNonAdwordsDataValue",],{unique:true})
export class tblRTPaidSearchGoalKeywordNonAdwordsData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTPaidSearchGoalKeywordNonAdwordsDataID"
        })
    intRTPaidSearchGoalKeywordNonAdwordsDataID:string;
        

   
    @ManyToOne(type=>tblRTPaidSearchKeyword, tblRTPaidSearchKeyword=>tblRTPaidSearchKeyword.tblRtPaidSearchGoalKeywordNonAdwordsDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchGoalKeywordNonAdwordsDataRTPaidSearchKeywordID'})
    intRtPaidSearchGoalKeywordNonAdwordsDataRtPaidSearchKeyword:tblRTPaidSearchKeyword | null;


   
    @ManyToOne(type=>tblRTGAGoal, tblRTGAGoal=>tblRTGAGoal.tblRtPaidSearchGoalKeywordNonAdwordsDatas,{  nullable:false, })
    @JoinColumn({ name:'intRTPaidSearchGoalKeywordNonAdwordsDataRTGAGoalID'})
    intRtPaidSearchGoalKeywordNonAdwordsDataRtgaGoal:tblRTGAGoal | null;


    @Column("integer",{ 
        nullable:false,
        name:"intRTPaidSearchGoalKeywordNonAdwordsDataValue"
        })
    intRTPaidSearchGoalKeywordNonAdwordsDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchGoalKeywordNonAdwordsDataDate"
        })
    dteRTPaidSearchGoalKeywordNonAdwordsDataDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchGoalKeywordNonAdwordsDataCreatedDate"
        })
    dteRTPaidSearchGoalKeywordNonAdwordsDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchGoalKeywordNonAdwordsDataModifiedDate"
        })
    dteRTPaidSearchGoalKeywordNonAdwordsDataModifiedDate:Date;
        
}
