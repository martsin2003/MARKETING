import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunitySiteplanStage",{schema:"public" } )
export class tblCommunitySiteplanStage {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunitySiteplanStageID"
        })
    intCommunitySiteplanStageID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"intCommunitySiteplanCommunityProjectCode"
        })
    intCommunitySiteplanCommunityProjectCode:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotIdentifier"
        })
    varSiteplanLotIdentifier:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotAddress"
        })
    varSiteplanLotAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotCity"
        })
    varSiteplanLotCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotState"
        })
    varSiteplanLotState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotZip"
        })
    varSiteplanLotZip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotStatus"
        })
    varSiteplanLotStatus:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        name:"curSiteplanLotPrice"
        })
    curSiteplanLotPrice:string | null;
        
}
