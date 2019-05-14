import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTEmailMailingType",{schema:"public" } )
export class tblRTEmailMailingType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTEmailMailingTypeID"
        })
    intRTEmailMailingTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTEmailMailingTypeAlphaID"
        })
    varRTEmailMailingTypeAlphaID:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTEmailMailingType"
        })
    varRTEmailMailingType:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEmailMailingTypeCreatedDate"
        })
    dteRTEmailMailingTypeCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEmailMailingTypeModifiedDate"
        })
    dteRTEmailMailingTypeModifiedDate:Date;
        
}
