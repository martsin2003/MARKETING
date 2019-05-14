import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityAmenity",{schema:"public" } )
export class tblCommunityAmenity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intAmenityCommunityID"
        })
    intAmenityCommunityID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intAmenityCommunityCommunityID"
        })
    intAmenityCommunityCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityDesc"
        })
    varAmenityDesc:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityUrl"
        })
    varAmenityUrl:string | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"fltAmenityLatitude"
        })
    fltAmenityLatitude:number | null;
        

    @Column("double precision",{ 
        nullable:true,
        precision:53,
        name:"fltAmenityLongitude"
        })
    fltAmenityLongitude:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intAmenityCommunityCategoryID"
        })
    intAmenityCommunityCategoryID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intNavOrder"
        })
    intNavOrder:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityAddress"
        })
    varAmenityAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityCity"
        })
    varAmenityCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityDirections"
        })
    varAmenityDirections:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityEmail"
        })
    varAmenityEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityPhone"
        })
    varAmenityPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityState"
        })
    varAmenityState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityTitle"
        })
    varAmenityTitle:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAmenityZip"
        })
    varAmenityZip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varDistanceFromCommunity"
        })
    varDistanceFromCommunity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varExtraLine"
        })
    varExtraLine:string | null;
        
}
