import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblAwards",{schema:"public" } )
export class tblAwards {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intAwardsID"
        })
    intAwardsID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varTitle"
        })
    varTitle:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intOrder"
        })
    intOrder:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCreatedDate"
        })
    dteCreatedDate:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varDescription"
        })
    varDescription:string | null;
        
}
