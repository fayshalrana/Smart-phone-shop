import Features from "@/components/screen/home/features/Features";
import Banner from "@/components/screen/home/banner/Banner";
import Category from "@/components/screen/home/category/Category";
import Products from "@/components/screen/home/products/Products";
import ProductSlider from "@/components/screen/home/productSlider/ProductSlider";
import Discount from "@/components/screen/home/discount/Discount";
import CallToAction from "@/components/screen/home/CallToAction/CallToAction";

export default function Home() {
  return (
    <>
      <Banner/>
      <Features/>
      <Category/>
      <Products/>
      <ProductSlider/>
      <Discount/>
      <CallToAction/>
    </>
  );
}
