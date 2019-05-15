import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunity} from "./tblCommunity";
import {tblCommunityARHeaderGraphicCategory} from "./tblCommunityARHeaderGraphicCategory";


@Entity("tblCommunityARHeaderGraphic",{schema:"public" } )
export class tblCommunityARHeaderGraphic {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityARHeaderGraphicID"
        })
    intCommunityARHeaderGraphicID:string;
        

   
    @ManyToOne(type=>tblCommunity, tblCommunity=>tblCommunity.tblCommunityArHeaderGraphics,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intCommunityARHeaderGraphicCommunityID'})
    intCommunityArHeaderGraphicCommunity:tblCommunity | null;


   
    @ManyToOne(type=>tblCommunityARHeaderGraphicCategory, tblCommunityARHeaderGraphicCategory=>tblCommunityARHeaderGraphicCategory.tblCommunityArHeaderGraphics,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'varCommunityARHeaderGraphicAR'})
    varCommunityArHeaderGraphicAr:tblCommunityARHeaderGraphicCategory | null;


    @Column("text",{ 
        nullable:false,
        name:"varCommunityARHeaderGraphicFilename"
        })
    varCommunityARHeaderGraphicFilename:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varCommunityARHeaderGraphicStatus"
        })
    varCommunityARHeaderGraphicStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityARHeaderGraphicCreatedDate"
        })
    dteCommunityARHeaderGraphicCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityARHeaderGraphicModifiedDate"
        })
    dteCommunityARHeaderGraphicModifiedDate:Date;
        
}
