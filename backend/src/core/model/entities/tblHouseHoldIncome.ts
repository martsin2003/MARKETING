import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblHouseHoldIncome",{schema:"public" } )
export class tblHouseHoldIncome {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intHouseHoldIncomeID"
        })
    intHouseHoldIncomeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varHouseHoldIncome"
        })
    varHouseHoldIncome:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varHouseHoldIncome1"
        })
    varHouseHoldIncome1:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intHouseHoldIncomeOrder"
        })
    intHouseHoldIncomeOrder:number | null;
        
}
