import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblQualifyFloorPlans",{schema:"public" } )
export class tblQualifyFloorPlans {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intQualifyFloorPlansID"
        })
    intQualifyFloorPlansID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyFloorPlansValue"
        })
    varQualifyFloorPlansValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyFloorPlansDisplay"
        })
    varQualifyFloorPlansDisplay:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyFloorPlansSort"
        })
    intQualifyFloorPlansSort:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyFloorPlansScore"
        })
    intQualifyFloorPlansScore:number | null;
        
}
