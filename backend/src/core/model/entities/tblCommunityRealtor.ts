import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunityRealtorReturnTrack} from "./tblCommunityRealtorReturnTrack";


@Entity("tblCommunityRealtor",{schema:"public" } )
@Index("idx_16952_IX_A1_tblCommunityRealtor",["intCommunityRealtorCommunityID","intCommunityRealtorRealtorID",])
export class tblCommunityRealtor {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityRealtorID"
        })
    intCommunityRealtorID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityRealtorCommunityID"
        })
    intCommunityRealtorCommunityID:number | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intCommunityRealtorRealtorID"
        })
    intCommunityRealtorRealtorID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityRealtorComments"
        })
    txtCommunityRealtorComments:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityRealtorTopTen"
        })
    bCommunityRealtorTopTen:boolean | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityRealtorRealtorFirstContactTypeID"
        })
    intCommunityRealtorRealtorFirstContactTypeID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityRealtorRealtorRatingID"
        })
    intCommunityRealtorRealtorRatingID:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityRealtorCreatedDate"
        })
    dteCommunityRealtorCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteCommunityRealtorModifiedDate"
        })
    dteCommunityRealtorModifiedDate:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityRealtorOfficeID"
        })
    intCommunityRealtorOfficeID:number | null;
        

   
    @OneToMany(type=>tblCommunityRealtorReturnTrack, tblCommunityRealtorReturnTrack=>tblCommunityRealtorReturnTrack.intCommunityRealtorReturnTrackCommunityRealtor,{ onDelete: 'CASCADE' , })
    tblCommunityRealtorReturnTracks:tblCommunityRealtorReturnTrack[];
    
}
