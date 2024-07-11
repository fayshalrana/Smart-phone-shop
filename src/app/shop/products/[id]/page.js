import BreadCrumb from "@/components/screen/productDetails/BreadCrumb";
import ProductDetailsText from "@/components/screen/productDetails/ProductDetailsText";
import ProductInformation from "@/components/screen/productDetails/ProductInformation";
import RelatedProduct from "@/components/screen/productDetails/RelatedProduct";
import ReviewAndComment from "@/components/screen/productDetails/ReviewAndComment";

export default function page() {
  return (
    <>
      <BreadCrumb />
      <ProductInformation/>
      <ProductDetailsText/>
      <ReviewAndComment/>
      <RelatedProduct/>
    </>
  );
}
