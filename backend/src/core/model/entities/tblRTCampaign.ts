import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTCPCMetric} from "./tblRTCPCMetric";
import {tblRTCampaignResponse} from "./tblRTCampaignResponse";
import {tblRTCampaignUTM} from "./tblRTCampaignUTM";
import {tblRTConfigSiteCampaign} from "./tblRTConfigSiteCampaign";
import {tblRTDisplayAdGroup} from "./tblRTDisplayAdGroup";
import {tblRTDisplayNonAPIAdData} from "./tblRTDisplayNonAPIAdData";
import {tblRTEmailMarketingItem} from "./tblRTEmailMarketingItem";
import {tblRTFBAIAdSet} from "./tblRTFBAIAdSet";
import {tblRTFBIData} from "./tblRTFBIData";
import {tblRTFBILabeledData} from "./tblRTFBILabeledData";
import {tblRTFBIMonthlyAnalysis} from "./tblRTFBIMonthlyAnalysis";
import {tblRTFBIPost} from "./tblRTFBIPost";
import {tblRTGAData} from "./tblRTGAData";
import {tblRTGAGoal} from "./tblRTGAGoal";
import {tblRTGALabeledData} from "./tblRTGALabeledData";
import {tblRTGAMonthlyAnalysis} from "./tblRTGAMonthlyAnalysis";
import {tblRTPaidSearchAdGroup} from "./tblRTPaidSearchAdGroup";
import {tblRTPaidSearchCampaignData} from "./tblRTPaidSearchCampaignData";
import {tblRTPaidSearchGoalCampaignData} from "./tblRTPaidSearchGoalCampaignData";


