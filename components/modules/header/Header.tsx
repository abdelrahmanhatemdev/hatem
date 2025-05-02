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
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import dynamic from "next/dynamic";

const Logo = dynamic(() => import("@/components/custom/Logo"), {
  loading: () => <></>,
  ssr: false,
});

function Header() {
  return (
    <header className="fixed top-4 left-[5%] lg:left-[2%] z-50 w-[90%] lg:w-[96%] h-12">
      <nav className="flex items-center justify-between bg-neutral-950/40 h-fit rounded-full md:px-10 px-6 py-2 backdrop-blur-lg">
        <Link
          href="/"
          className="group uppercase font-bold text-lg flex gap-2 items-center justify-center cursor-pointer relative"
        >
          <Logo className="w-10 transition-opacity duration-500" />
        </Link>
        <div className="flex gap-6 items-center justify-start">
          <ul className="gap-6 items-center justify-start hidden md:flex">
            <li className="hover:bg-neutral-800 px-3 py-1 rounded-lg cursor-pointer transition-colors">
              <a
                href="https://drive.google.com/file/d/1r_rv6Iit1LrPtmJIASR-4bGGoKgPPbbB/view"
                target="_blank"
              >
                CV
              </a>
            </li>
            <li className="hover:bg-neutral-800 px-3 py-1 rounded-lg cursor-pointer transition-colors">
              <a href="#works">Projects</a>
            </li>
            <li className="hover:bg-neutral-800 px-3 py-1 rounded-lg cursor-pointer transition-colors">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="hover:bg-neutral-800 px-[0.4rem] py-[0.4rem] rounded-lg cursor-pointer transition-colors">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className="flex items-center"
                aria-label="Menu"
              >
                <TbMenu size={25} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={14}
                className="w-56 p-2 rounded-2xl cursor-pointer"
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <DropdownMenuGroup className="p-2 flex flex-col gap-2">
                  <DropdownMenuItem className="rounded-lg">
                    <Link href="/#works" className="w-full py-1">
                      Projects
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg">
                    <Link href="/#contact" className="w-full py-1">
                      Contact
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg">
                    <a
                      href="https://drive.google.com/file/d/1r_rv6Iit1LrPtmJIASR-4bGGoKgPPbbB/view"
                      target="_blank"
                      className="w-full py-1"
                    >
                      CV
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="w-[95%] m-auto" />
                <DropdownMenuGroup>
                  <div className="flex items-center justify-between py-2 px-4 w-full">
                    <div className="text-sm text-neutral-400">Follow me at</div>
                    <div className="flex gap-2 items-center justify-center">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/abdelrahmanhatemdev/"
                      >
                        <TbBrandLinkedinFilled
                          size={22}
                          className="text-neutral-400 hover:text-sky-700"
                        />
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/abdelrahmanhatemdev"
                      >
                        <FaGithub
                          size={22}
                          className="text-neutral-400 hover:text-neutral-950"
                        />
                      </a>
                    </div>
                  </div>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
