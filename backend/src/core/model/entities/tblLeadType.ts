import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblLeadType",{schema:"public" } )
export class tblLeadType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intleadTypeID"
        })
    intleadTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varLeadType"
        })
    varLeadType:string | null;
        
}
