import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblSiteplanStageJoined",{schema:"public" } )
export class tblSiteplanStageJoined {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intSiteplanStageJoinedID"
        })
    intSiteplanStageJoinedID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intCommunityProjectID"
        })
    intCommunityProjectID:number;
        

    @Column("text",{ 
        nullable:false,
        name:"varProjectCode"
        })
    varProjectCode:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varSiteplanLotIdentifier"
        })
    varSiteplanLotIdentifier:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intSiteplanLotSqFt"
        })
    intSiteplanLotSqFt:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intSiteplanLotAcres"
        })
    intSiteplanLotAcres:number;
        

    @Column("numeric",{ 
        nullable:false,
        name:"curSiteplanLotPrice"
        })
    curSiteplanLotPrice:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varSiteplanLotStatus"
        })
    varSiteplanLotStatus:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanAddress"
        })
    varSiteplanAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanCity"
        })
    varSiteplanCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanState"
        })
    varSiteplanState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanZip"
        })
    varSiteplanZip:string | null;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"fltSiteplanLotLat"
        })
    fltSiteplanLotLat:number;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"fltSiteplanLotLong"
        })
    fltSiteplanLotLong:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"rnk"
        })
    rnk:number;
        

    @Column("integer",{ 
        nullable:true,
        name:"intSiteplanIDOrig"
        })
    intSiteplanIDOrig:number | null;
        
}