@Entity("tblRTCampaign",{schema:"public" } )
@Index("idx_19572_IX_RTCampaignAPIID_FOR_EMI",["bRTCampaignDelete","intRTCampaignAPIID","intRTCampaignAdvertisingTypeID","intRTCampaignCampaignTypeID","varRTCampaignCampaignMedium","varRTCampaignCampaignSource",])
@Index("idx_19572_IX_RTCampaignAPIID",["intRTCampaignAPIID","intRTCampaignAudienceTypeID","intRTCampaignID","varRTCampaignCampaignSource",])
@Index("idx_19572_IX_tblRTCampaign_RTCampaignRTCredentialProviderID",["intRTCampaignAPIID","intRTCampaignCampaignTypeID","intRTCampaignRTCredentialProviderID",])
@Index("idx_19572_IX_RTCampaignCampaignTypeID",["intRTCampaignCampaignTypeID",])
@Index("idx_19572_IX2_RTCampaign",["intRTCampaignCampaignTypeID","intRTCampaignID","varRTCampaignDisplayType",])
@Index("idx_19572_IX_tblRTCampaign_RTCampaignCampaignTypeID",["intRTCampaignCampaignTypeID","intRTCampaignID",])
export class tblRTCampaign {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTCampaignID"
        })
    intRTCampaignID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignName"
        })
    varRTCampaignName:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignCampaignTypeID"
        })
    intRTCampaignCampaignTypeID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignAdvertisingTypeID"
        })
    intRTCampaignAdvertisingTypeID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignCampaignSource"
        })
    varRTCampaignCampaignSource:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignCampaignMedium"
        })
    varRTCampaignCampaignMedium:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignCampaignContent"
        })
    varRTCampaignCampaignContent:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignCampaignTerm"
        })
    varRTCampaignCampaignTerm:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignURL"
        })
    varRTCampaignURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignpURLCampaignName"
        })
    varRTCampaignpURLCampaignName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignpURL"
        })
    varRTCampaignpURL:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignYear"
        })
    intRTCampaignYear:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignDisplayType"
        })
    varRTCampaignDisplayType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignMedia"
        })
    varRTCampaignMedia:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignWebsiteURL"
        })
    varRTCampaignWebsiteURL:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignAudienceTypeID"
        })
    intRTCampaignAudienceTypeID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignAudience"
        })
    varRTCampaignAudience:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignPeriod"
        })
    varRTCampaignPeriod:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignMonth"
        })
    varRTCampaignMonth:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTCampaignRequestedDate"
        })
    dteRTCampaignRequestedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTCampaignInsertRequiredDate"
        })
    dteRTCampaignInsertRequiredDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignJobNumber"
        })
    varRTCampaignJobNumber:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignUTM"
        })
    varRTCampaignUTM:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignDescription"
        })
    varRTCampaignDescription:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignNotes"
        })
    varRTCampaignNotes:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"intRTCampaignAPIID"
        })
    intRTCampaignAPIID:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "true",
        name:"bRTCampaignAPIIntegration"
        })
    bRTCampaignAPIIntegration:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRTCampaignAPIAutoStart"
        })
    bRTCampaignAPIAutoStart:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignAPIYear"
        })
    intRTCampaignAPIYear:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignOpenRate"
        })
    varRTCampaignOpenRate:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignCTR"
        })
    varRTCampaignCTR:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignCompanyID"
        })
    intRTCampaignCompanyID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignCampaignName"
        })
    varRTCampaignCampaignName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignWhole"
        })
    varRTCampaignWhole:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignCategory"
        })
    varRTCampaignCategory:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignURLFolder"
        })
    varRTCampaignURLFolder:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRTCampaignArchive"
        })
    bRTCampaignArchive:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignPageBreaks"
        })
    varRTCampaignPageBreaks:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignClientWebsiteURL"
        })
    varRTCampaignClientWebsiteURL:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTCampaignCreatedDate"
        })
    dteRTCampaignCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTCampaignModifiedDate"
        })
    dteRTCampaignModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRTCampaignDelete"
        })
    bRTCampaignDelete:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTCampaignOpsGroupID"
        })
    intRTCampaignOpsGroupID:number | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCampaignCommunityID"
        })
    intRTCampaignCommunityID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTCampaignExpiresDate"
        })
    dteRTCampaignExpiresDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTCampaignRequestedBy"
        })
    varRTCampaignRequestedBy:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCampaignRTCredentialProviderID"
        })
    intRTCampaignRTCredentialProviderID:number;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCampaignPending"
        })
    bRTCampaignPending:boolean;
        

   
    @OneToMany(type=>tblRTCPCMetric, tblRTCPCMetric=>tblRTCPCMetric.intRtcpcMetricCampaign,{ onDelete: 'CASCADE' , })
    tblRtcpcMetrics:tblRTCPCMetric[];
    

   
    @OneToMany(type=>tblRTCampaignResponse, tblRTCampaignResponse=>tblRTCampaignResponse.intRtCampaignResponseCampaign,{ onDelete: 'CASCADE' , })
    tblRtCampaignResponses:tblRTCampaignResponse[];
    

   
    @OneToMany(type=>tblRTCampaignUTM, tblRTCampaignUTM=>tblRTCampaignUTM.intRtCampaignUtmrtCampaign,{ onDelete: 'CASCADE' , })
    tblRtCampaignUtms:tblRTCampaignUTM[];
    

   
    @OneToMany(type=>tblRTConfigSiteCampaign, tblRTConfigSiteCampaign=>tblRTConfigSiteCampaign.intRtConfigSiteCampaignRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtConfigSiteCampaigns:tblRTConfigSiteCampaign[];
    

   
    @OneToMany(type=>tblRTDisplayAdGroup, tblRTDisplayAdGroup=>tblRTDisplayAdGroup.intRtDisplayAdGroupRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtDisplayAdGroups:tblRTDisplayAdGroup[];
    

   
    @OneToMany(type=>tblRTDisplayNonAPIAdData, tblRTDisplayNonAPIAdData=>tblRTDisplayNonAPIAdData.intRtDisplayNonApiAdDataRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtDisplayNonApiAdDatas:tblRTDisplayNonAPIAdData[];
    

   
    @OneToMany(type=>tblRTEmailMarketingItem, tblRTEmailMarketingItem=>tblRTEmailMarketingItem.intRtEmailMarketingItemCampaign,{ onDelete: 'CASCADE' , })
    tblRtEmailMarketingItems:tblRTEmailMarketingItem[];
    

   
    @OneToMany(type=>tblRTFBAIAdSet, tblRTFBAIAdSet=>tblRTFBAIAdSet.intRtfbaiAdSetRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtfbaiAdSets:tblRTFBAIAdSet[];
    

   
    @OneToMany(type=>tblRTFBIData, tblRTFBIData=>tblRTFBIData.intRtfbiDataRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtfbiDatas:tblRTFBIData[];
    

   
    @OneToMany(type=>tblRTFBILabeledData, tblRTFBILabeledData=>tblRTFBILabeledData.intRtfbiLabeledDataRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtfbiLabeledDatas:tblRTFBILabeledData[];
    

   
    @OneToMany(type=>tblRTFBIMonthlyAnalysis, tblRTFBIMonthlyAnalysis=>tblRTFBIMonthlyAnalysis.intRtfbiMonthlyAnalysisRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtfbiMonthlyAnalysiss:tblRTFBIMonthlyAnalysis[];
    

   
    @OneToMany(type=>tblRTFBIPost, tblRTFBIPost=>tblRTFBIPost.intRtfbiPostRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtfbiPosts:tblRTFBIPost[];
    

   
    @OneToMany(type=>tblRTGAData, tblRTGAData=>tblRTGAData.intRtgaDataRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtgaDatas:tblRTGAData[];
    

   
    @OneToMany(type=>tblRTGAGoal, tblRTGAGoal=>tblRTGAGoal.intRtgaGoalRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtgaGoals:tblRTGAGoal[];
    

   
    @OneToMany(type=>tblRTGALabeledData, tblRTGALabeledData=>tblRTGALabeledData.intRtgaLabeledDataRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtgaLabeledDatas:tblRTGALabeledData[];
    

   
    @OneToMany(type=>tblRTGAMonthlyAnalysis, tblRTGAMonthlyAnalysis=>tblRTGAMonthlyAnalysis.intRtgaMonthlyAnalysisRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtgaMonthlyAnalysiss:tblRTGAMonthlyAnalysis[];
    

   
    @OneToMany(type=>tblRTPaidSearchAdGroup, tblRTPaidSearchAdGroup=>tblRTPaidSearchAdGroup.intRtPaidSearchAdGroupRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtPaidSearchAdGroups:tblRTPaidSearchAdGroup[];
    

   
    @OneToMany(type=>tblRTPaidSearchCampaignData, tblRTPaidSearchCampaignData=>tblRTPaidSearchCampaignData.intRtPaidSearchCampaignDataRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtPaidSearchCampaignDatas:tblRTPaidSearchCampaignData[];
    

   
    @OneToMany(type=>tblRTPaidSearchGoalCampaignData, tblRTPaidSearchGoalCampaignData=>tblRTPaidSearchGoalCampaignData.intRtPaidSearchGoalCampaignDataRtCampaign,{ onDelete: 'CASCADE' , })
    tblRtPaidSearchGoalCampaignDatas:tblRTPaidSearchGoalCampaignData[];
    
}
