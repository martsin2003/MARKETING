import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTCampaign} from "./tblRTCampaign";
import {tblRTGAMetric} from "./tblRTGAMetric";


@Entity("tblRTGAData",{schema:"public" } )
@Index("idx_20091_IX_tblRTGAData",["dteRTGADataDate","intRTGADataID","intRtgaDataMetric","intRtgaDataRtCampaign","intRTGADataValue",],{unique:true})
@Index("idx_20091_IX2_tblRTGAData",["dteRTGADataDate",])
export class tblRTGAData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTGADataID"
        })
    intRTGADataID:string;
        

   
    @ManyToOne(type=>tblRTCampaign, tblRTCampaign=>tblRTCampaign.tblRtgaDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTGADataRTCampaignID'})
    intRtgaDataRtCampaign:tblRTCampaign | null;


   
    @ManyToOne(type=>tblRTGAMetric, tblRTGAMetric=>tblRTGAMetric.tblRtgaDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTGADataMetricID'})
    intRtgaDataMetric:tblRTGAMetric | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTGADataDate"
        })
    dteRTGADataDate:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTGADataValue"
        })
    intRTGADataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTGADataCreatedDate"
        })
    dteRTGADataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTGADataModifiedDate"
        })
    dteRTGADataModifiedDate:Date;
        
}
