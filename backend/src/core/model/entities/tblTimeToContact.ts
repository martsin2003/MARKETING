import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblTimeToContact",{schema:"public" } )
export class tblTimeToContact {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intTimeToContactID"
        })
    intTimeToContactID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varTimeToContact"
        })
    varTimeToContact:string | null;
        
}
