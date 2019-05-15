import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFPUserContact} from "./tblFPUserContact";
import {tblFPUserEmployee} from "./tblFPUserEmployee";
import {tblFPUserSavedFloorplan} from "./tblFPUserSavedFloorplan";


@Entity("tblFPUser",{schema:"public" } )
@Index("idx_17951_IDX_tblFPUser",["bFPUserDeletedFlg","dteFPUserLastLoginDate","dteFPUserModifiedDate","dteFPUserRegisteredDate","varFPUserEmail","varFPUserFirstName","varFPUserLastName","varFPUserPassword","varFPUserPhone",],{unique:true})
export class tblFPUser {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPUserID"
        })
    intFPUserID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varFPUserFirstName"
        })
    varFPUserFirstName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varFPUserLastName"
        })
    varFPUserLastName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varFPUserEmail"
        })
    varFPUserEmail:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varFPUserPhone"
        })
    varFPUserPhone:string | null;
        

    @Column("text",{ 
        nullable:false,
        name:"varFPUserPassword"
        })
    varFPUserPassword:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPUserDeletedFlg"
        })
    bFPUserDeletedFlg:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteFPUserLastLoginDate"
        })
    dteFPUserLastLoginDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPUserRegisteredDate"
        })
    dteFPUserRegisteredDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPUserModifiedDate"
        })
    dteFPUserModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPUserIsEmployee"
        })
    bFPUserIsEmployee:boolean;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPUserTotalLogins"
        })
    intFPUserTotalLogins:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPUserIDForFavorites"
        })
    intFPUserIDForFavorites:number | null;
        

   
    @OneToMany(type=>tblFPUserContact, tblFPUserContact=>tblFPUserContact.intFpUserContactFpUser)
    tblFpUserContacts:tblFPUserContact[];
    

   
    @OneToMany(type=>tblFPUserEmployee, tblFPUserEmployee=>tblFPUserEmployee.intFpUserEmployeeFpUser,{ onDelete: 'CASCADE' , })
    tblFpUserEmployees:tblFPUserEmployee[];
    

   
    @OneToMany(type=>tblFPUserSavedFloorplan, tblFPUserSavedFloorplan=>tblFPUserSavedFloorplan.intFpUserSavedFloorplanFpUser,{ onDelete: 'CASCADE' , })
    tblFpUserSavedFloorplans:tblFPUserSavedFloorplan[];
    
}
