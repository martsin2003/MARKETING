import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblCustomContentProgramSubmissions",{schema:"public" } )
export class tblCustomContentProgramSubmissions {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intProgramSubmissionsId"
        })
    intProgramSubmissionsId:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varFirstName"
        })
    varFirstName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varLastName"
        })
    varLastName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varEmail"
        })
    varEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varAddress"
        })
    varAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCity"
        })
    varCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varZip"
        })
    varZip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCommunityName"
        })
    varCommunityName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtComments"
        })
    txtComments:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferredLeadFirstName"
        })
    varReferredLeadFirstName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferredLeadLastName"
        })
    varReferredLeadLastName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferredEmail"
        })
    varReferredEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferredCommunityName"
        })
    varReferredCommunityName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferredCity"
        })
    varReferredCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferredState"
        })
    varReferredState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varReferredZip"
        })
    varReferredZip:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteProgramSubmissionCreated"
        })
    dteProgramSubmissionCreated:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteProgramSubmissionModified"
        })
    dteProgramSubmissionModified:Date | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varCurrentStatus"
        })
    varCurrentStatus:string | null;
        
}
