import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRealtorFirstContactType",{schema:"public" } )
export class tblRealtorFirstContactType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRealtorFirstContactTypeID"
        })
    intRealtorFirstContactTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorFirstContactType"
        })
    varRealtorFirstContactType:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRealtorFirstContactTypeOrder"
        })
    intRealtorFirstContactTypeOrder:number;
        
}
