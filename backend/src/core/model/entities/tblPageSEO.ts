import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblPageSEO",{schema:"public" } )
export class tblPageSEO {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intPageSEOID"
        })
    intPageSEOID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varPageSEOPage"
        })
    varPageSEOPage:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varPageSEOSection"
        })
    varPageSEOSection:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varPageSEOMetaTitle"
        })
    varPageSEOMetaTitle:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPageSEOMetaDescription"
        })
    varPageSEOMetaDescription:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPageSEOFooterBlurb"
        })
    varPageSEOFooterBlurb:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dtePageSEOCreatedDate"
        })
    dtePageSEOCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dtePageSEOModifiedDate"
        })
    dtePageSEOModifiedDate:Date | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intPageFlagId1"
        })
    intPageFlagId1:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intPageFlagId2"
        })
    intPageFlagId2:number | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varPageSEOStatus"
        })
    varPageSEOStatus:string;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'desktop'",
        name:"varPageSEOPlatform"
        })
    varPageSEOPlatform:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varPageSEORewrite"
        })
    varPageSEORewrite:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varPageSEOMetaKeywords"
        })
    varPageSEOMetaKeywords:string | null;
        
}
