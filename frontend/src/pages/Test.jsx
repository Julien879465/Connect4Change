// import React from "react";

// function Test() {
//   return (
//     <div>
//       <script
//         src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js"
//         defer
//       ></script>
//       <div class="min-h-screen py-20 px-10 bg-gray-100">
//         <div class="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
//           <div
//             class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20"
//             x-data="{ circumference: 50 * 2 * Math.PI, percent: 80 }"
//           >
//             <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
//               <svg
//                 class="w-32 h-32 transform translate-x-1 translate-y-1"
//                 x-cloak
//                 aria-hidden="true"
//               >
//                 <circle
//                   class="text-gray-300"
//                   stroke-width="10"
//                   stroke="currentColor"
//                   fill="transparent"
//                   r="50"
//                   cx="60"
//                   cy="60"
//                 />
//                 <circle
//                   class="text-blue-600"
//                   stroke-width="10"
//                   //   :stroke-dasharray={314.159}
//                   // :stroke-dashoffset="circumference - percent / 100 * circumference"
//                   stroke-linecap="round"
//                   stroke="currentColor"
//                   fill="transparent"
//                   r="50"
//                   cx="60"
//                   cy="60"
//                 />
//               </svg>
//               <span
//                 class="absolute text-2xl text-blue-700"
//                 x-text="`${percent}%`"
//               ></span>
//             </div>
//             <p class="ml-10 font-medium text-gray-600 sm:text-xl">
//               Performance
//             </p>

//             <span class="ml-auto text-xl font-medium text-blue-600 hidden sm:block">
//               +25%
//             </span>
//           </div>

//           <div
//             class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20"
//             x-data="{ circumference: 50 * 2 * Math.PI, percent: 90 }"
//           >
//             <div class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
//               <svg
//                 class="w-32 h-32 transform translate-x-1 translate-y-1"
//                 x-cloak
//                 aria-hidden="true"
//               >
//                 <circle
//                   class="text-gray-300"
//                   stroke-width="10"
//                   stroke="currentColor"
//                   fill="transparent"
//                   r="50"
//                   cx="60"
//                   cy="60"
//                 />
//                 <circle
//                   class="text-red-600"
//                   stroke-width="10"
//                   // :stroke-dasharray="circumference"
//                   // :stroke-dashoffset="circumference - percent / 100 * circumference"
//                   stroke-linecap="round"
//                   stroke="currentColor"
//                   fill="transparent"
//                   r="50"
//                   cx="60"
//                   cy="60"
//                 />
//               </svg>
//               <span
//                 class="absolute text-2xl text-red-700"
//                 x-text="`${percent}%`"
//               ></span>
//             </div>
//             <p class="ml-10 font-medium text-gray-600 sm:text-xl">Storage</p>

//             <span class="ml-auto text-xl font-medium text-red-600 hidden sm:block">
//               20GB
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;
