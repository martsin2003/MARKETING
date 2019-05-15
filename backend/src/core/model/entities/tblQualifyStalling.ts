import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblQualifyStalling",{schema:"public" } )
export class tblQualifyStalling {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intQualifyStallingID"
        })
    intQualifyStallingID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyStallingValue"
        })
    varQualifyStallingValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyStallingDisplay"
        })
    varQualifyStallingDisplay:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyStallingSort"
        })
    intQualifyStallingSort:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyStallingScore"
        })
    intQualifyStallingScore:number | null;
        
}
