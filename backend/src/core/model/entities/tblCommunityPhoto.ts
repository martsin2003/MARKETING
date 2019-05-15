import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityPhoto",{schema:"public" } )
export class tblCommunityPhoto {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityPhotoID"
        })
    intCommunityPhotoID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityID"
        })
    intCommunityID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityPhotoCaption"
        })
    txtCommunityPhotoCaption:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityPhotoSrc"
        })
    txtCommunityPhotoSrc:string | null;
        

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
        name:"varCommunityPhotoCategory"
        })
    varCommunityPhotoCategory:string | null;
        

    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"bCommunityPhotoDefault"
        })
    bCommunityPhotoDefault:boolean | null;
        
}
