import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblSiteplanStage",{schema:"public" } )
export class tblSiteplanStage {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intSiteplanID"
        })
    intSiteplanID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotSection"
        })
    varSiteplanLotSection:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotLetter"
        })
    varSiteplanLotLetter:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intSiteplanLotNumber"
        })
    intSiteplanLotNumber:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotInstanceID"
        })
    varSiteplanLotInstanceID:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intSiteplanCommunityID"
        })
    intSiteplanCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotStatus"
        })
    varSiteplanLotStatus:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        default: () => "'0'",
        name:"curSiteplanLotPrice"
        })
    curSiteplanLotPrice:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intSiteplanLotSqFt"
        })
    intSiteplanLotSqFt:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotImgPath"
        })
    varSiteplanLotImgPath:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotHomeFeatures"
        })
    varSiteplanLotHomeFeatures:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtSiteplanLotAmenityDetails"
        })
    txtSiteplanLotAmenityDetails:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotLat"
        })
    varSiteplanLotLat:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotLong"
        })
    varSiteplanLotLong:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varSiteplanLotAcres"
        })
    varSiteplanLotAcres:string | null;
        

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
        

    @Column("integer",{ 
        nullable:true,
        name:"intSiteplanCommunityProjectID"
        })
    intSiteplanCommunityProjectID:number | null;
        
}
