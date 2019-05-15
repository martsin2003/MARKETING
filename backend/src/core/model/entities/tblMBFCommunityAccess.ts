import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunity} from "./tblCommunity";


@Entity("tblMBFCommunityAccess",{schema:"public" } )
export class tblMBFCommunityAccess {

    @Column("integer",{ 
        nullable:false,
        primary:true,
        name:"intMBFCommunityAccessLngUserID"
        })
    intMBFCommunityAccessLngUserID:number;
        

   
    @ManyToOne(type=>tblCommunity, tblCommunity=>tblCommunity.tblMbfCommunityAccesss,{ primary:true, nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intMBFCommunityAccessCommunityID'})
    intMbfCommunityAccessCommunity:tblCommunity | null;

}
