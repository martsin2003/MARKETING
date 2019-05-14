import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTFBAIAd} from "./tblRTFBAIAd";
import {tblRTFBAIMetric} from "./tblRTFBAIMetric";


@Entity("tblRTFBAIData",{schema:"public" } )
@Index("idx_20002_IX_tblRTFBAIData",["dteRTFBAIDataEndTime","intRtfbaiDataMetric","intRtfbaiDataRtfbaiAd",],{unique:true})
export class tblRTFBAIData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTFBAIDataID"
        })
    intRTFBAIDataID:string;
        

   
    @ManyToOne(type=>tblRTFBAIAd, tblRTFBAIAd=>tblRTFBAIAd.tblRtfbaiDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTFBAIDataRTFBAIAdID'})
    intRtfbaiDataRtfbaiAd:tblRTFBAIAd | null;


   
    @ManyToOne(type=>tblRTFBAIMetric, tblRTFBAIMetric=>tblRTFBAIMetric.tblRtfbaiDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTFBAIDataMetricID'})
    intRtfbaiDataMetric:tblRTFBAIMetric | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAIDataEndTime"
        })
    dteRTFBAIDataEndTime:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTFBAIDataValue"
        })
    intRTFBAIDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAIDataCreatedDate"
        })
    dteRTFBAIDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAIDataModifiedDate"
        })
    dteRTFBAIDataModifiedDate:Date;
        
}
