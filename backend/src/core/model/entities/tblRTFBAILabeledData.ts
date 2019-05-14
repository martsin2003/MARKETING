import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTFBAIAd} from "./tblRTFBAIAd";
import {tblRTFBAIMetric} from "./tblRTFBAIMetric";


@Entity("tblRTFBAILabeledData",{schema:"public" } )
@Index("idx_20008_IX_tblRTFBAILabeledData",["dteRTFBAILabeledDataEndTime","intRtfbaiLabeledDataMetric","intRtfbaiLabeledDataRtfbaiAd","varRTFBAILabeledDataLabel",],{unique:true})
export class tblRTFBAILabeledData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTFBAILabeledDataID"
        })
    intRTFBAILabeledDataID:string;
        

   
    @ManyToOne(type=>tblRTFBAIAd, tblRTFBAIAd=>tblRTFBAIAd.tblRtfbaiLabeledDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTFBAILabeledDataRTFBAIAdID'})
    intRtfbaiLabeledDataRtfbaiAd:tblRTFBAIAd | null;


   
    @ManyToOne(type=>tblRTFBAIMetric, tblRTFBAIMetric=>tblRTFBAIMetric.tblRtfbaiLabeledDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTFBAILabeledDataMetricID'})
    intRtfbaiLabeledDataMetric:tblRTFBAIMetric | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAILabeledDataEndTime"
        })
    dteRTFBAILabeledDataEndTime:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTFBAILabeledDataValue"
        })
    intRTFBAILabeledDataValue:number;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTFBAILabeledDataLabel"
        })
    varRTFBAILabeledDataLabel:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTFBAILabeledDataOrder"
        })
    intRTFBAILabeledDataOrder:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAILabeledDataCreatedDate"
        })
    dteRTFBAILabeledDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTFBAILabeledDataModifiedDate"
        })
    dteRTFBAILabeledDataModifiedDate:Date;
        
}
