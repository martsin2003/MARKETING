import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCategory",{schema:"public" } )
export class tblCategory {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCategoryID"
        })
    intCategoryID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varCategory"
        })
    varCategory:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCategoryOSCOnly"
        })
    bCategoryOSCOnly:boolean | null;
        
}
