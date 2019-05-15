import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblAreaAmenityCategory",{schema:"public" } )
export class tblAreaAmenityCategory {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intAreaAmenityCategoryID"
        })
    intAreaAmenityCategoryID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"Category"
        })
    Category:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAreaAmenityCategoryName"
        })
    varAreaAmenityCategoryName:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intAreaAmenityCategoryAmenityTypeID"
        })
    intAreaAmenityCategoryAmenityTypeID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAreaAmenityCategoryPinColor"
        })
    varAreaAmenityCategoryPinColor:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intAreaAmenityCategoryOrder"
        })
    intAreaAmenityCategoryOrder:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varDisplayAreaAmenityCategoryName"
        })
    varDisplayAreaAmenityCategoryName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAreaAmenityCategoryAbv"
        })
    varAreaAmenityCategoryAbv:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityCategorySubImage"
        })
    varAmenityCategorySubImage:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAreaAmenityCategoryPin2XImage"
        })
    varAreaAmenityCategoryPin2XImage:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varDisplayAreaAmenityCategoryDot"
        })
    varDisplayAreaAmenityCategoryDot:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varDisplayAreaAmenityCategoryPin"
        })
    varDisplayAreaAmenityCategoryPin:string | null;
        
}
