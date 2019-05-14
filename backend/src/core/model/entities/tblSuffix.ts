import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblSuffix",{schema:"public" } )
export class tblSuffix {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intSuffixID"
        })
    intSuffixID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varSuffix"
        })
    varSuffix:string | null;
        
}
