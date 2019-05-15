import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblPreferredLenderIntro",{schema:"public" } )
export class tblPreferredLenderIntro {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intPreferredLenderIntroID"
        })
    intPreferredLenderIntroID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"txtPreferredLenderIntro"
        })
    txtPreferredLenderIntro:string | null;
        
}
