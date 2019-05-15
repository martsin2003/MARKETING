import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTCampaignUTM} from "./tblRTCampaignUTM";


@Entity("tblRTAdvertisingMedium",{schema:"public" } )
@Index("idx_19517_IX_tblRTAdvertisingMedium",["bRTArchive","dteRTAdvertisingMediumCreatedDate","dteRTAdvertisingMediumModifiedDate","varRTAdvertisingMediumName","varRTAdvertisingMediumStatus",])
export class tblRTAdvertisingMedium {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTAdvertisingMediumID"
        })
    intRTAdvertisingMediumID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTAdvertisingMediumName"
        })
    varRTAdvertisingMediumName:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTAdvertisingMediumCreatedDate"
        })
    dteRTAdvertisingMediumCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTAdvertisingMediumModifiedDate"
        })
    dteRTAdvertisingMediumModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTArchive"
        })
    bRTArchive:boolean;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varRTAdvertisingMediumStatus"
        })
    varRTAdvertisingMediumStatus:string;
        

   
    @OneToMany(type=>tblRTCampaignUTM, tblRTCampaignUTM=>tblRTCampaignUTM.intRtCampaignUtmrtAdvertisingMedium,{ onDelete: 'CASCADE' , })
    tblRtCampaignUtms:tblRTCampaignUTM[];
    
}
