import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFTeamMember} from "./tblMBFTeamMember";


@Entity("tblMBFTeamMemberType",{schema:"public" } )
export class tblMBFTeamMemberType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFTeamMemberTypeID"
        })
    intMBFTeamMemberTypeID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFTeamMemberTypeName"
        })
    varMBFTeamMemberTypeName:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'Active'",
        name:"varMBFTeamMemberTypeStatus"
        })
    varMBFTeamMemberTypeStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFTeamMemberTypeCreatedDate"
        })
    dteMBFTeamMemberTypeCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFTeamMemberTypeModifiedDate"
        })
    dteMBFTeamMemberTypeModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "true",
        name:"bMBFTeamMemberTypeIsEditableFlg"
        })
    bMBFTeamMemberTypeIsEditableFlg:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bMBFTeamMemberTypeAllowRRAcctLinkFlg"
        })
    bMBFTeamMemberTypeAllowRRAcctLinkFlg:boolean;
        

   
    @OneToMany(type=>tblMBFTeamMember, tblMBFTeamMember=>tblMBFTeamMember.intMbfTeamMemberType,{ onDelete: 'CASCADE' , })
    tblMbfTeamMembers:tblMBFTeamMember[];
    
}
