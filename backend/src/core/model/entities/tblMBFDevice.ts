import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {tblMBFBuyerDevice} from "./tblMBFBuyerDevice";
import {tblMBFPushNotification} from "./tblMBFPushNotification";


@Entity("tblMBFDevice",{schema:"public" } )
@Index("idx_18406_IX_tblMBFDevice",["intMBFDeviceID","intMBFDeviceType","varMBFDeviceHWID","varMBFDevicePushToken",],{unique:true})
export class tblMBFDevice {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"intMBFDeviceID"
        })
    intMBFDeviceID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFDeviceHWID"
        })
    varMBFDeviceHWID:string;
        

    @Column("text",{ 
        nullable:false,
        name:"varMBFDevicePushToken"
        })
    varMBFDevicePushToken:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"intMBFDeviceType"
        })
    intMBFDeviceType:number;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFDeviceCreatedDate"
        })
    dteMBFDeviceCreatedDate:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"dteMBFDeviceModifiedDate"
        })
    dteMBFDeviceModifiedDate:Date;
        

   
    @OneToMany(type=>tblMBFBuyerDevice, tblMBFBuyerDevice=>tblMBFBuyerDevice.intMbfBuyerDeviceMbfDevice,{ onDelete: 'CASCADE' , })
    tblMbfBuyerDevices:tblMBFBuyerDevice[];
    

   
    @OneToMany(type=>tblMBFPushNotification, tblMBFPushNotification=>tblMBFPushNotification.intMbfPushNotificationMbfDevice,{ onDelete: 'CASCADE' , })
    tblMbfPushNotifications:tblMBFPushNotification[];
    
}
