import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTConfigSiteCampaign} from "./tblRTConfigSiteCampaign";
import {tblRTDisplayGoal} from "./tblRTDisplayGoal";
import {tblRTEmailMarketingItem} from "./tblRTEmailMarketingItem";
import {tblRTPaidSearchBudget} from "./tblRTPaidSearchBudget";
import {tblRTPaidSearchGoal} from "./tblRTPaidSearchGoal";


@Entity("tblRTConfigSite",{schema:"public" } )
export class tblRTConfigSite {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTConfigSiteID"
        })
    intRTConfigSiteID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTConfigSiteRTConfigID"
        })
    intRTConfigSiteRTConfigID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTConfigSiteRTClientSiteID"
        })
    intRTConfigSiteRTClientSiteID:number;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTConfigSiteRealResultsFlg"
        })
    bRTConfigSiteRealResultsFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTConfigSiteCreatedDate"
        })
    dteRTConfigSiteCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTConfigSiteModifiedDate"
        })
    dteRTConfigSiteModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTConfigSiteEmailMarketingFlg"
        })
    bRTConfigSiteEmailMarketingFlg:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTConfigSiteDisplayName"
        })
    varRTConfigSiteDisplayName:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTConfigSiteFacebookAdvertisingFlg"
        })
    bRTConfigSiteFacebookAdvertisingFlg:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTConfigSitePaidSearchFlg"
        })
    bRTConfigSitePaidSearchFlg:boolean;
        

   
    @OneToMany(type=>tblRTConfigSiteCampaign, tblRTConfigSiteCampaign=>tblRTConfigSiteCampaign.intRtConfigSiteCampaignRtConfigSite,{ onDelete: 'CASCADE' , })
    tblRtConfigSiteCampaigns:tblRTConfigSiteCampaign[];
    

   
    @OneToMany(type=>tblRTDisplayGoal, tblRTDisplayGoal=>tblRTDisplayGoal.intRtDisplayGoalRtConfigSite,{ onDelete: 'CASCADE' , })
    tblRtDisplayGoals:tblRTDisplayGoal[];
    

   
    @OneToMany(type=>tblRTEmailMarketingItem, tblRTEmailMarketingItem=>tblRTEmailMarketingItem.intRtEmailMarketingItemRtConfigSite,{ onDelete: 'CASCADE' , })
    tblRtEmailMarketingItems:tblRTEmailMarketingItem[];
    

   
    @OneToMany(type=>tblRTPaidSearchBudget, tblRTPaidSearchBudget=>tblRTPaidSearchBudget.intRtPaidSearchBudgetRtConfigSite,{ onDelete: 'CASCADE' , })
    tblRtPaidSearchBudgets:tblRTPaidSearchBudget[];
    

   
    @OneToMany(type=>tblRTPaidSearchGoal, tblRTPaidSearchGoal=>tblRTPaidSearchGoal.intRtPaidSearchGoalRtConfigSite,{ onDelete: 'CASCADE' , })
    tblRtPaidSearchGoals:tblRTPaidSearchGoal[];
    
}
