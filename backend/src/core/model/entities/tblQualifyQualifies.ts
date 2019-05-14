import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblQualifyQualifies",{schema:"public" } )
export class tblQualifyQualifies {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intQualifyQualifiesID"
        })
    intQualifyQualifiesID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyQualifiesValue"
        })
    varQualifyQualifiesValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyQualifiesDisplay"
        })
    varQualifyQualifiesDisplay:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyQualifiesSort"
        })
    intQualifyQualifiesSort:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyQualifiesScore"
        })
    intQualifyQualifiesScore:number | null;
        
}
