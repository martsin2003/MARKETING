import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFinancePlan} from "./tblFinancePlan";


@Entity("tblPreferredLender",{schema:"public" } )
export class tblPreferredLender {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intPreferredLenderID"
        })
    intPreferredLenderID:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderImage"
        })
    varPreferredLenderImage:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderCompanyURL"
        })
    varPreferredLenderCompanyURL:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"txtPreferredLenderBlock"
        })
    txtPreferredLenderBlock:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intNavOrder"
        })
    intNavOrder:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderCompany"
        })
    varPreferredLenderCompany:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderEmail"
        })
    varPreferredLenderEmail:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderFax"
        })
    varPreferredLenderFax:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderLastName"
        })
    varPreferredLenderLastName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderAddress"
        })
    varPreferredLenderAddress:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderAddress2"
        })
    varPreferredLenderAddress2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderCity"
        })
    varPreferredLenderCity:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderCompanyURL2"
        })
    varPreferredLenderCompanyURL2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderFirstName"
        })
    varPreferredLenderFirstName:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderLogo"
        })
    varPreferredLenderLogo:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderMobilePhone"
        })
    varPreferredLenderMobilePhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderOfficePhone"
        })
    varPreferredLenderOfficePhone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderPassword"
        })
    varPreferredLenderPassword:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderState"
        })
    varPreferredLenderState:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderUsername"
        })
    varPreferredLenderUsername:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderZip"
        })
    varPreferredLenderZip:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPreferredLenderStatus"
        })
    varPreferredLenderStatus:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dtePreferredLenderCreatedDate"
        })
    dtePreferredLenderCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dtePreferredLenderModifiedDate"
        })
    dtePreferredLenderModifiedDate:Date;
        

   
    @OneToMany(type=>tblFinancePlan, tblFinancePlan=>tblFinancePlan.intFinancePlanFinancePlanLender,{ onDelete: 'SET NULL' , })
    tblFinancePlans:tblFinancePlan[];
    
}
