import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblContactType",{schema:"public" } )
export class tblContactType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContactTypeID"
        })
    intContactTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varContactType"
        })
    varContactType:string | null;
        
}
