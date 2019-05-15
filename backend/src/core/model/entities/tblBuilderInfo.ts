import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblBuilderInfo",{schema:"public" } )
export class tblBuilderInfo {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intBuilderInfoID"
        })
    intBuilderInfoID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoName"
        })
    varBuilderInfoName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoPhone"
        })
    varBuilderInfoPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoFax"
        })
    varBuilderInfoFax:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoEmail"
        })
    varBuilderInfoEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoAddress"
        })
    varBuilderInfoAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoCity"
        })
    varBuilderInfoCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoState"
        })
    varBuilderInfoState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoZip"
        })
    varBuilderInfoZip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtBuilderInfoStory"
        })
    txtBuilderInfoStory:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intBuilderInfoContactID"
        })
    intBuilderInfoContactID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoLogoURL"
        })
    varBuilderInfoLogoURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderNumber"
        })
    varBuilderNumber:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBrandName"
        })
    varBrandName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBrandLogo_Med"
        })
    varBrandLogo_Med:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBrandLogo_Sm"
        })
    varBrandLogo_Sm:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReportingName"
        })
    varReportingName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varDefaultLeadsEmail"
        })
    varDefaultLeadsEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'1'",
        name:"varDefaultLeadsEmailLeadsPerMessage"
        })
    varDefaultLeadsEmailLeadsPerMessage:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderWebsite"
        })
    varBuilderWebsite:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCopyLeadsEmail"
        })
    varCopyLeadsEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'1'",
        name:"varCopyLeadsEmailLeadsPerMessage"
        })
    varCopyLeadsEmailLeadsPerMessage:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderMaintenanceManualPdf"
        })
    varBuilderMaintenanceManualPdf:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderFloorplanFurnitureColor"
        })
    varBuilderFloorplanFurnitureColor:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bBuilderFloorplanSpacePlanner"
        })
    bBuilderFloorplanSpacePlanner:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderFloorplanCameraColor"
        })
    varBuilderFloorplanCameraColor:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtBuilderInfoPrivacyPolicy"
        })
    txtBuilderInfoPrivacyPolicy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtBuilderInfoTermsOfUse"
        })
    txtBuilderInfoTermsOfUse:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoBuilderType"
        })
    varBuilderInfoBuilderType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoMHBR"
        })
    varBuilderInfoMHBR:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoOSCEmail"
        })
    varBuilderInfoOSCEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoOSCName"
        })
    varBuilderInfoOSCName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoOSCPhone"
        })
    varBuilderInfoOSCPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderInfoStaus"
        })
    varBuilderInfoStaus:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderFacebookURL"
        })
    varBuilderFacebookURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderTwitterURL"
        })
    varBuilderTwitterURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderPinterestURL"
        })
    varBuilderPinterestURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varBuilderYoutubeURL"
        })
    varBuilderYoutubeURL:string | null;
        
}
