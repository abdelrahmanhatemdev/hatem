import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import {FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

function Header() {
  return (
    <nav className="absolute inset-4 z-10 flex items-center justify-between bg-neutral-950 bg-opacity-40 h-fit rounded-full py-2 px-10">
      <div className="uppercase font-bold text-lg">HATEM</div>
      <ul className="flex gap-6 items-center justify-start">
        <li className="hover:bg-neutral-800 px-3 py-1 rounded-lg cursor-pointer transition-colors">
          Projects
        </li>
        <li className="hover:bg-neutral-800 px-3 py-1 rounded-lg cursor-pointer transition-colors">
          Featured
        </li>
        <li className="hover:bg-neutral-800 px-3 py-1 rounded-lg cursor-pointer transition-colors">
          Contact
        </li>
        <li className="hover:bg-neutral-800 px-[0.4rem] py-[0.4rem] rounded-lg cursor-pointer transition-colors">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <TbMenu size={25} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={20} className="w-56 p-2 rounded-2xl cursor-pointer">
              <DropdownMenuGroup className="p-2 flex flex-col gap-2">
                <DropdownMenuItem className="rounded-lg">
                  <Link href="/projects" className="w-full py-1">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg">
                  <Link href="/features" className="w-full py-1">Features</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg">
                  <Link href="/contact" className="w-full py-1">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="w-[95%] m-auto"/>
              <DropdownMenuGroup>
                  <div className="flex items-center justify-between py-2 px-4 w-full">
                    <div className="text-sm text-neutral-400">Follow me at</div>
                    <div className="flex gap-2 items-center justify-center">
                      <a target="_blank" href="https://www.linkedin.com/in/abdelrahmanhatemdev/"><TbBrandLinkedinFilled size={22} className="text-neutral-400 hover:text-sky-700"/></a>
                      <a target="_blank" href="https://github.com/abdulrahmanhatem"><FaGithub size={22} className="text-neutral-400 hover:text-neutral-950"/></a>
                    </div>
                  </div>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
