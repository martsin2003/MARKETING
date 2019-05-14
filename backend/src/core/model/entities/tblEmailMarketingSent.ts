import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblEmailMarketingSentTargetCRM} from "./tblEmailMarketingSentTargetCRM";


@Entity("tblEmailMarketingSent",{schema:"public" } )
export class tblEmailMarketingSent {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intEmailMarketingSentID"
        })
    intEmailMarketingSentID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varEmailMarketingSentSessionID"
        })
    varEmailMarketingSentSessionID:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        name:"intEmailMarketingSentCampaignID"
        })
    intEmailMarketingSentCampaignID:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"intEmailMarketingSentListID"
        })
    intEmailMarketingSentListID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varEmailMarketingSentTitle"
        })
    varEmailMarketingSentTitle:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varEmailMarketingSentSubject"
        })
    varEmailMarketingSentSubject:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varEmailMarketingSentUserName"
        })
    varEmailMarketingSentUserName:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bEmailMarketingSentTest"
        })
    bEmailMarketingSentTest:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEmailMarketingSentLetterheadBody"
        })
    txtEmailMarketingSentLetterheadBody:string | null;
        

    @Column("text",{ 
        nullable:false,
        name:"varEmailMarketingSentCampaignName"
        })
    varEmailMarketingSentCampaignName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varEmailMarketingSentTime"
        })
    varEmailMarketingSentTime:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varEmailMarketingSentDate"
        })
    varEmailMarketingSentDate:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteEmailMarketingCreateDate"
        })
    dteEmailMarketingCreateDate:Date;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEmailMarketingSentSearchCritRpt"
        })
    txtEmailMarketingSentSearchCritRpt:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEmailMarketingSentSearchDspCritRpt"
        })
    txtEmailMarketingSentSearchDspCritRpt:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intEmailMarketingSentTemplateID"
        })
    intEmailMarketingSentTemplateID:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bEmailMarketingSentLive"
        })
    bEmailMarketingSentLive:boolean;
        

    @Column("text",{ 
        nullable:false,
        name:"varEmailMarketingSentFromLabel"
        })
    varEmailMarketingSentFromLabel:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varEmailMarketingSentFromEmail"
        })
    varEmailMarketingSentFromEmail:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varEmailMarketingSentTestEmailList"
        })
    varEmailMarketingSentTestEmailList:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varEmailMarketingSentTemplateType"
        })
    varEmailMarketingSentTemplateType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEmailMarketingSentSearchEmailEcludeList"
        })
    txtEmailMarketingSentSearchEmailEcludeList:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varEmailMarketingSentAudienceType"
        })
    varEmailMarketingSentAudienceType:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bEmailMarketingSentIncludeRealtors"
        })
    bEmailMarketingSentIncludeRealtors:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEmailMarketingTemplateSentDisclaimerText"
        })
    txtEmailMarketingTemplateSentDisclaimerText:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intEmailMarketingSentCommunityCRMID"
        })
    intEmailMarketingSentCommunityCRMID:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRealtorEmail"
        })
    bRealtorEmail:boolean;
        

    @Column("text",{ 
        nullable:true,
        name:"varEmailMarketingSentRealtorEmailParams"
        })
    varEmailMarketingSentRealtorEmailParams:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intEmailMarketingSentLiveID"
        })
    intEmailMarketingSentLiveID:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteEmailMarketingSentModifiedDate"
        })
    dteEmailMarketingSentModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intEmailMarketingSentTargetCommunityCRMID"
        })
    intEmailMarketingSentTargetCommunityCRMID:number;
        

   
    @OneToMany(type=>tblEmailMarketingSentTargetCRM, tblEmailMarketingSentTargetCRM=>tblEmailMarketingSentTargetCRM.intEmailMarketingSentTargetCrmEmailMarketingSent,{ onDelete: 'CASCADE' , })
    tblEmailMarketingSentTargetCrms:tblEmailMarketingSentTargetCRM[];
    
}
