import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRealtorOfficeStage",{schema:"public" } )
export class tblRealtorOfficeStage {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRealtorOfficeStageID"
        })
    intRealtorOfficeStageID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRealtorSSOfficeID"
        })
    intRealtorSSOfficeID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeName"
        })
    varRealtorOfficeName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeAddress"
        })
    varRealtorOfficeAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeCity"
        })
    varRealtorOfficeCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeState"
        })
    varRealtorOfficeState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeZip"
        })
    varRealtorOfficeZip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficePhone"
        })
    varRealtorOfficePhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varRealtorOfficeComms"
        })
    varRealtorOfficeComms:string | null;
        
}
