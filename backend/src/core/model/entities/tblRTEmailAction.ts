import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTEmailUserEmailAction} from "./tblRTEmailUserEmailAction";
import {tblRTEmailUserSummary} from "./tblRTEmailUserSummary";


@Entity("tblRTEmailAction",{schema:"public" } )
export class tblRTEmailAction {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTEmailActionID"
        })
    intRTEmailActionID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTEmailAction"
        })
    varRTEmailAction:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTEmailActionSort"
        })
    intRTEmailActionSort:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEmailActionCreatedDate"
        })
    dteRTEmailActionCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTEmailActionModifiedDate"
        })
    dteRTEmailActionModifiedDate:Date;
        

   
    @OneToMany(type=>tblRTEmailUserEmailAction, tblRTEmailUserEmailAction=>tblRTEmailUserEmailAction.intRtEmailUserEmailActionAction,{ onDelete: 'CASCADE' , })
    tblRtEmailUserEmailActions:tblRTEmailUserEmailAction[];
    

   
    @OneToMany(type=>tblRTEmailUserSummary, tblRTEmailUserSummary=>tblRTEmailUserSummary.intRtEmailUserSummaryEmailAction,{ onDelete: 'CASCADE' , })
    tblRtEmailUserSummarys:tblRTEmailUserSummary[];
    
}
