import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblReferralProgram",{schema:"public" } )
export class tblReferralProgram {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intReferralProgramID"
        })
    intReferralProgramID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferralProgramAmountReferrer"
        })
    varReferralProgramAmountReferrer:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferralProgramAmountFriend"
        })
    varReferralProgramAmountFriend:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferralProgramText"
        })
    varReferralProgramText:string | null;
        
}
