import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Define item styles for ThinStar shape
const itemStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#f59e0b',
    inactiveFillColor:  'transparent',
    inactiveBoxBorderColor: '#000000'
  };
export default function getRating(rating, width) {
  return (
    <Rating
      key="RoundedStar" // Provide a unique key
      value={rating}
      style={{ maxWidth: width, maxHeight: width }}
      itemStyles={itemStyles}
      readOnly
    />
  );
}