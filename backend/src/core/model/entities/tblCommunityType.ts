import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunityType",{schema:"public" } )
export class tblCommunityType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunityTypeID"
        })
    intCommunityTypeID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCommunityType"
        })
    txtCommunityType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityTypeAbv"
        })
    varCommunityTypeAbv:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityTypeStyle"
        })
    varCommunityTypeStyle:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intCommunityTypeOrder"
        })
    intCommunityTypeOrder:number;
        
}
