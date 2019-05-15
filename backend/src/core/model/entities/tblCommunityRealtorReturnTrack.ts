import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunityRealtor} from "./tblCommunityRealtor";


@Entity("tblCommunityRealtorReturnTrack",{schema:"public" } )
export class tblCommunityRealtorReturnTrack {

   
    @ManyToOne(type=>tblCommunityRealtor, tblCommunityRealtor=>tblCommunityRealtor.tblCommunityRealtorReturnTracks,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intCommunityRealtorReturnTrackCommunityRealtorID'})
    intCommunityRealtorReturnTrackCommunityRealtor:tblCommunityRealtor | null;


    @Column("timestamp with time zone",{ 
        nullable:false,
        primary:true,
        name:"dteCommunityRealtorReturnTrackReturnDate"
        })
    dteCommunityRealtorReturnTrackReturnDate:Date;
        
}
