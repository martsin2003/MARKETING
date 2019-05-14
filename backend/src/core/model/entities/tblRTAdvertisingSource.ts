import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTCampaignUTM} from "./tblRTCampaignUTM";
import {tblRTMediaSource} from "./tblRTMediaSource";


@Entity("tblRTAdvertisingSource",{schema:"public" } )
export class tblRTAdvertisingSource {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTAdvertisingSourceID"
        })
    intRTAdvertisingSourceID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTAdvertisingSourceName"
        })
    varRTAdvertisingSourceName:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTAdvertisingSourceCreatedDate"
        })
    dteRTAdvertisingSourceCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTAdvertisingSourceModifiedDate"
        })
    dteRTAdvertisingSourceModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTAdvertisingSourceArchivedFlg"
        })
    bRTAdvertisingSourceArchivedFlg:boolean;
        

   
    @OneToMany(type=>tblRTCampaignUTM, tblRTCampaignUTM=>tblRTCampaignUTM.intRtCampaignUtmrtAdvertisingSource,{ onDelete: 'CASCADE' , })
    tblRtCampaignUtms:tblRTCampaignUTM[];
    

   
    @OneToMany(type=>tblRTMediaSource, tblRTMediaSource=>tblRTMediaSource.intRtMediaSourceAdvertisingSource,{ onDelete: 'CASCADE' , })
    tblRtMediaSources:tblRTMediaSource[];
    
}
