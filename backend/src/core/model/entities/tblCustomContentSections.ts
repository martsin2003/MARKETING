import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCustomContentSections",{schema:"public" } )
export class tblCustomContentSections {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCustomContentId"
        })
    intCustomContentId:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varCustomContentSection"
        })
    varCustomContentSection:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"bIsActive"
        })
    bIsActive:boolean | null;
        
}
