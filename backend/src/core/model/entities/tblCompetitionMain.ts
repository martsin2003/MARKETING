import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCompetitionMain",{schema:"public" } )
export class tblCompetitionMain {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCompetitionMainID"
        })
    intCompetitionMainID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varCompetitionMainBuilder"
        })
    varCompetitionMainBuilder:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCompetitionMainPhone"
        })
    varCompetitionMainPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCompetitionMainCommunity"
        })
    varCompetitionMainCommunity:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCompetitionMainCommunityID"
        })
    intCompetitionMainCommunityID:number | null;
        
}
