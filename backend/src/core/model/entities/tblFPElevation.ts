import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblFP} from "./tblFP";
import {tblFPElevationOptionDisplayOnLoad} from "./tblFPElevationOptionDisplayOnLoad";
import {tblFPElevationOptionRemove} from "./tblFPElevationOptionRemove";


@Entity("tblFPElevation",{schema:"public" } )
export class tblFPElevation {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intFPElevationID"
        })
    intFPElevationID:string;
        

   
    @ManyToOne(type=>tblFP, tblFP=>tblFP.tblFpElevations,{  nullable:false, })
    @JoinColumn({ name:'intFPElevationFPID'})
    intFpElevationFp:tblFP | null;


    @Column("text",{ 
        nullable:false,
        name:"varFPElevationTemplateName"
        })
    varFPElevationTemplateName:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varFPElevationTemplateNotes"
        })
    varFPElevationTemplateNotes:string | null;
        

    @Column("text",{ 
        nullable:false,
        default: () => "'active'",
        name:"varFPElevationTemplateStatus"
        })
    varFPElevationTemplateStatus:string;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPElevationTemplateCreatedDate"
        })
    dteFPElevationTemplateCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteFPElevationTemplateModifiedDate"
        })
    dteFPElevationTemplateModifiedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPElevationTemplateCreatedBy"
        })
    intFPElevationTemplateCreatedBy:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intFPElevationTemplateModifiedBy"
        })
    intFPElevationTemplateModifiedBy:number | null;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"bFPElevationTemplateDeletedFlg"
        })
    bFPElevationTemplateDeletedFlg:boolean;
        

   
    @OneToMany(type=>tblFPElevationOptionDisplayOnLoad, tblFPElevationOptionDisplayOnLoad=>tblFPElevationOptionDisplayOnLoad.intFpElevationOptionDisplayOnLoadFpElevation)
    tblFpElevationOptionDisplayOnLoads:tblFPElevationOptionDisplayOnLoad[];
    

   
    @OneToMany(type=>tblFPElevationOptionRemove, tblFPElevationOptionRemove=>tblFPElevationOptionRemove.intFpElevationOptionRemoveFpElevation)
    tblFpElevationOptionRemoves:tblFPElevationOptionRemove[];
    
}
