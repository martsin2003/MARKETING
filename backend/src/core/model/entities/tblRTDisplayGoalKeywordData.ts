import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTDisplayKeyword} from "./tblRTDisplayKeyword";
import {tblRTDisplayGoal} from "./tblRTDisplayGoal";


@Entity("tblRTDisplayGoalKeywordData",{schema:"public" } )
@Index("idx_19805_IX_tblRTDisplayGoalKeywordData",["dteRTDisplayGoalKeywordDataDate","intRTDisplayGoalKeywordDataID","intRtDisplayGoalKeywordDataRtDisplayGoal","intRtDisplayGoalKeywordDataRtDisplayKeyword",],{unique:true})
export class tblRTDisplayGoalKeywordData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTDisplayGoalKeywordDataID"
        })
    intRTDisplayGoalKeywordDataID:string;
        

   
    @ManyToOne(type=>tblRTDisplayKeyword, tblRTDisplayKeyword=>tblRTDisplayKeyword.tblRtDisplayGoalKeywordDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTDisplayGoalKeywordDataRTDisplayKeywordID'})
    intRtDisplayGoalKeywordDataRtDisplayKeyword:tblRTDisplayKeyword | null;


   
    @ManyToOne(type=>tblRTDisplayGoal, tblRTDisplayGoal=>tblRTDisplayGoal.tblRtDisplayGoalKeywordDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTDisplayGoalKeywordDataRTDisplayGoalID'})
    intRtDisplayGoalKeywordDataRtDisplayGoal:tblRTDisplayGoal | null;


    @Column("integer",{ 
        nullable:false,
        name:"intRTDisplayGoalKeywordDataValue"
        })
    intRTDisplayGoalKeywordDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayGoalKeywordDataDate"
        })
    dteRTDisplayGoalKeywordDataDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayGoalKeywordDataCreatedDate"
        })
    dteRTDisplayGoalKeywordDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayGoalKeywordDataModifiedDate"
        })
    dteRTDisplayGoalKeywordDataModifiedDate:Date;
        
}
