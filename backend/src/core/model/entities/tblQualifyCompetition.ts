import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblQualifyCompetition",{schema:"public" } )
export class tblQualifyCompetition {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intQualifyCompetitionID"
        })
    intQualifyCompetitionID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyCompetitionValue"
        })
    varQualifyCompetitionValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyCompetitionDisplay"
        })
    varQualifyCompetitionDisplay:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyCompetitionSort"
        })
    intQualifyCompetitionSort:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyCompetitionScore"
        })
    intQualifyCompetitionScore:number | null;
        
}
