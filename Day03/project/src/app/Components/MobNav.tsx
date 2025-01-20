import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { ChevronDown, Menu } from "lucide-react"

  const MobNav = () => {
    return(
        <Sheet>
  <SheetTrigger className="ml-6 mb-5 mt-3 w-14 bg-slate-300">
    <Menu/>
    </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetDescription>
        {/* Navigation Links */}
        <nav className="grid grid-cols-1 text-black font-bold text-2xl ">
          <a href="#">
            Shop
          </a>
          <br/>
          <a href="#">
            On Sale
          </a>
          <br/>
          <a href="#">
            New Arrivals
          </a>
          <br/>
          <a href="#">
            Brands
          </a>
        </nav>
          
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    )
  }
  
  export default MobNav