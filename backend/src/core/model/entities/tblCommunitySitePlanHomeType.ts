import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunity} from "./tblCommunity";


@Entity("tblCommunitySitePlanHomeType",{schema:"public" } )
export class tblCommunitySitePlanHomeType {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunitySitePlanHomeTypeID"
        })
    intCommunitySitePlanHomeTypeID:string;
        

   
    @ManyToOne(type=>tblCommunity, tblCommunity=>tblCommunity.tblCommunitySitePlanHomeTypes,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intCommunitySitePlanHomeTypeCommunityID'})
    intCommunitySitePlanHomeTypeCommunity:tblCommunity | null;


    @Column("text",{ 
        nullable:false,
        name:"varCommunitySitePlanHomeTypeName"
        })
    varCommunitySitePlanHomeTypeName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varCommunitySitePlanHomeTypeColor"
        })
    varCommunitySitePlanHomeTypeColor:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intCommunitySitePlanHomeTypeNavOrder"
        })
    intCommunitySitePlanHomeTypeNavOrder:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunitySitePlanHomeTypeCreatedDate"
        })
    dteCommunitySitePlanHomeTypeCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunitySitePlanHomeTypeModifiedDate"
        })
    dteCommunitySitePlanHomeTypeModifiedDate:Date;
        
}
