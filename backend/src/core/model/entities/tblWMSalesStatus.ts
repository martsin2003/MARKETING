import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblWMSalesStatus",{schema:"public" } )
@Index("idx_20907_IX_tblWMSalesStatus",["intWMSalesStatusOrder","varWMSalesStatusName",],{unique:true})
export class tblWMSalesStatus {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intWMSalesStatusID"
        })
    intWMSalesStatusID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varWMSalesStatusName"
        })
    varWMSalesStatusName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMSalesStatusImage"
        })
    varWMSalesStatusImage:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMSalesStatusCreatedDate"
        })
    dteWMSalesStatusCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMSalesStatusModifiedDate"
        })
    dteWMSalesStatusModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:false,
        name:"intWMSalesStatusOrder"
        })
    intWMSalesStatusOrder:number;
        
}
