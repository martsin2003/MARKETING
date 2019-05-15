import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTMediaContact",{schema:"public" } )
@Index("idx_20231_IX_tblRTMediaContact",["bRTMediaContactArchivedFlg","intRTMediaContactNDGClientContactID","intRTMediaContactNDGCompanyID","varRTMediaContactEmail","varRTMediaContactFirstName","varRTMediaContactLastName","varRTMediaContactPhone","varRTMediaContactStatus","varRTMediaContactType",],{unique:true})
export class tblRTMediaContact {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTMediaContactID"
        })
    intRTMediaContactID:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'source'",
        name:"varRTMediaContactType"
        })
    varRTMediaContactType:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTMediaContactFirstName"
        })
    varRTMediaContactFirstName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTMediaContactLastName"
        })
    varRTMediaContactLastName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTMediaContactEmail"
        })
    varRTMediaContactEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTMediaContactPhone"
        })
    varRTMediaContactPhone:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTMediaContactNDGClientContactID"
        })
    intRTMediaContactNDGClientContactID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTMediaContactNDGCompanyID"
        })
    intRTMediaContactNDGCompanyID:number | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varRTMediaContactStatus"
        })
    varRTMediaContactStatus:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTMediaContactArchivedFlg"
        })
    bRTMediaContactArchivedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTMediaContactCreatedDate"
        })
    dteRTMediaContactCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTMediaContactModifiedDate"
        })
    dteRTMediaContactModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTMediaContactPrimaryFlg"
        })
    bRTMediaContactPrimaryFlg:boolean;
        
}
