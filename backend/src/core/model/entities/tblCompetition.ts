import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCompetition",{schema:"public" } )
export class tblCompetition {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intCompetitionID"
        })
    intCompetitionID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCompetitionCnt"
        })
    intCompetitionCnt:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngTrafficReportID"
        })
    lngTrafficReportID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCompetitionBuilder"
        })
    varCompetitionBuilder:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCompetitionPhone"
        })
    varCompetitionPhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCompetitionCommunity"
        })
    varCompetitionCommunity:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCompetitionCommunityID"
        })
    intCompetitionCommunityID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCompetitionTraffic"
        })
    intCompetitionTraffic:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCompetitionSalesWeek"
        })
    intCompetitionSalesWeek:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCompetitionSalesMTD"
        })
    intCompetitionSalesMTD:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCompetitionAvgPrice"
        })
    varCompetitionAvgPrice:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCompetitionHomesAvail"
        })
    intCompetitionHomesAvail:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtCompetitionNotes"
        })
    txtCompetitionNotes:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCompetitionCompetitionMainID"
        })
    intCompetitionCompetitionMainID:number | null;
        
}
