import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblTrafficReport} from "./tblTrafficReport";


@Entity("tblNewTrafficSource",{schema:"public" } )
export class tblNewTrafficSource {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"lngNewTrafficSourceID"
        })
    lngNewTrafficSourceID:string;
        

   
    @ManyToOne(type=>tblTrafficReport, tblTrafficReport=>tblTrafficReport.tblNewTrafficSources,{ onDelete: 'CASCADE', })
    @JoinColumn({ name:'lngTrafficReportID'})
    lngTrafficReport:tblTrafficReport | null;


    @Column("integer",{ 
        nullable:true,
        name:"lngSourceID"
        })
    lngSourceID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSourceName"
        })
    txtSourceName:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngNewTrafficCount"
        })
    lngNewTrafficCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngNewTrafficWebChatCount"
        })
    lngNewTrafficWebChatCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngNewTrafficWebRegCount"
        })
    lngNewTrafficWebRegCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngNewTrafficListingSiteCount"
        })
    lngNewTrafficListingSiteCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngNewTrafficWebDirectCount"
        })
    lngNewTrafficWebDirectCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngNewTrafficCallInCount"
        })
    lngNewTrafficCallInCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngNewTrafficWalkInCount"
        })
    lngNewTrafficWalkInCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngNewTrafficOSCAsgdCount"
        })
    lngNewTrafficOSCAsgdCount:number | null;
        
}
