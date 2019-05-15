import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblContact} from "./tblContact";
import {tblContactAutomatedEmail} from "./tblContactAutomatedEmail";


@Entity("tblContactAutomatedEmailPaused",{schema:"public" } )
@Index("idx_17198_IX_tblContactAutomatedEmailPaused",["dteContactAutomatedEmailPausedPausedDate","intContactAutomatedEmailPausedContactAutomatedEmail","intContactAutomatedEmailPausedContact","intContactAutomatedEmailPausedID",],{unique:true})
export class tblContactAutomatedEmailPaused {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContactAutomatedEmailPausedID"
        })
    intContactAutomatedEmailPausedID:string;
        

   
    @ManyToOne(type=>tblContact, tblContact=>tblContact.tblContactAutomatedEmailPauseds,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intContactAutomatedEmailPausedContactID'})
    intContactAutomatedEmailPausedContact:tblContact | null;


   
    @ManyToOne(type=>tblContactAutomatedEmail, tblContactAutomatedEmail=>tblContactAutomatedEmail.tblContactAutomatedEmailPauseds,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intContactAutomatedEmailPausedContactAutomatedEmailID'})
    intContactAutomatedEmailPausedContactAutomatedEmail:tblContactAutomatedEmail | null;


    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteContactAutomatedEmailPausedPausedDate"
        })
    dteContactAutomatedEmailPausedPausedDate:Date | null;
        
}
