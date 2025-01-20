import { X } from 'lucide-react';

const TopNav = () => {
    return (
        <div className="flex w-[1070px] lg:w-[1440px] h-[34px] xl:h-[38px] bg-black">
            {/* 20% off Announcement with Shop Now */}
            <div className="w-[301px] lg:w-[596px] h-[16px] xl:h-6 gap-8px">
                <p className="w-[451px] h-[19px] mt-[9px] ml-[350px] lg:ml-[500px] font-normal text-xs lg:text-sm leading-[18px] lg:leading-[18.9px] text-[#FFFFFF]">
                    Sign up and get 20% off to your first order. 
                    <span className="font-medium text-xs lg:text-sm underline text-white cursor-pointer">
                    Sign Up Now
                    </span>
                </p> 
            </div>
            {/* X icon added */}
            <div className="w-[24px] h-[24px] mt-[9px] ml-[600px]">
                <X className="text-white w-[13.13px] h-[13.13px] font-bold text-4xl mt-[3.43px] ml-[4px]" />
            </div>
                                  
        </div>
        )
    }

export default TopNav