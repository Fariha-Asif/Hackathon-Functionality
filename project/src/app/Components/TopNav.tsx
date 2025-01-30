import { X } from 'lucide-react';

const TopNav = () => {
    return (
        <main className="flex w-[1070px] lg:w-[1440px] h-[34px] xl:h-[38px] bg-black justify-center items-center">
            {/* left */}
            {/* 20% off Announcement with Shop Now */}
            
           <div className="flex justify-center items-center">
            <h3 className="text-white text-xs sm:text-sm ml-16 lg:ml-80">Sign up and get 20% off to your first order. </h3>
            <button className="text-white ml-3 text-xs sm:text-sm">Sign Up Now</button>
           </div>
           {/* Right */} 
            {/* X icon added */}
            <div className="w-[24px] h-[24px] mt-[9px] ml-[600px]">
                <X className="text-white absolute right-[50px] hidden sm:block" />
            </div>
                                  
        </main>
        )
    }

export default TopNav