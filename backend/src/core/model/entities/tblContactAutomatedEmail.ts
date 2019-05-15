import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblContactAutomatedEmailType} from "./tblContactAutomatedEmailType";
import {tblCommunityARHeaderGraphicCategory} from "./tblCommunityARHeaderGraphicCategory";
import {tblContactAutomatedEmailCancelled} from "./tblContactAutomatedEmailCancelled";
import {tblContactAutomatedEmailPaused} from "./tblContactAutomatedEmailPaused";
import {tblContactAutomatedEmailScheduled} from "./tblContactAutomatedEmailScheduled";
import {tblContactAutomatedEmailSent} from "./tblContactAutomatedEmailSent";


@Entity("tblContactAutomatedEmail",{schema:"public" } )
export class tblContactAutomatedEmail {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContactAutomatedEmailID"
        })
    intContactAutomatedEmailID:string;
        

   
    @ManyToOne(type=>tblContactAutomatedEmailType, tblContactAutomatedEmailType=>tblContactAutomatedEmailType.tblContactAutomatedEmails,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intContactAutomatedEmailContactAutomatedEmailTypeID'})
    intContactAutomatedEmailContactAutomatedEmailType:tblContactAutomatedEmailType | null;


   
    @ManyToOne(type=>tblCommunityARHeaderGraphicCategory, tblCommunityARHeaderGraphicCategory=>tblCommunityARHeaderGraphicCategory.tblContactAutomatedEmails,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'varContactAutomatedEmailName'})
    varContactAutomatedEmailName:tblCommunityARHeaderGraphicCategory | null;


    @Column("text",{ 
        nullable:false,
        name:"varContactAutomatedEmailNameDisplay"
        })
    varContactAutomatedEmailNameDisplay:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intContactAutomatedEmailDays"
        })
    intContactAutomatedEmailDays:number;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varContactAutomatedEmailStatus"
        })
    varContactAutomatedEmailStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContactAutomatedEmailCreatedDate"
        })
    dteContactAutomatedEmailCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContactAutomatedEmailModifiedDate"
        })
    dteContactAutomatedEmailModifiedDate:Date;
        

   
    @OneToMany(type=>tblContactAutomatedEmailCancelled, tblContactAutomatedEmailCancelled=>tblContactAutomatedEmailCancelled.intContactAutomatedEmailCancelledContactAutomatedEmail,{ onDelete: 'CASCADE' , })
    tblContactAutomatedEmailCancelleds:tblContactAutomatedEmailCancelled[];
    

   
    @OneToMany(type=>tblContactAutomatedEmailPaused, tblContactAutomatedEmailPaused=>tblContactAutomatedEmailPaused.intContactAutomatedEmailPausedContactAutomatedEmail,{ onDelete: 'CASCADE' , })
    tblContactAutomatedEmailPauseds:tblContactAutomatedEmailPaused[];
    

   
    @OneToMany(type=>tblContactAutomatedEmailScheduled, tblContactAutomatedEmailScheduled=>tblContactAutomatedEmailScheduled.intContactAutomatedEmailScheduledContactAutomatedEmail,{ onDelete: 'CASCADE' , })
    tblContactAutomatedEmailScheduleds:tblContactAutomatedEmailScheduled[];
    

   
    @OneToMany(type=>tblContactAutomatedEmailSent, tblContactAutomatedEmailSent=>tblContactAutomatedEmailSent.intContactAutomatedEmailSentContactAutomatedEmail,{ onDelete: 'CASCADE' , })
    tblContactAutomatedEmailSents:tblContactAutomatedEmailSent[];
    
}
