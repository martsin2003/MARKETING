import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblRTCredentialProviderConfig",{schema:"public" } )
export class tblRTCredentialProviderConfig {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intRTCredentialProviderConfigID"
        })
    intRTCredentialProviderConfigID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCredentialProviderConfigRTCredentialProviderID"
        })
    intRTCredentialProviderConfigRTCredentialProviderID:number;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTCredentialProviderConfigName"
        })
    varRTCredentialProviderConfigName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTCredentialProviderConfigLabel"
        })
    varRTCredentialProviderConfigLabel:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varRTCredentialProviderConfigDataType"
        })
    varRTCredentialProviderConfigDataType:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bRTCredentialProviderConfigReqd"
        })
    bRTCredentialProviderConfigReqd:boolean;
        

    @Column("integer",{ 
        nullable:false,
        name:"intRTCredentialProviderConfigOrder"
        })
    intRTCredentialProviderConfigOrder:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTCredentialProviderConfigCreatedDate"
        })
    dteRTCredentialProviderConfigCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteRTCredentialProviderConfigModifiedDate"
        })
    dteRTCredentialProviderConfigModifiedDate:Date;
        
}
