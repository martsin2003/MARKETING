import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblRTDisplayAdGroup} from "./tblRTDisplayAdGroup";
import {tblRTDisplayGoalKeywordData} from "./tblRTDisplayGoalKeywordData";
import {tblRTDisplayKeywordData} from "./tblRTDisplayKeywordData";


@Entity("tblRTDisplayKeyword",{schema:"public" } )
@Index("idx_19811_IX_tblRTDisplayKeyword",["intRTDisplayKeywordAPIID","intRTDisplayKeywordID","intRtDisplayKeywordRtDisplayAdGroup","varRTDisplayKeyword","varRTDisplayKeywordMatchType","varRTDisplayKeywordStatus",],{unique:true})
export class tblRTDisplayKeyword {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTDisplayKeywordID"
        })
    intRTDisplayKeywordID:string;
        

   
    @ManyToOne(type=>tblRTDisplayAdGroup, tblRTDisplayAdGroup=>tblRTDisplayAdGroup.tblRtDisplayKeywords,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intRTDisplayKeywordRTDisplayAdGroupID'})
    intRtDisplayKeywordRtDisplayAdGroup:tblRTDisplayAdGroup | null;


    @Column("text",{ 
        nullable:false,
        name:"varRTDisplayKeyword"
        })
    varRTDisplayKeyword:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'eligible'",
        name:"varRTDisplayKeywordStatus"
        })
    varRTDisplayKeywordStatus:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'enabled'",
        name:"varRTDisplayKeywordState"
        })
    varRTDisplayKeywordState:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'broad'",
        name:"varRTDisplayKeywordMatchType"
        })
    varRTDisplayKeywordMatchType:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayKeywordCreatedDate"
        })
    dteRTDisplayKeywordCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTDisplayKeywordModifiedDate"
        })
    dteRTDisplayKeywordModifiedDate:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"intRTDisplayKeywordAPIID"
        })
    intRTDisplayKeywordAPIID:string;
        

   
    @OneToMany(type=>tblRTDisplayGoalKeywordData, tblRTDisplayGoalKeywordData=>tblRTDisplayGoalKeywordData.intRtDisplayGoalKeywordDataRtDisplayKeyword,{ onDelete: 'CASCADE' , })
    tblRtDisplayGoalKeywordDatas:tblRTDisplayGoalKeywordData[];
    

   
    @OneToMany(type=>tblRTDisplayKeywordData, tblRTDisplayKeywordData=>tblRTDisplayKeywordData.intRtDisplayKeywordDataRtDisplayKeyword,{ onDelete: 'CASCADE' , })
    tblRtDisplayKeywordDatas:tblRTDisplayKeywordData[];
    
}
