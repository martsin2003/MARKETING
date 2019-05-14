import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblColor2",{schema:"public" } )
export class tblColor2 {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intColorID"
        })
    intColorID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varColorCode"
        })
    varColorCode:string;
        
}
