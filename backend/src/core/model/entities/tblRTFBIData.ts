import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTCampaign} from "./tblRTCampaign";
import {tblRTFBIMetric} from "./tblRTFBIMetric";


@Entity("tblRTFBIData",{schema:"public" } )
@Index("idx_20029_IX_tblRTFBIData",["dteRTFBIDataCreatedDate","dteRTFBIDataEndTime","dteRTFBIDataModifiedDate","intRTFBIDataID","intRtfbiDataMetric","intRtfbiDataRtCampaign","intRTFBIDataValue",],{unique:true})
@Index("idx_20029_IX3_tblRTFBIData",["dteRTFBIDataEndTime","intRtfbiDataMetric",])
@Index("idx_20029_IX4_tblRTFBIData",["dteRTFBIDataEndTime","intRtfbiDataMetric","intRTFBIDataValue",])
@Index("idx_20029_IX2_tblRTFBIData",["dteRTFBIDataEndTime","intRtfbiDataMetric",])
export class tblRTFBIData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTFBIDataID"
        })
    intRTFBIDataID:string;
        

   
    @ManyToOne(type=>tblRTCampaign, tblRTCampaign=>tblRTCampaign.tblRtfbiDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTFBIDataRTCampaignID'})
    intRtfbiDataRtCampaign:tblRTCampaign | null;


   
    @ManyToOne(type=>tblRTFBIMetric, tblRTFBIMetric=>tblRTFBIMetric.tblRtfbiDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTFBIDataMetricID'})
    intRtfbiDataMetric:tblRTFBIMetric | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBIDataEndTime"
        })
    dteRTFBIDataEndTime:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTFBIDataValue"
        })
    intRTFBIDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBIDataCreatedDate"
        })
    dteRTFBIDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBIDataModifiedDate"
        })
    dteRTFBIDataModifiedDate:Date;
        
}
