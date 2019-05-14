import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTConfigSiteCredential",{schema:"public" } )
export class tblRTConfigSiteCredential {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTConfigSiteCredentialID"
        })
    intRTConfigSiteCredentialID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTConfigSiteCredentialRTConfigSiteID"
        })
    intRTConfigSiteCredentialRTConfigSiteID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTConfigSiteCredentialRTCredentialProviderConfigID"
        })
    intRTConfigSiteCredentialRTCredentialProviderConfigID:number;
        

    @Column("text",{ 
        nullable:true,
        name:"varRTConfigSiteCredentialValue"
        })
    varRTConfigSiteCredentialValue:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intRTConfigSiteCredentialValue"
        })
    intRTConfigSiteCredentialValue:number | null;
        

    @Column("boolean",{ 
        nullable:true,
        name:"bRTConfigSiteCredentialValue"
        })
    bRTConfigSiteCredentialValue:boolean | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteRTConfigSiteCredentialValue"
        })
    dteRTConfigSiteCredentialValue:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTConfigSiteCredentialCreatedDate"
        })
    dteRTConfigSiteCredentialCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTConfigSiteCredentialModifiedDate"
        })
    dteRTConfigSiteCredentialModifiedDate:Date;
        
}
