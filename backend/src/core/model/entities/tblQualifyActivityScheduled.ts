import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblQualifyActivityScheduled",{schema:"public" } )
export class tblQualifyActivityScheduled {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intQualifyActivityScheduledID"
        })
    intQualifyActivityScheduledID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyActivityScheduledValue"
        })
    varQualifyActivityScheduledValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyActivityScheduledDisplay"
        })
    varQualifyActivityScheduledDisplay:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyActivityScheduledSort"
        })
    intQualifyActivityScheduledSort:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyActivityScheduledScore"
        })
    intQualifyActivityScheduledScore:number | null;
        
}
