import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblQualifyMilestones",{schema:"public" } )
export class tblQualifyMilestones {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intQualifyMilestonesID"
        })
    intQualifyMilestonesID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyMilestonesValue"
        })
    varQualifyMilestonesValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyMilestonesDisplay"
        })
    varQualifyMilestonesDisplay:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyMilestonesSort"
        })
    intQualifyMilestonesSort:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyMilestonesScore"
        })
    intQualifyMilestonesScore:number | null;
        
}
