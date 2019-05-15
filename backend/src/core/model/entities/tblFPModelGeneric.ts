import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblFPModelGeneric",{schema:"public" } )
export class tblFPModelGeneric {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPModelGenericID"
        })
    intFPModelGenericID:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPModelGenericFPID"
        })
    intFPModelGenericFPID:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPModelGenericModelGenericID"
        })
    intFPModelGenericModelGenericID:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPModelGenericCreatedDate"
        })
    dteFPModelGenericCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPModelGenericModifiedDate"
        })
    dteFPModelGenericModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPModelGenericCreatedBy"
        })
    intFPModelGenericCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPModelGenericModifiedBy"
        })
    intFPModelGenericModifiedBy:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPModelGenericDeletedFlg"
        })
    bFPModelGenericDeletedFlg:boolean;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varFPModelGenericStatus"
        })
    varFPModelGenericStatus:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intFPModelGenericFPElevationID"
        })
    intFPModelGenericFPElevationID:number;
        
}
