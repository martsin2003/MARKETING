import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblHomePage",{schema:"public" } )
export class tblHomePage {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intHomePageID"
        })
    intHomePageID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"txtHomePageText"
        })
    txtHomePageText:string | null;
        
}
