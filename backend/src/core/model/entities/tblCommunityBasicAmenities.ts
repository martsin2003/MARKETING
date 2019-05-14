import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityBasicAmenities",{schema:"public" } )
export class tblCommunityBasicAmenities {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityBasicAmenityID"
        })
    intCommunityBasicAmenityID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityBasicAmenityText"
        })
    txtCommunityBasicAmenityText:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityBasicAmenityCommunityID"
        })
    intCommunityBasicAmenityCommunityID:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bCommunityBasicAmenityNearby"
        })
    bCommunityBasicAmenityNearby:boolean;
        

    @Column("integer",{ 
        nullable:true,
        name:"intNavOrder"
        })
    intNavOrder:number | null;
        
}
