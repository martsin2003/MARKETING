import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblWMSection} from "./tblWMSection";


@Entity("tblWMSectionOutlyingLotMarking",{schema:"public" } )
export class tblWMSectionOutlyingLotMarking {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intWMSectionOutlyingLotMarkingID"
        })
    intWMSectionOutlyingLotMarkingID:string;
        

   
    @ManyToOne(type=>tblWMSection, tblWMSection=>tblWMSection.tblWmSectionOutlyingLotMarkings,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intWMSectionOutlyingLotMarkingWMSectionID'})
    intWmSectionOutlyingLotMarkingWmSection:tblWMSection | null;


    @Column("text",{ 
        nullable:true,
        name:"varWMSectionOutlyingLotMarkingPolygonJSON"
        })
    varWMSectionOutlyingLotMarkingPolygonJSON:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMSectionOutlyingLotMarkingLabelJSON"
        })
    varWMSectionOutlyingLotMarkingLabelJSON:string | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varWMSectionOutlyingLotMarkingStatus"
        })
    varWMSectionOutlyingLotMarkingStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMSectionOutlyingLotMarkingCreatedDate"
        })
    dteWMSectionOutlyingLotMarkingCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteWMSectionOutlyingLotMarkingModifiedDate"
        })
    dteWMSectionOutlyingLotMarkingModifiedDate:Date;
        

    @Column("text",{ 
        nullable:true,
        name:"varWMSectionOutlyingLotMarkingPolylineJSON"
        })
    varWMSectionOutlyingLotMarkingPolylineJSON:string | null;
        
}
