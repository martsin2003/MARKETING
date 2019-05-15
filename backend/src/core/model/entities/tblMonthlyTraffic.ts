import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("tblMonthlyTraffic",{schema:"public" } )
export class tblMonthlyTraffic {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"lngMonthlyTrafficID"
        })
    lngMonthlyTrafficID:string;
        

    @Column("integer",{ 
        nullable:true,
        name:"intCommunityID"
        })
    intCommunityID:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficDate"
        })
    lngMonthlyTrafficDate:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficYear"
        })
    lngMonthlyTrafficYear:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficMonth"
        })
    lngMonthlyTrafficMonth:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNewCount"
        })
    lngMonthlyTrafficNewCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficRepeatCount"
        })
    lngMonthlyTrafficRepeatCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficApptCount"
        })
    lngMonthlyTrafficApptCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNoRegCount"
        })
    lngMonthlyTrafficNoRegCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficBeBackCount"
        })
    lngMonthlyTrafficBeBackCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNewCallInCount"
        })
    lngMonthlyTrafficNewCallInCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNewRealtorCount"
        })
    lngMonthlyTrafficNewRealtorCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficBeBackPCount"
        })
    lngMonthlyTrafficBeBackPCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficBeBackRCount"
        })
    lngMonthlyTrafficBeBackRCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNewWebChatCount"
        })
    lngMonthlyTrafficNewWebChatCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNewWebRegCount"
        })
    lngMonthlyTrafficNewWebRegCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNewListingSiteCount"
        })
    lngMonthlyTrafficNewListingSiteCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNewWebDirectCount"
        })
    lngMonthlyTrafficNewWebDirectCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNewAssignedCount"
        })
    lngMonthlyTrafficNewAssignedCount:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficBeBackRCountSave"
        })
    lngMonthlyTrafficBeBackRCountSave:number | null;
        

    @Column("integer",{ 
        nullable:true,
        name:"lngMonthlyTrafficNewCountAdj"
        })
    lngMonthlyTrafficNewCountAdj:number | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteMonthlyTrafficCreatedDate"
        })
    dteMonthlyTrafficCreatedDate:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"dteMonthlyTrafficModifiedDate"
        })
    dteMonthlyTrafficModifiedDate:Date | null;
        
}
