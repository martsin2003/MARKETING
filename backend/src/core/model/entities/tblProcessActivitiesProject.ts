import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblProcessActivitiesProject",{schema:"public" } )
export class tblProcessActivitiesProject {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intProcessActivitiesProjectID"
        })
    intProcessActivitiesProjectID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngTrafficReportID"
        })
    lngTrafficReportID:number | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intProcessActivitiesProjectUserID"
        })
    intProcessActivitiesProjectUserID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intProcessActivitiesProjectCommunityProjectID"
        })
    intProcessActivitiesProjectCommunityProjectID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varProcessActivitiesProjectProject"
        })
    varProcessActivitiesProjectProject:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varProcessActivitiesProjectSalesCounselor"
        })
    varProcessActivitiesProjectSalesCounselor:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intProcessActivitiesProjectPresentations"
        })
    intProcessActivitiesProjectPresentations:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngProcessActivitiesProjectCnt"
        })
    lngProcessActivitiesProjectCnt:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteProcessActivitiesProjectModified"
        })
    dteProcessActivitiesProjectModified:Date | null;
        
}
