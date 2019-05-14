import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCounty",{schema:"public" } )
export class tblCounty {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCountyID"
        })
    intCountyID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varCounty"
        })
    varCounty:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varStateFull"
        })
    varStateFull:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCountyState"
        })
    varCountyState:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intSortOrder"
        })
    intSortOrder:number | null;
        
}
