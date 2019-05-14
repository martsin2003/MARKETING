import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTGAGoal} from "./tblRTGAGoal";


@Entity("tblRTGAGoalData",{schema:"public" } )
@Index("idx_20113_IX_tblRTGAGoalData",["dteRTGAGoalDataDate","intRTGAGoalDataID","intRtgaGoalDataRtgaGoal","intRTGAGoalDataValue",],{unique:true})
export class tblRTGAGoalData {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTGAGoalDataID"
        })
    intRTGAGoalDataID:string;
        

   
    @ManyToOne(type=>tblRTGAGoal, tblRTGAGoal=>tblRTGAGoal.tblRtgaGoalDatas,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTGAGoalDataRTGAGoalID'})
    intRtgaGoalDataRtgaGoal:tblRTGAGoal | null;


    @Column("integer",{ 
        nullable:false,
        name:"intRTGAGoalDataValue"
        })
    intRTGAGoalDataValue:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTGAGoalDataDate"
        })
    dteRTGAGoalDataDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTGAGoalDataCreatedDate"
        })
    dteRTGAGoalDataCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTGAGoalDataModifiedDate"
        })
    dteRTGAGoalDataModifiedDate:Date;
        
}
