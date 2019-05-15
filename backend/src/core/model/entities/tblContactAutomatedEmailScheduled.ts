import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblContact} from "./tblContact";
import {tblContactAutomatedEmail} from "./tblContactAutomatedEmail";


@Entity("tblContactAutomatedEmailScheduled",{schema:"public" } )
export class tblContactAutomatedEmailScheduled {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContactAutomatedEmailScheduledID"
        })
    intContactAutomatedEmailScheduledID:string;
        

   
    @ManyToOne(type=>tblContact, tblContact=>tblContact.tblContactAutomatedEmailScheduleds,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intContactAutomatedEmailScheduledContactID'})
    intContactAutomatedEmailScheduledContact:tblContact | null;


   
    @ManyToOne(type=>tblContactAutomatedEmail, tblContactAutomatedEmail=>tblContactAutomatedEmail.tblContactAutomatedEmailScheduleds,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intContactAutomatedEmailScheduledContactAutomatedEmailID'})
    intContactAutomatedEmailScheduledContactAutomatedEmail:tblContactAutomatedEmail | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContactAutomatedEmailScheduledDateTime"
        })
    dteContactAutomatedEmailScheduledDateTime:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContactAutomatedEmailScheduledCreatedDate"
        })
    dteContactAutomatedEmailScheduledCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteContactAutomatedEmailScheduledModifiedDate"
        })
    dteContactAutomatedEmailScheduledModifiedDate:Date;
        
}
