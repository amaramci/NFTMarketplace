import React from "react";
import Image from "next/image";
import {MdVerified} from "react-icons/md";

//Internal import
import Style from "./Days.module.css";
import images from "../../../img";

const Days = () =>{
    return (
        <div className={Style.days}>
            <div className={Style.days_box}>
                <div className={Style.days_box_img}>
                    <Image src={images.creatorbackground1} alt="profile background" width={500} height={300} objectFit="covers"
                    className={Style.days_box_img_img}/>
                </div>
                <div className={Style.days_box_profile}>
                    <Image src={images.creatorbackground2} alt="profile" width={200} height={200}
                    className={Style.days_box_img_1} objectFit="covers"/>
                    
                    <Image src={images.creatorbackground2} alt="profile" width={200} height={200}
                    className={Style.days_box_img_2} objectFit="covers"/>
                    
                    <Image src={images.creatorbackground2} alt="profile" width={200} height={200}
                    className={Style.days_box_img_3} objectFit="covers"/>
                </div>
                <div className={Style.days_box_title}>
                    <h2>Amazing Collection</h2>
                    <div className={Style.days_box_title_info}>
                        <div className={Style.days_box_title_info_profile}>
                            <Image src={images.user1} alt="profile" width={30} height={30}
                            objectFit="covers" className={Style.days_box_title_info_profile_img}/>
                            <p>Creator
                            <span>
                                Amar
                                <small><MdVerified/></small>
                            </span>
                            </p>
                        </div>
                        <div className={Style.days_box_title_info_price}>
                            <small>1.118ETH</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Days;