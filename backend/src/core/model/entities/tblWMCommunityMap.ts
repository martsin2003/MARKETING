import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblWMCommunity} from "./tblWMCommunity";


@Entity("tblWMCommunityMap",{schema:"public" } )
export class tblWMCommunityMap {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intWMCommunityMapID"
        })
    intWMCommunityMapID:string;
        

   
    @ManyToOne(type=>tblWMCommunity, tblWMCommunity=>tblWMCommunity.tblWmCommunityMaps,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intWMCommunityMapWMCommunityID'})
    intWmCommunityMapWmCommunity:tblWMCommunity | null;


    @Column("text",{ 
        nullable:false,
        name:"varWMCommunityMapOverlayImageFilename"
        })
    varWMCommunityMapOverlayImageFilename:string;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltWMCommunityMapCenterLatitude"
        })
    fltWMCommunityMapCenterLatitude:number;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltWMCommunityMapCenterLongitude"
        })
    fltWMCommunityMapCenterLongitude:number;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltWMCommunityMapNWLatitude"
        })
    fltWMCommunityMapNWLatitude:number;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltWMCommunityMapNWLongitude"
        })
    fltWMCommunityMapNWLongitude:number;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltWMCommunityMapSELatitude"
        })
    fltWMCommunityMapSELatitude:number;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'0'",
        precision:53,
        name:"fltWMCommunityMapSELongitude"
        })
    fltWMCommunityMapSELongitude:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intWMCommunityMapInitialZoom"
        })
    intWMCommunityMapInitialZoom:number;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varWMCommunityMapStatus"
        })
    varWMCommunityMapStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMCommunityMapCreatedDate"
        })
    dteWMCommunityMapCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMCommunityMapModifiedDate"
        })
    dteWMCommunityMapModifiedDate:Date;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'mercator'",
        name:"varWMCommunityMapCRS"
        })
    varWMCommunityMapCRS:string;
        

    @Column("double precision",{ 
        nullable:false,
        default: () => "'2'",
        precision:53,
        name:"fltWMCommunityMapZoomScaleFactor"
        })
    fltWMCommunityMapZoomScaleFactor:number;
        
}
