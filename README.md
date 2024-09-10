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
 