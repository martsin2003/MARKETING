import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblModelElevation",{schema:"public" } )
export class tblModelElevation {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intModelElevationID"
        })
    intModelElevationID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelElevationModelID"
        })
    intModelElevationModelID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelElevationModelGenericID"
        })
    intModelElevationModelGenericID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelElevationModelGenericElevationID"
        })
    intModelElevationModelGenericElevationID:number | null;
        
}
