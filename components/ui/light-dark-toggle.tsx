// Tom's new method that did not work for me AT FIRST. Also see layout.tsx in app,
// and see implementation of light-dark-toggle.tsx in layout.tsx in (logged-out)
"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { useTheme } from "next-themes";

export function LightDarkToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          <Button variant="outline">
            <SunIcon className="hidden dark:block" />
            <MoonIcon className="block dark:hidden" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="hidden dark:inline">Enable light mode</p>
          <p className="inline dark:hidden">Enable dark mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

// Previous version that did work too.
// "use client";

// import { useState } from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./tooltip";
// import { MoonIcon, SunIcon } from "lucide-react";

// type Props = {
//   className?: string;
// };

// export function LightDarkToggle({ className }: Props) {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   return (
//     <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger
//           className={className}
//           onClick={() => {
//             setIsDarkMode((prevValue) => !prevValue);
//             document.body.classList.toggle("dark");
//           }}
//         >
//           {isDarkMode ? <SunIcon /> : <MoonIcon />}
//         </TooltipTrigger>
//         <TooltipContent>
//           {isDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// }
