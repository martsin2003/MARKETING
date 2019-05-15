import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblAppMassMessage} from "./tblAppMassMessage";


@Entity("tblAppMassMessageSentEmail",{schema:"public" } )
@Index("idx_16477_IX_tblAppMassMessageSentEmail",["intAppMassMessageSentEmailCampaignID","intAppMassMessageSentEmailID","intAppMassMessageSentEmailListID","intAppMassMessageSentEmailMessage","intAppMassMessageSentEmailSentEmailID",],{unique:true})
export class tblAppMassMessageSentEmail {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intAppMassMessageSentEmailID"
        })
    intAppMassMessageSentEmailID:string;
        

   
    @ManyToOne(type=>tblAppMassMessage, tblAppMassMessage=>tblAppMassMessage.tblAppMassMessageSentEmails,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intAppMassMessageSentEmailMessageID'})
    intAppMassMessageSentEmailMessage:tblAppMassMessage | null;


    @Column("integer",{ 
        nullable:false,
        name:"intAppMassMessageSentEmailSentEmailID"
        })
    intAppMassMessageSentEmailSentEmailID:number;
        

    @Column("text",{ 
        nullable:false,
        name:"varAppMassMessageSentEmailSessionID"
        })
    varAppMassMessageSentEmailSessionID:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"intAppMassMessageSentEmailCampaignID"
        })
    intAppMassMessageSentEmailCampaignID:string;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "'0'",
        name:"intAppMassMessageSentEmailListID"
        })
    intAppMassMessageSentEmailListID:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteAppMassMessageSentEmailTimestamp"
        })
    dteAppMassMessageSentEmailTimestamp:Date;
        

    @Column("text",{ 
        nullable:false,
        name:"varAppMassMessageSentEmailFromEmail"
        })
    varAppMassMessageSentEmailFromEmail:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varAppMassMessageSentEmailFromLabel"
        })
    varAppMassMessageSentEmailFromLabel:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varAppMassMessageSentEmailTestRecipientList"
        })
    varAppMassMessageSentEmailTestRecipientList:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteAppMassMessageSentEmailCreatedDate"
        })
    dteAppMassMessageSentEmailCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteAppMassMessageSentEmailModifiedDate"
        })
    dteAppMassMessageSentEmailModifiedDate:Date;
        
}
