import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTTrafficGoal} from "./tblRTTrafficGoal";


@Entity("tblRTTrafficGoalCommunityGoal",{schema:"public" } )
export class tblRTTrafficGoalCommunityGoal {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTTrafficGoalCommunityGoalID"
        })
    intRTTrafficGoalCommunityGoalID:string;
        

   
    @ManyToOne(type=>tblRTTrafficGoal, tblRTTrafficGoal=>tblRTTrafficGoal.tblRtTrafficGoalCommunityGoals,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTTrafficGoalCommunityGoalGoalID'})
    intRtTrafficGoalCommunityGoalGoal:tblRTTrafficGoal | null;


    @Column("integer",{ 
        nullable:true,
        name:"intRTTrafficGoalCommunityGoalMonth"
        })
    intRTTrafficGoalCommunityGoalMonth:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTTrafficGoalCommunityGoalSalesGoal"
        })
    intRTTrafficGoalCommunityGoalSalesGoal:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTTrafficGoalCommunityGoalTrafficGoal"
        })
    intRTTrafficGoalCommunityGoalTrafficGoal:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTTrafficGoalCommunityGoalCreatedDate"
        })
    dteRTTrafficGoalCommunityGoalCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTTrafficGoalCommunityGoalModifiedDate"
        })
    dteRTTrafficGoalCommunityGoalModifiedDate:Date | null;
        
}
