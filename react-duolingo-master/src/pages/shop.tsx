import type { NextPage } from "next";
import type { ComponentProps } from "react";
import React from "react";

import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { RightBar } from "~/components/RightBar";
import { TopBar } from "~/components/TopBar";

const StreakFreezeSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="124" height="124" viewBox="0 0 124 124" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(26 9)">
          <path
            d="M40.754 2.02l29.783 42.822A8.162 8.162 0 0 1 72 49.502v16.92a8.162 8.162 0 0 1-1.877 5.208L55.168 89.678a5.83 5.83 0 0 1-4.49 2.11H27.724a5.83 5.83 0 0 1-3.41-1.1L1.936 74.547A4.664 4.664 0 0 1 0 70.765V17.339a4.664 4.664 0 0 1 6.162-4.417l14.45 4.9L33.265 1.793a4.664 4.664 0 0 1 7.49.227z"
            fill="#71D2FF"
          />
          <path
            d="M17.863 93.238c-.223.44-.547.804-.938 1.055-1.207.775-2.744.302-3.433-1.055L4.645 75.805H26.71l-8.847 17.433z"
            fill="#71D2FF"
          />
          <path
            d="M33.639 103.66a2.821 2.821 0 0 1-5.45 0l-5.89-21.988h17.229l-5.89 21.988zM65.346 93.653a2.817 2.817 0 0 1-3.898-.858l-6.432-10.081L71.71 67.997 66.578 91.89a2.83 2.83 0 0 1-1.232 1.764z"
            fill="#71D2FF"
          />
          <g>
            <g>
              <g>
                <path
                  d="M10.679 51.434l-.209-20.13c-.03-3.017 1.582-5.231 4.372-4.736.556.098 1.733.464 2.26.752l5.814 3.168 7.261-9.313a6.647 6.647 0 0 1 10.484 0L53.825 38.06c.13.167.242.343.336.525 3.875 4.31 6.226 9.967 6.226 16.162 0 13.51-11.178 24.462-24.968 24.462-13.789 0-24.967-10.952-24.967-24.462 0-1.123.077-2.23.227-3.313z"
                  fill="#1CB0F6"
                />
                <path
                  d="M28.051 56.63c.044-.139.11-.27.197-.388l4.987-6.76a2.618 2.618 0 0 1 4.213 0l4.987 6.76c.02.028.04.056.057.084 1.732 1.705 2.798 4.034 2.798 6.602 0 5.227-4.42 9.464-9.87 9.464-5.452 0-9.872-4.237-9.872-9.464 0-2.418.947-4.625 2.503-6.298z"
                  fill="#1CDAF6"
                  opacity=".75"
                />
              </g>
            </g>
          </g>
          <path
            d="M8.124 17.834l15.021 5.424L34.917 5.674a2.332 2.332 0 0 1 3.888.018l14.798 22.56a2.332 2.332 0 0 1-.466 3.078L8.815 67.87A2.332 2.332 0 0 1 5 66.072V20.027a2.332 2.332 0 0 1 3.124-2.193z"
            fill="#B4E7FF"
            opacity=".593"
          />
          <rect
            fill="#FFF"
            transform="rotate(45 13.807 37.146)"
            x="8.971"
            y="32.295"
            width="9.672"
            height="9.701"
            rx="1.166"
          />
          <path
            d="M67.707 65.498L51.58 84.97a2.332 2.332 0 0 1-1.796.845h-13.45a2.332 2.332 0 0 1-1.69-3.938L64.22 50.742a2.332 2.332 0 0 1 4.023 1.606v11.663c0 .543-.19 1.069-.537 1.487z"
            fill="#B4E7FF"
            opacity=".593"
          />
          <rect
            fill="#FFF"
            transform="rotate(45 56.516 61.607)"
            x="53.049"
            y="58.129"
            width="6.934"
            height="6.955"
            rx="1.166"
          />
        </g>
      </g>
    </svg>
  );
};

const EmptyGemSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#E5E5E5" stroke="#FFF" strokeWidth="2">
          <path d="M4.12 6.36l6.475-3.908a4.387 4.387 0 0 1 4.534 0l6.475 3.907a4.387 4.387 0 0 1 2.12 3.757v9.666a4.387 4.387 0 0 1-2.12 3.756l-6.475 3.907a4.387 4.387 0 0 1-4.534 0L4.12 23.538A4.387 4.387 0 0 1 2 19.782v-9.666c0-1.538.804-2.962 2.12-3.757z" />
        </g>
      </g>
    </svg>
  );
};

const DoubleOrNothingSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="124" height="124" viewBox="0 0 124 124" {...props}>
      <title>double_or_nothing</title>
      <defs>
        <rect id="a" x="0" y="0" width="70" height="64" rx="4" />
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(21 8)">
          <rect fill="#FF9600" x="0" y="25.784" width="82" height="78" rx="7" />
          <path
            d="M64.916 13.095L75.5 45.271H20.75l37.691-33.9a4 4 0 0 1 6.475 1.724z"
            fill="#FF9600"
          />
          <path
            d="M23.836 1.984L9 27.382h38c-5.187-5.28-8.645-9.402-10.375-12.364-1.264-2.163-3.139-6.334-5.625-12.51a4 4 0 0 0-7.164-.524zM66.125 17.221c1.688 5 5 8.563 7.375 8.563 1.583 0 1.375 1.583-.625 4.75l-11.063-4.75c1.75-9.042 3.188-11.896 4.313-8.563z"
            fill="#FF9600"
          />
          <path
            d="M37.25 16.034c3.5 6.125 10 5.625 15.375.75 3.583-3.25 4.875-1.084 3.875 6.5L43.625 33.409l-12.75-11.625c1.916-7.917 4.04-9.834 6.375-5.75z"
            fill="#FF9600"
          />
          <path
            d="M32.625 23.659c3 6.625 11.625 8.25 16.875 3.125 3.5-3.417 4.583-2.375 3.25 3.125L39 42.034 27.375 29.909c1.5-8.583 3.25-10.667 5.25-6.25z"
            fill="#FFC800"
          />
          <path
            d="M23.836 18.768L9 44.166h38c-5.187-5.28-8.645-9.402-10.375-12.364-1.264-2.163-3.139-6.334-5.625-12.51a4 4 0 0 0-7.164-.524z"
            fill="#FFC800"
          />
          <path
            d="M62.916 22.095L73.5 54.271H18.75l37.691-33.9a4 4 0 0 1 6.475 1.724z"
            fill="#FFC800"
          />
          <path
            d="M15.375 16.471c-3 5.188-6.563 8.79-9.078 9.305-1.677.344-1.484 1.909.578 4.695 9.542-4.291 13.646-6.437 12.313-6.437-2 0-.813-12.75-3.813-7.563z"
            fill="#FF9600"
          />
          <g transform="translate(6 33.784)">
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <use fill="#FFF" xlinkHref="#a" />
            <path fill="#F34848" mask="url(#b)" d="M-6-3h81v21H-6z" />
          </g>
          <circle fill="#C22E2E" cx="24" cy="41.784" r="5" />
          <circle fill="#C22E2E" cx="59" cy="41.784" r="5" />
          <g fill="#F34848">
            <path d="M34.5 60.784h13a3.5 3.5 0 0 1 0 7h-13a3.5 3.5 0 0 1 0-7z" />
            <path d="M34.532 82.636l9.644-19.773a3.5 3.5 0 0 1 6.292 3.069l-9.644 19.773a3.5 3.5 0 0 1-6.292-3.069z" />
          </g>
          <rect fill="#FFF" x="20" y="26.784" width="8" height="18" rx="4" />
          <rect fill="#FFF" x="55" y="26.784" width="8" height="18" rx="4" />
          <path
            d="M46.313 97.815c7.75 0 14.149-15.031 18.525-15.031 4.376 0 2.224 15.031 6.475 15.031 2.833 0 2.925.99.273 2.969h-22.75c-6.849-1.98-7.69-2.969-2.523-2.969z"
            fill="#FF9600"
          />
          <path
            d="M39.187 97.8c-7.75 0-11.311-8.766-15.687-8.766-4.376 0-5.076 8.766-9.327 8.766-2.834 0-2.896.994-.186 2.984h22.749c6.8-1.99 7.618-2.984 2.451-2.984z"
            fill="#FF9600"
          />
        </g>
      </g>
    </svg>
  );
};

const DuoPlushieSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="349" height="318" viewBox="0 0 349 318" fill="none" {...props}>
      <g clipPath="url(#clip0_532_2863)">
        <path
          d="M59.9462 39.376C70.8815 39.6986 91.8988 38.2255 105.558 33.8054C119.218 29.3853 118.745 24.2104 127.418 17.5426C135.336 11.4558 142.909 5.63411 153.3 2.27161C188.139 -9.00188 215.787 24.7285 221.249 36.7845C226.71 48.8405 234.936 81.7095 241.539 131.989C257.283 225.439 210.391 263.27 176.065 275.365C129.534 286.377 64.1601 275.349 30.8313 206.099C-2.49759 136.85 -17.5853 65.3211 31.328 45.722C41.5931 41.6088 49.9636 39.0815 59.9462 39.376Z"
          fill="#58CC02"
        />
        <path
          d="M166.846 59.4084C160.816 61.3596 162.057 101.09 131.406 111.009C101.174 120.792 76.0676 91.1932 66.5204 94.2825C57.8108 97.1009 58.5358 112.579 60.4051 116.926C56.3684 115.395 51.8819 112.081 48.009 112.133C44.1361 112.184 42.5196 120.55 43.7591 124.381C44.2601 125.929 44.3322 127.746 46.6868 131.305C44.2553 135.513 32.4971 146.946 38.5009 165.499C55.4582 217.903 87.7205 220.968 110.918 213.461C129.477 207.456 141.368 192.263 141.744 185.419L164.974 175.802C169.426 181.174 179.232 207.753 201.81 200.447C239.161 188.361 237.965 136.213 229.156 108.992C221.35 84.869 207.677 82.0116 202.877 80.2337C203.056 79.4552 204.522 75.0718 202.877 69.9863C200.82 63.6294 195.721 59.7252 193.125 60.5653C190.529 61.4054 187.175 68.3335 183.208 72.3002C180.413 63.6614 172.875 57.4572 166.846 59.4084Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M122.111 159.497C114.737 138.385 78.6092 138.133 74.6269 169.287C74.3869 171.164 72.6709 172.491 70.7939 172.251C68.917 172.011 67.5899 170.295 67.8298 168.418C72.6612 130.622 118.644 128.793 128.58 157.237C129.204 159.023 128.262 160.977 126.476 161.601C124.689 162.225 122.735 161.283 122.111 159.497Z"
          fill="#2F9D00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M167.754 145.81C163.741 132.277 174.282 118.79 188.224 117.114C195.448 116.245 203.679 118.616 211.06 126.455C212.357 127.833 214.526 127.898 215.903 126.601C217.281 125.304 217.346 123.135 216.049 121.758C207.267 112.431 196.918 109.166 187.406 110.31C170.053 112.397 155.746 129.417 161.184 147.758C161.722 149.572 163.628 150.607 165.443 150.069C167.257 149.531 168.291 147.624 167.754 145.81Z"
          fill="#2F9D00"
        />
        <path
          d="M208.265 103.697C188.832 107.916 169.399 125.175 170.549 161.996L220.411 147.293C222.584 131.866 223.811 100.321 208.265 103.697Z"
          fill="#89E219"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M188.499 131.436C190.57 132.877 191.081 135.724 189.64 137.795C185.631 143.558 185.515 149.208 185.515 158.669C185.515 161.191 183.469 163.237 180.946 163.237C178.423 163.237 176.378 161.191 176.378 158.669C176.378 158.495 176.378 158.322 176.378 158.149C176.376 149.263 176.374 140.867 182.14 132.578C183.581 130.507 186.427 129.996 188.499 131.436Z"
          fill="#98FA1C"
        />
        <path
          d="M135.926 176.307L165.57 165.529L173.643 191.325C175.834 198.328 172.042 205.801 165.096 208.167L162.047 209.206C155.089 211.576 147.512 207.956 144.985 201.053L135.926 176.307Z"
          fill="#F49000"
        />
        <path
          d="M140.575 168.526L158.555 161.888L167.541 191.72C168.905 196.249 166.393 201.036 161.892 202.487Z"
          fill="#B86D00"
        />
        <path
          d="M173.125 167.171C170.996 160.591 159.951 155.334 149.141 158.831C136.53 162.912 132.369 174.269 133.882 178.946C134.921 182.157 154.219 183.906 159.545 182.182C164.872 180.459 173.683 168.894 173.125 167.171Z"
          fill="#FFC200"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M152.597 167.698C151.579 168.11 150.856 168.636 150.646 168.822C148.656 170.581 145.845 171.339 144.033 169.695C142.222 168.052 142.367 165.294 144.357 163.536C146.309 161.811 151.539 158.52 157.756 159.239C160.389 159.543 162.074 161.725 161.519 164.113C160.964 166.501 158.108 167.525 155.475 167.22C154.564 167.115 153.579 167.3 152.597 167.698Z"
          fill="#FFDE00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.795 102.884C202.434 103.972 202.071 105.372 200.983 106.011C194.847 109.616 185.558 117.215 179.356 129.303C173.187 141.327 169.992 157.943 176.198 179.82C176.542 181.033 175.838 182.296 174.624 182.64C173.41 182.985 172.147 182.28 171.803 181.066C165.289 158.105 168.581 140.297 175.291 127.218C181.969 114.202 191.952 106.019 198.669 102.072C199.757 101.433 201.156 101.797 201.795 102.884Z"
          fill="#58CC02"
        />
        <path
          d="M80.4538 308.105C75.0246 302.768 75.0391 294.027 80.4863 288.582C85.8533 283.216 94.4919 283.052 99.938 288.153L100.18 288.385C102.248 290.418 104.753 291.214 108.866 290.764L109.256 290.719C116.897 289.763 123.8 295.12 124.674 302.685C125.549 310.249 120.063 317.156 112.422 318.112C99.9197 319.676 88.8348 316.343 80.4538 308.105Z"
          fill="#F49000"
        />
        <path
          d="M256.086 266.019C258.521 259.596 255.21 252.437 248.691 250.03C242.267 247.658 235.125 250.784 232.586 257.02L232.476 257.301C231.548 259.749 229.796 261.346 226.255 262.53L225.918 262.64C219.295 264.74 215.659 271.737 217.797 278.266C219.936 284.796 227.038 288.387 233.661 286.286C244.499 282.849 252.326 275.934 256.086 266.019Z"
          fill="#F49000"
        />
        <path
          d="M340.275 212.483C334.653 206.971 328.465 198.849 326.436 189.624L309.793 228.932C322.442 234.821 333.39 228.849 340.553 222.818C343.689 220.178 343.202 215.352 340.275 212.483Z"
          fill="#58CC02"
        />
        <path
          d="M197.249 121.433C200.789 111.548 206.627 99.9204 214.478 93.1652C225.024 84.0899 238.916 82.4881 253.031 93.1652C263.328 100.955 284.522 102.751 295.433 99.2747C325.871 89.5761 344.177 112.938 338.506 142.673L328.293 196.216C321.784 230.345 298.824 246.333 262.419 246.384C254.19 246.396 243.585 245.93 235.52 243.793C180.638 229.249 181.894 164.31 197.249 121.433Z"
          fill="#58CC02"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M311.667 229.722C319.949 221.63 325.565 210.515 328.292 196.215L328.393 195.687C329.067 197.277 329.845 198.818 330.699 200.301C327.806 212.817 322.593 222.985 315.131 230.769C313.993 230.513 312.838 230.167 311.667 229.722Z"
          fill="#50BB00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M253.711 246.198C252.644 246.148 251.567 246.087 250.487 246.012C248.136 216.998 250.618 183.16 255.633 154.076C258.344 138.349 261.803 123.97 265.66 112.461C267.185 107.908 268.786 103.762 270.446 100.141C271.541 100.328 272.646 100.487 273.753 100.617C272.037 104.247 270.337 108.565 268.692 113.477C264.901 124.792 261.476 139.005 258.784 154.619C253.775 183.672 251.326 217.429 253.711 246.198Z"
          fill="#50BB00"
        />
        <path
          d="M209.266 213.66L226.46 215.543C227.381 215.644 227.946 216.62 227.575 217.471C225.792 221.557 221.527 224.047 216.984 223.55C212.441 223.053 208.751 219.691 207.8 215.305C207.602 214.392 208.344 213.56 209.266 213.66Z"
          fill="#8EE000"
        />
        <path
          d="M239.272 216.956L256.466 218.839C257.388 218.94 257.952 219.916 257.581 220.766C255.798 224.853 251.533 227.343 246.99 226.845C242.448 226.348 238.757 222.987 237.806 218.601C237.608 217.688 238.35 216.855 239.272 216.956Z"
          fill="#8EE000"
        />
        <path
          d="M225.447 227.408L242.641 229.291C243.563 229.392 244.128 230.368 243.756 231.218C241.973 235.305 237.708 237.795 233.165 237.298C228.623 236.8 224.932 233.439 223.981 229.053C223.783 228.14 224.525 227.307 225.447 227.408Z"
          fill="#8EE000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M252.924 231.942C253.013 234.971 253.147 237.964 253.329 240.914C252.527 240.996 251.704 240.998 250.873 240.912C250.619 240.886 250.368 240.852 250.119 240.81C249.936 237.785 249.803 234.715 249.716 231.611L252.924 231.942Z"
          fill="#58CC02"
        />
        <path
          d="M261.062 172.038C258.694 193.131 242.023 208.575 223.826 206.532C205.628 204.489 192.797 185.733 195.165 164.64C197.533 143.546 214.204 128.103 232.401 130.146C250.598 132.189 263.43 150.945 261.062 172.038Z"
          fill="#89E219"
        />
        <path
          d="M318.453 180.7C316.172 201.02 300.109 215.897 282.575 213.928C265.042 211.96 252.677 193.892 254.959 173.572C257.24 153.252 273.303 138.376 290.836 140.344C308.37 142.313 320.734 160.381 318.453 180.7Z"
          fill="#89E219"
        />
        <path
          d="M293.391 128.604C276.258 146.459 252.357 151.312 234.999 121.477C234.029 119.809 232.138 118.787 230.289 119.34C222.9 121.55 219.951 127.143 220.186 131.422L217.203 126.089C215.951 123.85 213.036 123.031 211.111 124.727C202.263 132.524 208.026 141.609 212.685 146.743L259.126 162.223L309.398 165.415C310.356 165.415 310.343 164.878 316.101 156.159C320.405 149.642 318.266 141.735 315.671 136.819C314.567 134.729 311.909 134.381 309.979 135.744L302.536 140.998C304.554 136.884 303.155 132.699 301.257 129.225C299.723 126.417 295.607 126.294 293.391 128.604Z"
          fill="#89E219"
        />
        <path
          d="M307.745 179.47C306.214 193.103 295.895 203.136 284.697 201.879C273.499 200.622 265.662 188.551 267.193 174.917C268.723 161.284 279.042 151.251 290.24 152.508C301.438 153.765 309.275 165.837 307.745 179.47Z"
          fill="white"
        />
        <path
          d="M247.019 171.985C245.489 185.618 235.17 195.651 223.972 194.394C212.774 193.137 204.937 181.066 206.467 167.432C207.998 153.799 218.316 143.766 229.515 145.023C240.713 146.28 248.55 158.352 247.019 171.985Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M244.986 179.977C245.998 177.516 246.7 174.829 247.019 171.984C247.753 165.448 246.334 159.272 243.424 154.473C241.511 152.327 239.096 150.933 236.369 150.627C228.874 149.786 221.858 157.475 220.698 167.802C219.539 178.129 224.675 187.183 232.17 188.025C237.199 188.589 242.012 185.313 244.986 179.977Z"
          fill="#4B4B4B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M267.577 184.083C266.992 181.191 266.839 178.097 267.196 174.918C267.946 168.236 270.807 162.419 274.848 158.372C277.094 156.882 279.616 156.162 282.195 156.452C289.69 157.293 294.826 166.347 293.667 176.674C292.507 187.001 285.491 194.691 277.996 193.849C273.235 193.315 269.426 189.466 267.577 184.083Z"
          fill="#4B4B4B"
        />
        <path
          d="M264.418 193.913C264.418 200.061 259.434 205.045 253.286 205.045C247.138 205.045 242.154 200.061 242.154 193.913C242.154 187.765 247.138 182.781 253.286 182.781C259.434 182.781 264.418 187.765 264.418 193.913Z"
          fill="#FFC200"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M245.156 191.5C244.445 190.976 243.444 191.128 242.92 191.839C242.397 192.55 242.549 193.551 243.26 194.075L249.268 198.5C251 199.776 253.271 200.057 255.261 199.242L262.899 196.117C263.716 195.783 264.108 194.849 263.773 194.032C263.439 193.215 262.505 192.823 261.688 193.158L254.05 196.283C253.092 196.675 251.998 196.54 251.165 195.926L245.156 191.5Z"
          fill="#F49000"
        />
        <path
          d="M293.247 214.046C298.803 211.645 305.01 214.244 308.118 219.438L309.669 222.028C313.142 227.833 311.845 235.32 306.491 239.455C303.917 241.443 301.172 243.509 298.782 245.193C296.248 246.978 292.947 248.629 289.771 250.007C283.7 252.641 276.864 249.691 273.864 243.792L273.53 243.136C271.154 238.465 271.646 232.832 275.047 228.845C277.669 225.772 280.877 222.237 283.796 219.643C286.345 217.379 289.897 215.494 293.247 214.046Z"
          fill="#F49000"
        />
        <path
          d="M214.621 204.339C210.006 200.356 203.254 200.988 198.723 205.067L196.525 207.046C191.505 211.565 190.538 219.087 194.417 224.617C196.355 227.381 198.451 230.294 200.306 232.707C202.24 235.224 204.965 237.849 207.64 240.166C212.679 244.528 220.143 243.742 224.773 238.947L225.215 238.49C228.857 234.718 230.036 229.182 227.955 224.369C226.314 220.573 224.229 216.12 222.148 212.685C220.34 209.7 217.443 206.773 214.621 204.339Z"
          fill="#F49000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M339.273 137.366C337 137.06 334.61 137.618 332.662 139.05L315.204 151.889C308.305 156.963 306.137 166.311 310.099 173.904L321.896 196.516C323.035 198.698 325.002 200.283 327.247 200.989C327.611 199.529 327.942 198.033 328.239 196.5C327.293 196.115 326.464 195.394 325.946 194.402L314.149 171.791C311.23 166.196 312.827 159.308 317.911 155.569L335.368 142.731C336.355 142.005 337.538 141.737 338.65 141.89C338.921 140.363 339.128 138.854 339.273 137.366Z"
          fill="#50BB00"
        />
        <path
          d="M317.909 155.569L335.366 142.73C337.472 141.182 340.467 141.716 341.77 143.982C355.021 167.033 348.004 184.417 332.308 196.006C330.168 197.586 327.175 196.761 325.944 194.402L314.147 171.79C311.228 166.196 312.825 159.308 317.909 155.569Z"
          fill="#58CC02"
        />
        <path
          d="M55.5465 206.418C48.6457 223.725 103.568 261.127 103.568 261.127C171.792 291.531 209.375 241.602 212.633 232.021C215.426 223.805 223.179 186.715 201.131 194.347C175.499 203.219 128.397 212.132 55.5465 206.418Z"
          fill="#58CC02"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M213.806 192.034C216.191 193.804 217.754 196.348 218.616 198.742C219.115 200.128 219.596 203.195 219.75 207.083C219.908 211.061 219.733 216.134 218.79 221.628C216.91 232.594 211.928 245.465 200.19 254.501C189.809 262.493 177.98 270.156 162.546 273.366C147.09 276.58 128.272 275.28 103.952 265.822C102.777 265.365 102.194 264.041 102.651 262.866C103.109 261.69 104.432 261.107 105.608 261.565C129.297 270.777 147.206 271.89 161.616 268.893C176.048 265.892 187.223 258.719 197.404 250.882C207.918 242.787 212.522 231.153 214.288 220.856C215.169 215.719 215.333 210.969 215.186 207.264C215.035 203.467 214.569 200.986 214.318 200.289C213.679 198.515 212.575 196.809 211.084 195.703C209.661 194.647 207.783 194.053 205.269 194.582C204.139 194.82 201.47 195.64 197.6 196.829C196.5 197.167 195.302 197.535 194.015 197.928C188.306 199.671 181.039 201.839 173.283 203.851C165.532 205.863 157.255 207.728 149.525 208.86C141.837 209.985 134.511 210.413 128.737 209.435C127.493 209.225 126.655 208.046 126.866 206.802C127.076 205.558 128.255 204.721 129.499 204.931C134.56 205.788 141.32 205.444 148.864 204.34C156.366 203.242 164.467 201.419 172.135 199.43C179.798 197.441 186.992 195.296 192.681 193.559C193.863 193.198 194.989 192.852 196.047 192.527C199.988 191.315 202.975 190.397 204.328 190.112C208.147 189.308 211.354 190.215 213.806 192.034Z"
          fill="#50BB00"
        />
      </g>
      <defs>
        <clipPath id="clip0_532_2863">
          <rect width="349" height="318" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Shop: NextPage = () => {
  const streakFreezes = 0;

  return (
    <div>
      <TopBar />
      <LeftBar selectedTab="Shop" />
      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="px-4 pb-20">
          <div className="py-7">
            <h2 className="mb-5 text-2xl font-bold">Power-ups</h2>
            <div className="flex border-t-2 border-gray-300 py-5">
              <StreakFreezeSvg className="shrink-0" />
              <section className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Streak Freeze</h3>
                <p className="text-sm text-gray-500">
                  Streak Freeze allows your streak to remain in place for one
                  full day of inactivity.
                </p>
                <div className="w-fit rounded-full bg-gray-200 px-3 py-1 text-sm font-bold uppercase text-gray-400">
                  {streakFreezes} / 2 equipped
                </div>
                <button
                  className="flex w-fit items-center gap-1 rounded-2xl border-2 border-gray-300 bg-white px-4 py-2 text-sm font-bold uppercase text-gray-300"
                  disabled
                >
                  Get one for: <EmptyGemSvg /> 10
                </button>
              </section>
            </div>
            <div className="flex border-t-2 border-gray-300 py-5">
              <DoubleOrNothingSvg className="shrink-0" />
              <section className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Double or Nothing</h3>
                <p className="text-sm text-gray-500">
                  Attempt to double your five lingot wager by maintaining a
                  seven day streak.
                </p>
                <button
                  className="flex w-fit items-center gap-1 rounded-2xl border-2 border-gray-300 bg-white px-4 py-2 text-sm font-bold uppercase text-gray-300"
                  disabled
                >
                  Get for: <EmptyGemSvg /> 5
                </button>
              </section>
            </div>
          </div>
          <div className="py-7">
            <h2 className="mb-5 text-2xl font-bold">Merch</h2>
            <div className="flex border-t-2 border-gray-300 py-5">
              <DuoPlushieSvg className="h-32 w-32 shrink-0 p-4" />
              <section className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Duo Plushie</h3>
                <p className="text-sm text-gray-500">
                  {`Celebrate`}
                </p>
                <button className="flex w-fit items-center gap-1 rounded-2xl border-2 border-b-4 border-gray-300 bg-white px-4 py-3 text-sm font-bold uppercase text-red-500">
                  $29.99
                </button>
              </section>
            </div>
          </div>
        </div>
        <RightBar />
      </div>
      <BottomBar selectedTab="Shop" />
    </div>
  );
};

export default Shop;
