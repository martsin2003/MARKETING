import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblQualifyTimeframe",{schema:"public" } )
export class tblQualifyTimeframe {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intQualifyTimeframeID"
        })
    intQualifyTimeframeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyTimeframeValue"
        })
    varQualifyTimeframeValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyTimeframeDisplay"
        })
    varQualifyTimeframeDisplay:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyTimeframeSort"
        })
    intQualifyTimeframeSort:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyTimeframeScore"
        })
    intQualifyTimeframeScore:number | null;
        
}
