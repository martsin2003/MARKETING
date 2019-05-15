import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblCommunityARHeaderGraphicARType} from "./tblCommunityARHeaderGraphicARType";
import {tblCommunityARHeaderGraphic} from "./tblCommunityARHeaderGraphic";
import {tblContactAutomatedEmail} from "./tblContactAutomatedEmail";


@Entity("tblCommunityARHeaderGraphicCategory",{schema:"public" } )
export class tblCommunityARHeaderGraphicCategory {

    @Column("text",{ 
        nullable:false,
        primary:true,
        name:"varCommunityARHeaderGraphicCategory"
        })
    varCommunityARHeaderGraphicCategory:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varCommunityARHeaderGraphicCategoryDisplay"
        })
    varCommunityARHeaderGraphicCategoryDisplay:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityARHeaderGraphicCategoryCreatedDate"
        })
    dteCommunityARHeaderGraphicCategoryCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteCommunityARHeaderGraphicCategoryModifiedDate"
        })
    dteCommunityARHeaderGraphicCategoryModifiedDate:Date;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bCommunityARHeaderGraphicCategoryCorporateOnlyFlg"
        })
    bCommunityARHeaderGraphicCategoryCorporateOnlyFlg:boolean;
        

    @Column("integer",{ 
        nullable:false,
        name:"intCommunityARHeaderCategoryNavOrder"
        })
    intCommunityARHeaderCategoryNavOrder:number;
        

   
    @ManyToOne(type=>tblCommunityARHeaderGraphicARType, tblCommunityARHeaderGraphicARType=>tblCommunityARHeaderGraphicARType.tblCommunityArHeaderGraphicCategorys,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intCommunityARHeaderGraphicCategoryCommunityARHeaderGraphicARTy'})
    intCommunityArHeaderGraphicCategoryCommunityArHeaderGraphicArTy:tblCommunityARHeaderGraphicARType | null;


   
    @OneToMany(type=>tblCommunityARHeaderGraphic, tblCommunityARHeaderGraphic=>tblCommunityARHeaderGraphic.varCommunityArHeaderGraphicAr,{ onDelete: 'CASCADE' , })
    tblCommunityArHeaderGraphics:tblCommunityARHeaderGraphic[];
    

   
    @OneToMany(type=>tblContactAutomatedEmail, tblContactAutomatedEmail=>tblContactAutomatedEmail.varContactAutomatedEmailName,{ onDelete: 'CASCADE' , })
    tblContactAutomatedEmails:tblContactAutomatedEmail[];
    
}
