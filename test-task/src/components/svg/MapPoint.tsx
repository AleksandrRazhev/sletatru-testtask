export const MapPoint: React.FC<
  React.SVGProps<SVGSVGElement>
> = (): JSX.Element => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" fill="#1E1E1E" />
      <rect
        width="320"
        height="2738"
        transform="translate(-42 -604)"
        fill="#F3F9FF"
      />
      <g filter="url(#filter0_dd_0_1)">
        <rect
          x="-32"
          y="-212"
          width="300"
          height="1549"
          rx="8"
          fill="white"
          shapeRendering="crispEdges"
        />
        <g filter="url(#filter1_dd_0_1)">
          <rect
            x="-16"
            y="-124"
            width="268"
            height="364"
            rx="8"
            fill="white"
            shapeRendering="crispEdges"
          />
          <path
            d="M8.037 0C4.86758 0 2 2.60892 2 6.68535C2 9.29427 3.8111 12.3108 7.50877 15.8166C7.81062 16.0611 8.18793 16.0611 8.48978 15.8166C12.1874 12.3108 13.9985 9.21274 13.9985 6.68535C14.074 2.60892 11.2064 0 8.037 0ZM8.037 8.15287C7.20691 8.15287 6.52775 7.41911 6.52775 6.52229C6.52775 5.62548 7.20691 4.89172 8.037 4.89172C8.86709 4.89172 9.54625 5.62548 9.54625 6.52229C9.54625 7.41911 8.86709 8.15287 8.037 8.15287Z"
            fill="#3D95FB"
          />
          <rect
            x="-15.5"
            y="-123.5"
            width="267"
            height="363"
            rx="7.5"
            stroke="#3D95FB"
            shapeRendering="crispEdges"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_0_1"
          x="-44"
          y="-224"
          width="367"
          height="1581"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0695139 0 0 0 0 0.401926 0 0 0 0 0.595833 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0578472 0 0 0 0 0.33447 0 0 0 0 0.495833 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_dd_0_1"
          x="-28"
          y="-136"
          width="351"
          height="396"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0695139 0 0 0 0 0.401926 0 0 0 0 0.595833 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0578472 0 0 0 0 0.33447 0 0 0 0 0.495833 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
