import { cn } from "@/lib/utils";

export function IconAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      className={cn("w-10 h-10")}
      {...props}
    >
      <defs>
        <mask id="ipSNewlybuild0">
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          >
            <path
              stroke="#fff"
              d="M19 10V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2h-4"
            ></path>
            <rect
              width="24"
              height="24"
              x="5"
              y="18"
              fill="#fff"
              stroke="#fff"
              rx="2"
            ></rect>
            <path stroke="#000" d="M17 25v10m-5-5h10"></path>
          </g>
        </mask>
      </defs>
      <path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipSNewlybuild0)"
      ></path>
    </svg>
  );
}
