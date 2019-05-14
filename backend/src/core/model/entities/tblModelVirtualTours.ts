import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblModelVirtualTours",{schema:"public" } )
export class tblModelVirtualTours {

    @PrimaryColumn({ 
        name:'intVirtualTourID',
        nullable: false
    })


    @PrimaryColumn("integer",{
        name:"intVirtualTourModelID"
        })
    intVirtualTourModelID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varVirtualTourSrc"
        })
    varVirtualTourSrc:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varVirtualTourCaption"
        })
    varVirtualTourCaption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"intVirtualTourNavOrder"
        })
    intVirtualTourNavOrder:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteModelVirtualTourCreatedDate"
        })
    dteModelVirtualTourCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteModelVirtualTourModifiedDate"
        })
    dteModelVirtualTourModifiedDate:Date | null;

}
