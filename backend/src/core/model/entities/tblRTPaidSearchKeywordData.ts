import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTPaidSearchKeyword} from "./tblRTPaidSearchKeyword";
import {tblRTPaidSearchMetric} from "./tblRTPaidSearchMetric";


@Entity("tblRTPaidSearchKeywordData",{schema:"public" } )
@Index("idx_20376_IX_tblRTPaidSearchKeywordData",["dteRTPaidSearchKeywordDataCreatedDate","dteRTPaidSearchKeywordDataEndTime","intRTPaidSearchKeywordDataID","intRtPaidSearchKeywordDataRtPaidSearchKeyword","intRtPaidSearchKeywordDataRtPaidSearchMetric",])
@Index("idx_20376_IX2_tblRTPaidSearchKeywordData",["dteRTPaidSearchKeywordDataEndTime","intRTPaidSearchKeywordDataID","intRtPaidSearchKeywordDataRtPaidSearchKeyword","intRtPaidSearchKeywordDataRtPaidSearchMetric","intRTPaidSearchKeywordDataValue",])
export class tblRTPaidSearchKeywordData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTPaidSearchKeywordDataID"
        })
    intRTPaidSearchKeywordDataID:string;
        

   
    @ManyToOne(type=>tblRTPaidSearchKeyword, tblRTPaidSearchKeyword=>tblRTPaidSearchKeyword.tblRtPaidSearchKeywordDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchKeywordDataRTPaidSearchKeywordID'})
    intRtPaidSearchKeywordDataRtPaidSearchKeyword:tblRTPaidSearchKeyword | null;


   
    @ManyToOne(type=>tblRTPaidSearchMetric, tblRTPaidSearchMetric=>tblRTPaidSearchMetric.tblRtPaidSearchKeywordDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTPaidSearchKeywordDataRTPaidSearchMetricID'})
    intRtPaidSearchKeywordDataRtPaidSearchMetric:tblRTPaidSearchMetric | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchKeywordDataEndTime"
        })
    dteRTPaidSearchKeywordDataEndTime:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTPaidSearchKeywordDataValue"
        })
    intRTPaidSearchKeywordDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchKeywordDataCreatedDate"
        })
    dteRTPaidSearchKeywordDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTPaidSearchKeywordDataModifiedDate"
        })
    dteRTPaidSearchKeywordDataModifiedDate:Date;
        
}
