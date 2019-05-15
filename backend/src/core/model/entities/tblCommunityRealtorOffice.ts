import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityRealtorOffice",{schema:"public" } )
@Index("idx_16962_IX_A2_tblCommunityRealtorOffice",["intCommunityRealtorOfficeCommunityID","intCommunityRealtorOfficeRealtorOfficeID",])
@Index("idx_16962_IX_A3_tblCommunityRealtorOffice",["intCommunityRealtorOfficeRealtorOfficeID",])
export class tblCommunityRealtorOffice {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityRealtorOfficeID"
        })
    intCommunityRealtorOfficeID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intCommunityRealtorOfficeCommunityID"
        })
    intCommunityRealtorOfficeCommunityID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intCommunityRealtorOfficeRealtorOfficeID"
        })
    intCommunityRealtorOfficeRealtorOfficeID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityRealtorOfficeCreatedDate"
        })
    dteCommunityRealtorOfficeCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityRealtorOfficeModifiedDate"
        })
    dteCommunityRealtorOfficeModifiedDate:Date;
        
}
