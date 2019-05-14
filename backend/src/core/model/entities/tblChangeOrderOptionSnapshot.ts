import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblChangeOrderSnapshot} from "./tblChangeOrderSnapshot";


@Entity("tblChangeOrderOptionSnapshot",{schema:"public" } )
export class tblChangeOrderOptionSnapshot {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intChangeOrderOptionSnapshotID"
        })
    intChangeOrderOptionSnapshotID:string;
        

   
    @ManyToOne(type=>tblChangeOrderSnapshot, tblChangeOrderSnapshot=>tblChangeOrderSnapshot.tblChangeOrderOptionSnapshots,{  nullable:false,onDelete: 'CASCADE', })
    @JoinColumn({ name:'intChangeOrderOptionSnapshotChangeOrderSnapshotID'})
    intChangeOrderOptionSnapshotChangeOrderSnapshot:tblChangeOrderSnapshot | null;


    @Column("integer",{ 
        nullable:true,
        name:"intOptionID"
        })
    intOptionID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"chrOptionType"
        })
    chrOptionType:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varOptionCode"
        })
    varOptionCode:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varOptionDesc"
        })
    varOptionDesc:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intOptionQty"
        })
    intOptionQty:number | null;
        

    @Column("numeric",{ 
        nullable:false,
        default: () => "'0'",
        name:"curOptionUnitPrice"
        })
    curOptionUnitPrice:string;
        

    @Column("text",{ 
        nullable:true,
        name:"varPayType"
        })
    varPayType:string | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"intGroupID"
        })
    intGroupID:number | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varGroupCode"
        })
    varGroupCode:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varGroupDesc"
        })
    varGroupDesc:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"varGroupCRMDisplayText"
        })
    varGroupCRMDisplayText:string | null;
        

    @Column("integer",{ 
        nullable:false,
        name:"intChangeOrderOptionAction"
        })
    intChangeOrderOptionAction:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteChangeOrderOptionSnapshotCreatedDate"
        })
    dteChangeOrderOptionSnapshotCreatedDate:Date;
        

    @Column("integer",{ 
        nullable:true,
        name:"intHomeEstimateOptionID"
        })
    intHomeEstimateOptionID:number | null;
        
}
