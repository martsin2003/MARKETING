import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTConfigSite} from "./tblRTConfigSite";
import {tblRTCampaign} from "./tblRTCampaign";


@Entity("tblRTConfigSiteCampaign",{schema:"public" } )
@Index("idx_19670_IX_RTConfigSiteCampaignRTCampaignID",["intRtConfigSiteCampaignRtCampaign",])
@Index("idx_19670_IX2_tblRTConfigSiteCampaign",["intRtConfigSiteCampaignRtCampaign","intRtConfigSiteCampaignRtConfigSite",])
export class tblRTConfigSiteCampaign {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTConfigSiteCampaignID"
        })
    intRTConfigSiteCampaignID:string;
        

   
    @ManyToOne(type=>tblRTConfigSite, tblRTConfigSite=>tblRTConfigSite.tblRtConfigSiteCampaigns,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTConfigSiteCampaignRTConfigSiteID'})
    intRtConfigSiteCampaignRtConfigSite:tblRTConfigSite | null;


   
    @ManyToOne(type=>tblRTCampaign, tblRTCampaign=>tblRTCampaign.tblRtConfigSiteCampaigns,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTConfigSiteCampaignRTCampaignID'})
    intRtConfigSiteCampaignRtCampaign:tblRTCampaign | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTConfigSiteCampaignCreatedDate"
        })
    dteRTConfigSiteCampaignCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTConfigSiteCampaignModifiedDate"
        })
    dteRTConfigSiteCampaignModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTConfigSiteCampaignConfiguredFlg"
        })
    bRTConfigSiteCampaignConfiguredFlg:boolean;
        
}
