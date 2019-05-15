import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTCampaign} from "./tblRTCampaign";


@Entity("tblRTCampaignResponse",{schema:"public" } )
export class tblRTCampaignResponse {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTCampaignResponseID"
        })
    intRTCampaignResponseID:string;
        

   
    @ManyToOne(type=>tblRTCampaign, tblRTCampaign=>tblRTCampaign.tblRtCampaignResponses,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTCampaignResponseCampaignID'})
    intRtCampaignResponseCampaign:tblRTCampaign | null;


    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTCampaignResponseStart"
        })
    dteRTCampaignResponseStart:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTCampaignResponseEnd"
        })
    dteRTCampaignResponseEnd:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseMediaInsertionID"
        })
    intRTCampaignResponseMediaInsertionID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseTrackingNum"
        })
    varRTCampaignResponseTrackingNum:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponsePURLID"
        })
    intRTCampaignResponsePURLID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseRate"
        })
    varRTCampaignResponseRate:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCampaignResponseCalls"
        })
    intRTCampaignResponseCalls:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCampaignResponseWalkIns"
        })
    intRTCampaignResponseWalkIns:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCampaignResponseWeb"
        })
    intRTCampaignResponseWeb:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseAdvertisingTypeID"
        })
    intRTCampaignResponseAdvertisingTypeID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseZeroCostOption"
        })
    varRTCampaignResponseZeroCostOption:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseArchive"
        })
    bRTCampaignResponseArchive:boolean;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseMediaOrderID"
        })
    intRTCampaignResponseMediaOrderID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseContent"
        })
    varRTCampaignResponseContent:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseSection"
        })
    varRTCampaignResponseSection:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCampaignResponseClicks"
        })
    intRTCampaignResponseClicks:number;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"intRTCampaignResponseCTR"
        })
    intRTCampaignResponseCTR:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCampaignResponseImpressions"
        })
    intRTCampaignResponseImpressions:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseAnalysis"
        })
    varRTCampaignResponseAnalysis:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseRecommendations"
        })
    varRTCampaignResponseRecommendations:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseType"
        })
    varRTCampaignResponseType:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTCampaignResponseCreatedDate"
        })
    dteRTCampaignResponseCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTCampaignResponseModifiedDate"
        })
    dteRTCampaignResponseModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseAutoUpdate"
        })
    bRTCampaignResponseAutoUpdate:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseDelete"
        })
    bRTCampaignResponseDelete:boolean;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCampaignResponseOpsRespID"
        })
    intRTCampaignResponseOpsRespID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseMedia"
        })
    varRTCampaignResponseMedia:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseMediaInsertion"
        })
    varRTCampaignResponseMediaInsertion:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseMediaType"
        })
    varRTCampaignResponseMediaType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponsePURL"
        })
    varRTCampaignResponsePURL:string | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseDetailsViewsNA"
        })
    bRTCampaignResponseDetailsViewsNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseDrivingDirectionViewsNA"
        })
    bRTCampaignResponseDrivingDirectionViewsNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseEmailLeadsNA"
        })
    bRTCampaignResponseEmailLeadsNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponsePhoneCallsNA"
        })
    bRTCampaignResponsePhoneCallsNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponsePhoneViewsNA"
        })
    bRTCampaignResponsePhoneViewsNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseSearchViewsNA"
        })
    bRTCampaignResponseSearchViewsNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseWebsiteClickThrusNA"
        })
    bRTCampaignResponseWebsiteClickThrusNA:boolean;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseDetailsViews"
        })
    intRTCampaignResponseDetailsViews:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseDrivingDirectionViews"
        })
    intRTCampaignResponseDrivingDirectionViews:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseEmailLeads"
        })
    intRTCampaignResponseEmailLeads:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponsePhoneCalls"
        })
    intRTCampaignResponsePhoneCalls:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponsePhoneViews"
        })
    intRTCampaignResponsePhoneViews:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseSearchViews"
        })
    intRTCampaignResponseSearchViews:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseWebsiteClickThrus"
        })
    intRTCampaignResponseWebsiteClickThrus:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignResponseMediaURL"
        })
    varRTCampaignResponseMediaURL:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseRTMediaSourceID"
        })
    intRTCampaignResponseRTMediaSourceID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseCallClicks"
        })
    intRTCampaignResponseCallClicks:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseCallClicksNA"
        })
    bRTCampaignResponseCallClicksNA:boolean;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignResponseLiveChats"
        })
    intRTCampaignResponseLiveChats:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseLiveChatsNA"
        })
    bRTCampaignResponseLiveChatsNA:boolean;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curRTCampaignResponseSpend"
        })
    curRTCampaignResponseSpend:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseImpressionsNA"
        })
    bRTCampaignResponseImpressionsNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseClicksNA"
        })
    bRTCampaignResponseClicksNA:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignResponseSpendNA"
        })
    bRTCampaignResponseSpendNA:boolean;
        
}
