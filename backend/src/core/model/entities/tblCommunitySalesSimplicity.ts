import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCommunitySalesSimplicity",{schema:"public" } )
export class tblCommunitySalesSimplicity {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCommunitySalesSimplicityID"
        })
    intCommunitySalesSimplicityID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunitySalesSimplicityCommunityID"
        })
    intCommunitySalesSimplicityCommunityID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunitySalesSimplicitySubDivisionCode"
        })
    intCommunitySalesSimplicitySubDivisionCode:number | null;
        
}
