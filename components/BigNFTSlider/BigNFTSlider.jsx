import React from "react";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import {AiFillFire, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {MdVerified, MdTimer} from "react-icons/md";
import {TbArrowBigLeftLine, TbArrowBigLeftLines, TbArrowBigRightLine} from "react-icons/tb"

//Internal import
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import Button from "../Button/Button";

const BigNFTSlider = () =>{

    const [idNumber, setIdNumber] = useState(1);

    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Amar Mujezinovic",
            collection: "GYM",
            price: "00004512 ETH",
            like: 243,
            Image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 27,
                hours: 15,
                minutes: 45,
                seconds: 12
            }
        },
        {
            title: "Buddy NFT",
            id: 2,
            name: "DJordje Sreckovic",
            collection: "Home",
            price: "00000582 ETH",
            like: 550,
            Image: images.user2,
            nftImage: images.nft_image_2,
            time: {
                days: 27,
                hours: 15,
                minutes: 45,
                seconds: 12
            }
        },
        {
            title: "GYM NFT",
            id: 3,
            name: "Amar Srecko",
            collection: "GYM",
            price: "00005555 ETH",
            like: 23,
            Image: images.user3,
            nftImage: images.nft_image_3,
            time: {
                days: 27,
                hours: 15,
                minutes: 45,
                seconds: 12
            }
        },
        {
            title: "Home NFT",
            id: 4,
            name: "Amar Mujezinovic",
            collection: "GYM",
            price: "00004512 ETH",
            like: 243,
            Image: images.user4,
            nftImage: images.nft_1,
            time: {
                days: 27,
                hours: 15,
                minutes: 45,
                seconds: 12
            }
        }
    ]

    const inc = useCallback(()=>{
        if (idNumber + 1 < sliderData.length){
            setIdNumber(idNumber + 1);
        }
    }, [idNumber, sliderData.length])

    const dec = useCallback(()=>{
        if (idNumber > 0){
            setIdNumber(idNumber - 1);
        }
    }, [idNumber])




    return(
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Image className={Style.bigNFTSlider_box_left_creator_profile_img} 
                            src={sliderData[idNumber].Image} alt="profile image" width={50} height={50}/>
                            <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                                <p>Creator</p>
                                <h4>{sliderData[idNumber].name}{" "}
                                    <span>
                                        <MdVerified/>
                                    </span>
                                </h4>
                            </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon}/>
                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>{sliderData[idNumber].price} <span>$221,21</span></p>
                        </div>
                        <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_auction_icon}/>
                            <span>Auction ending in</span>
                        </p>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.days + "D " + sliderData[idNumber].time.hours + "H " + 
                                sliderData[idNumber].time.minutes + "M " + sliderData[idNumber].time.seconds + "S "}</p>
                            </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Button btnName="Place" handleClick={()=>{}}/>
                            <Button btnName="View" handleClick={()=>{}}/>

                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLine className={Style.bigNFTSlider_box_left_sliderBtn_item}
                        onClick={()=>inc()}/>
                        <TbArrowBigRightLine className={Style.bigNFTSlider_box_left_sliderBtn_item}
                        onClick={()=>dec()}/>
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image src={sliderData[idNumber].nftImage} alt="NFT image" 
                        width={700} height={700} className={Style.bigNFTSlider_box_right_box_img}/>
                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            <AiFillHeart/>
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigNFTSlider;