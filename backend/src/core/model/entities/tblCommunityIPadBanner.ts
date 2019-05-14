import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityIPadBanner",{schema:"public" } )
export class tblCommunityIPadBanner {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityIPadBannerID"
        })
    intCommunityIPadBannerID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityID"
        })
    intCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityIPadBannerCaption"
        })
    varCommunityIPadBannerCaption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityIPadBannerSrc"
        })
    varCommunityIPadBannerSrc:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intNavOrder"
        })
    intNavOrder:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCRMCommunityID"
        })
    intCRMCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityIPadBannerSectionOld"
        })
    varCommunityIPadBannerSectionOld:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityIPadBannerSection"
        })
    varCommunityIPadBannerSection:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityIPadBannerCreatedDate"
        })
    dteCommunityIPadBannerCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityIPadBannerModifiedDate"
        })
    dteCommunityIPadBannerModifiedDate:Date;
        
}
