import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFTeamMemberSalesReportUser} from "./tblMBFTeamMemberSalesReportUser";


@Entity("tblSalesReportUser",{schema:"public" } )
@Index("idx_20460_AK_tblSalesReportUser_lngUserID",["lngUserID",],{unique:true})
export class tblSalesReportUser {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intSalesRepUser"
        })
    intSalesRepUser:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"lngUserID"
        })
    lngUserID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"txtUserName"
        })
    txtUserName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtPassword"
        })
    txtPassword:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngUserLevel"
        })
    lngUserLevel:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSalesRepFirstName"
        })
    txtSalesRepFirstName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSalesRepLastName"
        })
    txtSalesRepLastName:string | null;
        

    @Column("text",{ 
        nullable:true,
        default: () => "'0'",
        name:"txtCommunityIDList"
        })
    txtCommunityIDList:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSalesRepEmail"
        })
    txtSalesRepEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSalesRepHomePhone"
        })
    txtSalesRepHomePhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSalesRepWorkPhone"
        })
    txtSalesRepWorkPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSalesRepWorkPhoneExt"
        })
    txtSalesRepWorkPhoneExt:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSalesRepMobilePhone"
        })
    txtSalesRepMobilePhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSalesRepFax"
        })
    txtSalesRepFax:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityPrimaryID"
        })
    intCommunityPrimaryID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSalesRepCommunityDivision"
        })
    varSalesRepCommunityDivision:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSalesRepSalesCode"
        })
    varSalesRepSalesCode:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bSalesRepArchived"
        })
    bSalesRepArchived:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteSalesRepArchivedDate"
        })
    dteSalesRepArchivedDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSalesRepImage"
        })
    varSalesRepImage:string | null;
        

   
    @OneToMany(type=>tblMBFTeamMemberSalesReportUser, tblMBFTeamMemberSalesReportUser=>tblMBFTeamMemberSalesReportUser.intMbfTeamMemberSalesReportUserSalesRepUser)
    tblMbfTeamMemberSalesReportUsers:tblMBFTeamMemberSalesReportUser[];
    
}
