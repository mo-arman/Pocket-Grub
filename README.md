# Pocket-Grub


# Inception
=> Coding :
Set up all the tools in your laptop
VS Code
Chrome
Extensions of Chrome
Create a new Git repo
Build your first Hello World program using,
Using just HTML
Using JS to manipulate the DOM
Using React
use CDN Links
Create an Element
Create nested React Elements
Use root.render
Push code to Github (Theory as well as code)

# Ignite Our App
- Build the har coded data


{/* here write the filter function */}

        <div className="filter">
     <button className="filter-btn" onClick={()=>{
      //filter
      listofRestuarnat = listofRestuarnat.filter((res)=>res.data.avgRating>4);
      console.log(listofRestuarnat);
      console.log("btn click");
     }}>Top Rated Restuarnat in Sitapur</button>
        </div>
# Build The Filter-Btn in Our Food App By Using Hooks SuperPower Variable
- using Hook 
- useState()
- create Top Rated Restaurant Button Apply Filter-btn with useState state variable not normal variable
// Normal Variable
  // let listOfRestaurants = [
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "74453",
  //       name: "Domino's Pizza",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       city: "21",
  //       area: "Athwa",
  //       totalRatingsString: "1000+ ratings",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       tags: [],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 45,
  //       minDeliveryTime: 45,
  //       maxDeliveryTime: 45,
  //       slaString: "45 MINS",
  //       lastMileTravel: 0,
  //       slugs: {
  //         restaurant: "dominos-pizza-majura-nondh-test_surat",
  //         city: "surat",
  //       },
  //       cityState: "21",
  //       address:
  //         "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
  //       locality: "Bhatar Road",
  //       parentId: 2456,
  //       unserviceable: false,
  //       veg: true,
  //       select: false,
  //       favorite: false,
  //       tradeCampaignHeaders: [],
  //       aggregatedDiscountInfo: {
  //         header: "FREE DELIVERY",
  //         shortDescriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       aggregatedDiscountInfoV2: {
  //         header: "",
  //         shortDescriptionList: [
  //           {
  //             meta: "Free Delivery",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       chain: [],
  //       feeDetails: {
  //         fees: [],
  //         totalFees: 0,
  //         message: "",
  //         title: "",
  //         amount: "",
  //         icon: "",
  //       },
  //       availability: {
  //         opened: true,
  //         nextOpenMessage: "",
  //         nextCloseMessage: "",
  //       },
  //       longDistanceEnabled: 0,
  //       rainMode: "NONE",
  //       thirdPartyAddress: false,
  //       thirdPartyVendor: "",
  //       adTrackingID: "",
  //       badges: {
  //         imageBased: [],
  //         textBased: [],
  //         textExtendedBadges: [],
  //       },
  //       lastMileTravelString: "2.1 kms",
  //       hasSurge: false,
  //       sla: {
  //         restaurantId: "74453",
  //         deliveryTime: 45,
  //         minDeliveryTime: 45,
  //         maxDeliveryTime: 45,
  //         lastMileTravel: 0,
  //         lastMileDistance: 0,
  //         serviceability: "SERVICEABLE",
  //         rainMode: "NONE",
  //         longDistance: "NOT_LONG_DISTANCE",
  //         preferentialService: false,
  //         iconType: "EMPTY",
  //       },
  //       promoted: false,
  //       avgRating: "4.0",
  //       totalRatings: 1000,
  //       new: false,
  //     },
  //     subtype: "basic",
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "74443",
  //       name: "KFC",
  //       uuid: "87727dbd-7f2b-4857-9763-359624165845",
  //       city: "21",
  //       area: "Athwa",
  //       totalRatingsString: "1000+ ratings",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       tags: [],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 45,
  //       minDeliveryTime: 45,
  //       maxDeliveryTime: 45,
  //       slaString: "45 MINS",
  //       lastMileTravel: 0,
  //       slugs: {
  //         restaurant: "dominos-pizza-majura-nondh-test_surat",
  //         city: "surat",
  //       },
  //       cityState: "21",
  //       address:
  //         "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
  //       locality: "Bhatar Road",
  //       parentId: 2456,
  //       unserviceable: false,
  //       veg: true,
  //       select: false,
  //       favorite: false,
  //       tradeCampaignHeaders: [],
  //       aggregatedDiscountInfo: {
  //         header: "FREE DELIVERY",
  //         shortDescriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       aggregatedDiscountInfoV2: {
  //         header: "",
  //         shortDescriptionList: [
  //           {
  //             meta: "Free Delivery",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         descriptionList: [
  //           {
  //             meta: "FREE DELIVERY",
  //             discountType: "FREE_DELIVERY",
  //             operationType: "RESTAURANT",
  //           },
  //         ],
  //         subHeader: "",
  //         headerType: 0,
  //         superFreedel: "",
  //       },
  //       chain: [],
  //       feeDetails: {
  //         fees: [],
  //         totalFees: 0,
  //         message: "",
  //         title: "",
  //         amount: "",
  //         icon: "",
  //       },
  //       availability: {
  //         opened: true,
  //         nextOpenMessage: "",
  //         nextCloseMessage: "",
  //       },
  //       longDistanceEnabled: 0,
  //       rainMode: "NONE",
  //       thirdPartyAddress: false,
  //       thirdPartyVendor: "",
  //       adTrackingID: "",
  //       badges: {
  //         imageBased: [],
  //         textBased: [],
  //         textExtendedBadges: [],
  //       },
  //       lastMileTravelString: "2.1 kms",
  //       hasSurge: false,
  //       sla: {
  //         restaurantId: "74453",
  //         deliveryTime: 45,
  //         minDeliveryTime: 45,
  //         maxDeliveryTime: 45,
  //         lastMileTravel: 0,
  //         lastMileDistance: 0,
  //         serviceability: "SERVICEABLE",
  //         rainMode: "NONE",
  //         longDistance: "NOT_LONG_DISTANCE",
  //         preferentialService: false,
  //         iconType: "EMPTY",
  //       },
  //       promoted: false,
  //       avgRating: "3.0",
  //       totalRatings: 1000,
  //       new: false,
  //     },
  //     subtype: "basic",
  //   },
  // ];

