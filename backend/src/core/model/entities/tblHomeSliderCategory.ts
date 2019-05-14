import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblHomeSliderCategory",{schema:"public" } )
export class tblHomeSliderCategory {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intHomeSliderCategoryID"
        })
    intHomeSliderCategoryID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varHomeSliderCategoryName"
        })
    varHomeSliderCategoryName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varHomeSliderCategorySection"
        })
    varHomeSliderCategorySection:string | null;
        
}
