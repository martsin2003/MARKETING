import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblAmenityType",{schema:"public" } )
export class tblAmenityType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intAmenityTypeID"
        })
    intAmenityTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityType"
        })
    varAmenityType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityTypeDisplay"
        })
    varAmenityTypeDisplay:string | null;
        
}
