import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblFPCommunity",{schema:"public" } )
@Index("idx_17604_IX_tblFPCommunity",["dteFPCommunityCreatedDate","dteFPCommunityModifiedDate","intFPCommunityCommunityID","intFPCommunityFPID",],{unique:true})
export class tblFPCommunity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPCommunityID"
        })
    intFPCommunityID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPCommunityFPID"
        })
    intFPCommunityFPID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPCommunityCommunityID"
        })
    intFPCommunityCommunityID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPCommunityCreatedDate"
        })
    dteFPCommunityCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPCommunityModifiedDate"
        })
    dteFPCommunityModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPCommunityCreatedBy"
        })
    intFPCommunityCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPCommunityModifiedBy"
        })
    intFPCommunityModifiedBy:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPCommunityDeletedFlg"
        })
    bFPCommunityDeletedFlg:boolean;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varFPCommunityStatus"
        })
    varFPCommunityStatus:string;
        
}
