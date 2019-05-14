import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityPlanHEOption",{schema:"public" } )
export class tblCommunityPlanHEOption {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityPlanHEOptionID"
        })
    intCommunityPlanHEOptionID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityPlanHEOptionCommunityCRMSiteID"
        })
    intCommunityPlanHEOptionCommunityCRMSiteID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityPlanHEOptionCommunityProjectID"
        })
    intCommunityPlanHEOptionCommunityProjectID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityPlanHEOptionHEOptionID"
        })
    intCommunityPlanHEOptionHEOptionID:number | null;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curCommunityPlanHEOptionHEOptionUnitPrice"
        })
    curCommunityPlanHEOptionHEOptionUnitPrice:string;
        
}
