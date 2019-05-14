import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblFPTrackOpenShared",{schema:"public" } )
export class tblFPTrackOpenShared {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPTrackOpenSharedID"
        })
    intFPTrackOpenSharedID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPTrackOpenSharedIntFPUserSavedFloorplanID"
        })
    intFPTrackOpenSharedIntFPUserSavedFloorplanID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPTrackOpenSharedDate"
        })
    dteFPTrackOpenSharedDate:Date;
        
}
