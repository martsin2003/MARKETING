import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRealtor",{schema:"public" } )
@Index("idx_19400_IX_tblRealtor_email",["intRealtorID","varRealtorEmail",])
@Index("idx_19400_IX_tblRealtor",["varRealtorEmail","varRealtorFirstName","varRealtorLastName",])
export class tblRealtor {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRealtorID"
        })
    intRealtorID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorFirstName"
        })
    varRealtorFirstName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorLastName"
        })
    varRealtorLastName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorAffiliation"
        })
    varRealtorAffiliation:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeAddress"
        })
    varRealtorOfficeAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeAddress2"
        })
    varRealtorOfficeAddress2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeCity"
        })
    varRealtorOfficeCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeState"
        })
    varRealtorOfficeState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeZip"
        })
    varRealtorOfficeZip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorHomePhone"
        })
    varRealtorHomePhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficePhone"
        })
    varRealtorOfficePhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeExtPhone"
        })
    varRealtorOfficeExtPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorCellPhone"
        })
    varRealtorCellPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorFaxPhone"
        })
    varRealtorFaxPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorEmail"
        })
    varRealtorEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtRealtorComments"
        })
    txtRealtorComments:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRealtorOfficeID"
        })
    intRealtorOfficeID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeOther"
        })
    varRealtorOfficeOther:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRealtorTopTen"
        })
    bRealtorTopTen:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRealtorInserted"
        })
    dteRealtorInserted:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"DateRegistered"
        })
    DateRegistered:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"Password"
        })
    Password:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"FullName"
        })
    FullName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorPhoto"
        })
    varRealtorPhoto:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorLogo"
        })
    varRealtorLogo:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"DateOpened"
        })
    DateOpened:Date | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRealtorBeBack1"
        })
    bRealtorBeBack1:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRealtorBeBackDate1"
        })
    dteRealtorBeBackDate1:Date | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRealtorBeBack2"
        })
    bRealtorBeBack2:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRealtorBeBackDate2"
        })
    dteRealtorBeBackDate2:Date | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRealtorBeBack3"
        })
    bRealtorBeBack3:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRealtorBeBackDate3"
        })
    dteRealtorBeBackDate3:Date | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRealtorBeBack4"
        })
    bRealtorBeBack4:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRealtorBeBackDate4"
        })
    dteRealtorBeBackDate4:Date | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRealtorBeBack5"
        })
    bRealtorBeBack5:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRealtorBeBackDate5"
        })
    dteRealtorBeBackDate5:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorLogoImage"
        })
    varRealtorLogoImage:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorBioImage"
        })
    varRealtorBioImage:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorLogoImageAP"
        })
    varRealtorLogoImageAP:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorBioImageAP"
        })
    varRealtorBioImageAP:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRealtorTermsAccepted"
        })
    bRealtorTermsAccepted:boolean | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRealtorEmailOptOut"
        })
    bRealtorEmailOptOut:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRealtorCommunityID"
        })
    intRealtorCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorMRISID"
        })
    varRealtorMRISID:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRealtorRealtorOfficeID"
        })
    intRealtorRealtorOfficeID:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bRealtorReady"
        })
    bRealtorReady:boolean | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorEmailVerifyKey"
        })
    varRealtorEmailVerifyKey:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRealtorModifiedDate"
        })
    dteRealtorModifiedDate:Date;
        
}
