import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblQualifyMonthlyPayment",{schema:"public" } )
export class tblQualifyMonthlyPayment {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intQualifyMonthlyPaymentID"
        })
    intQualifyMonthlyPaymentID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyMonthlyPaymentValue"
        })
    varQualifyMonthlyPaymentValue:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varQualifyMonthlyPaymentDisplay"
        })
    varQualifyMonthlyPaymentDisplay:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyMonthlyPaymentSort"
        })
    intQualifyMonthlyPaymentSort:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intQualifyMonthlyPaymentScore"
        })
    intQualifyMonthlyPaymentScore:number | null;
        
}
