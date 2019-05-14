import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblProcessActivities",{schema:"public" } )
export class tblProcessActivities {

    @Column("integer",{ 
        nullable:true,
        name:"lngTrafficReportID"
        })
    lngTrafficReportID:number | null;
        

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intProcessActivitiesID"
        })
    intProcessActivitiesID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varProcessActivitiesSalesCounselor"
        })
    varProcessActivitiesSalesCounselor:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesSchedAppts"
        })
    intProcessActivitiesSchedAppts:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesHeldAppts"
        })
    intProcessActivitiesHeldAppts:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesHomeDemos"
        })
    intProcessActivitiesHomeDemos:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesLotDemos"
        })
    intProcessActivitiesLotDemos:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesOwnEst"
        })
    intProcessActivitiesOwnEst:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesCancelation"
        })
    intProcessActivitiesCancelation:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesLotHolds"
        })
    intProcessActivitiesLotHolds:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesSales"
        })
    intProcessActivitiesSales:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngProcessActivitiesCnt"
        })
    lngProcessActivitiesCnt:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesRealtorPreviews"
        })
    intProcessActivitiesRealtorPreviews:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteProcessActivitiesModified"
        })
    dteProcessActivitiesModified:Date | null;
        
}
