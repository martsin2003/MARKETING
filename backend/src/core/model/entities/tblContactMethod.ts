import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblContactMethod",{schema:"public" } )
export class tblContactMethod {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intContactMethodID"
        })
    intContactMethodID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varContactMethod"
        })
    varContactMethod:string | null;
        
}
