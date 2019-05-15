import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblEnergySavings",{schema:"public" } )
export class tblEnergySavings {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intEnergySavingsID"
        })
    intEnergySavingsID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intEnergySavingsCommunityID"
        })
    intEnergySavingsCommunityID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEnergySavingsBlock1"
        })
    txtEnergySavingsBlock1:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEnergySavingsBlock2"
        })
    txtEnergySavingsBlock2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEnergySavingsBlock3"
        })
    txtEnergySavingsBlock3:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEnergySavingsBlock4"
        })
    txtEnergySavingsBlock4:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEnergySavingsBlock5"
        })
    txtEnergySavingsBlock5:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varEnergySavingsImage1"
        })
    varEnergySavingsImage1:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEnergySavingsDisclaimer"
        })
    txtEnergySavingsDisclaimer:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varEnergySavingsPDF"
        })
    varEnergySavingsPDF:string | null;
        
}
