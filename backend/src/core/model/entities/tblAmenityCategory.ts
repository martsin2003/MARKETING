import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblAmenityCategory",{schema:"public" } )
export class tblAmenityCategory {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intAmenityCategoryID"
        })
    intAmenityCategoryID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityCategoryName"
        })
    varAmenityCategoryName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityCategorySubImage"
        })
    varAmenityCategorySubImage:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intOrder"
        })
    intOrder:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAnchorText"
        })
    varAnchorText:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intAmenityCategoryAmenityTypeID"
        })
    intAmenityCategoryAmenityTypeID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityCategoryPin"
        })
    varAmenityCategoryPin:string | null;
        
}
