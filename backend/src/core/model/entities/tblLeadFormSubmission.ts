import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblLeadFormSubmission",{schema:"public" } )
export class tblLeadFormSubmission {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intLeadFormSubmissionID"
        })
    intLeadFormSubmissionID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intLeadFormSubmissionContactID"
        })
    intLeadFormSubmissionContactID:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteLeadFormSubmissionDate"
        })
    dteLeadFormSubmissionDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varLeadFormSubmissionForm"
        })
    varLeadFormSubmissionForm:string | null;
        
}
