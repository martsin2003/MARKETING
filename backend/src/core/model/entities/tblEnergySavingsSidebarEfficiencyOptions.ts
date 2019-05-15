import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblEnergySavingsSidebarEfficiencyOptions",{schema:"public" } )
export class tblEnergySavingsSidebarEfficiencyOptions {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intEnergySavingsSidebarEfficiencyOptionsID"
        })
    intEnergySavingsSidebarEfficiencyOptionsID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varEnergySavingsSidebarEfficiencyOptionsBlock1"
        })
    varEnergySavingsSidebarEfficiencyOptionsBlock1:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtEnergySavingsSidebarEfficiencyOptionsBlock2"
        })
    txtEnergySavingsSidebarEfficiencyOptionsBlock2:string | null;
        
}
