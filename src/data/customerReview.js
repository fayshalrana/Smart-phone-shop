import UserPic from "@/assets/images/UserPic.webp";
import UserPic1 from "@/assets/images/UserPic1.webp";
import UserPic2 from "@/assets/images/UserPic2.webp";
import Review from "@/assets/images/Review=Image1.webp";
import Review2 from "@/assets/images/Review=Image2.webp";

export const reviews = [
  {
    id: 1,
    name: "Grace Carey",
    img: UserPic,
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    rating: 4.0,
    date: "24 January,2023",
  },
  {
    id: 1,
    name: "Ronald Richards",
    img: UserPic1,
    comment:
      "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.",
    rating: 5.0,
    date: "24 January,2023",
  },
  {
    id: 1,
    name: "Darcy King",
    img: UserPic2,
    comment:
      "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition",
    rating: 4.0,
    date: "24 January,2023",
    reviewImg: [Review, Review2],
  },
];
