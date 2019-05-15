import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblModelMobileFloorplan",{schema:"public" } )
export class tblModelMobileFloorplan {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intModelMobileFloorplanID"
        })
    intModelMobileFloorplanID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intModelID"
        })
    intModelID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelMobileFloorplanSrc"
        })
    varModelMobileFloorplanSrc:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelMobileFloorplanCaption"
        })
    varModelMobileFloorplanCaption:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intNavOrder"
        })
    intNavOrder:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varModelMobileFloorplanCategory"
        })
    varModelMobileFloorplanCategory:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteModelMobileFloorplanCreatedDate"
        })
    dteModelMobileFloorplanCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteModelMobileFloorplanModifiedDate"
        })
    dteModelMobileFloorplanModifiedDate:Date | null;
        
}