# Let's Start the Exploring the World

 - Microservice
 - Monolith Artchitecture
 - Re-Render Cycle
 - useEffect state superpowerfull state
 - Remove the mockdata add Live Api Data
 - Add Login Logout Button in Header using useState
 - Add Search Bar in Body Component and Filtered The Restaurants Name 

# Finding The Path
 - Create Routing Functionality in Our Food-App
 - Install Router-Dom => (npm i react-router-dom) this is the lates routing function in 16.0 giving the Router-Dom Library 
 - CreateBrowserRouter => Firstly Have gone to App.js File And Import The CreateBrowserRouter in reac-router-dom 
  - import {CreateBrowserRouter} from react-router-dom;
 - Then create the createBrowserRouter object like const appRouter = createBrowserRouter = ([]) the write the inside object path and element 
 - Create About.js Component and import in App.js and put inside the CreateBrowserRouter
 - Create Contact.js Component and import in App.js and put inside the CreateBrowserRouter
 - Create Cart.js Component and import in App.js and put inside the CreateBrowserRouter
 - Create Own Error Page and import {useRouterError} from react-router-dom and put the Error component and use it . It's giving Api use   Api and made Beautiful Error page
 - root.rounder(<RouterProvider appRouter=<AppLayout/>) import RouterProvider in react-router-dom;
 - Build children:[] path the Build Functionality if route the contact page so my header is not showing this problem resolve using by Outlet import Outlet react-router-dom basically it's like a tunnel if route any page my header shown every page use by Outlet;

- use Link tag if using Link tag and route the other page my header not render only route the page not again rendering header therefore using Link tag and Avoid The <a> tag;
-  Create RestuarantMenu.js component and import in App.js and put inside the createBrowserRouter inside the children and make the dynamic path like "/restaurants/:resId" => resId id dynamic if click other Restaurant my resId change and shown the details for Restaurants;
- fetch MenuPageApi inside the RestaurantCard using useEffect Hook  

# Class Based Component and Fuctional Component 
 => Two way define the component
  - Class Based Component
  - Fuctional Component

# Build The Dynamic Component
 - Dynamic RestaurantCard
 
# Use TailwindCSS in our project
 - first step => go to tailwindcss website
 - secand step=> select frame i select Parcel
 - install => npm i tailwindcss postcss , npx i postcss configure file
 - create the postcssrc and put the configure then understand the parcel
 - Tailwindcss is a frame of css we will easy to coder and developer and directly use in classname 
 - postcss means parcel understand the tailwindcss is just like a transpiler postcss therefore we install the postcss and put configure file in postcssrc
 - put CSS file only 3 line configure 
 - Make The beautiful App
 - Responsive website
 - Dynamic
 - use more css framework like chakra ui Bootostarp


 # Add new component 
 => Grocery.js 
 - lazy loading
 - large file loading slow 
 - seperate component
 - Add New Functionality
 - Add new btn
 - Add nav btn
 - route
 - learn lazyloading
 - component seperate
 - learn tailwindcss
 - Add


# TailwindCSS
 Tailwind CSS is a utility-first CSS framework that allows developers to create custom designs directly in the HTML without having to write custom CSS. Instead of defining custom class names for CSS styles, you use pre-defined utility classes provided by Tailwind to style your components.

 Key Features:
Utility-First: Tailwind provides low-level utility classes like flex, text-center, bg-blue-500, etc., to style your application.
Customization: It's highly customizable. You can configure your own design system by adjusting the Tailwind config file (tailwind.config.js), making it easy to adapt to your needs.
Responsive Design: Tailwind offers a responsive design system out-of-the-box with a mobile-first approach. You can easily apply different styles for different breakpoints using responsive utility variants like md:text-lg or lg:bg-red-400.
No CSS File Bloat: Since you only use the classes you need, it keeps your final CSS file small and efficient when properly purged.

CSS frameworks are pre-prepared libraries that make web design easier by providing reusable styles, components, and layouts. They help developers and designers avoid writing custom CSS from scratch and speed up the process of creating responsive, visually appealing websites. Here are some of the most popular CSS frameworks:

=> Bootostarp
=> Bulma
=> Tailwind CSS
=> Materialize
=> Semantic ui
=> Skeleton

# Router
 => createBrowserRouter
 => RouterProvider
 => Div Add


# Added new functionality to improve app features