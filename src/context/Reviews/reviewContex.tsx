import { Review } from "@/components/ItemDetail/RatingReviews";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
const initialState = {
  reviews: [],
  loading: false,
  itemId: "",
  setItemId: () => {},
  setReviews: () => {},
  setLoading: () => {},
};

type InitialState = {
  reviews: Review[];
  loading: boolean;
  itemId: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setItemId: Dispatch<SetStateAction<string>>;
  setReviews: Dispatch<SetStateAction<Review[]>>;
};
const ReviewsContext = createContext<InitialState>(initialState);

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [itemId, setItemId] = useState<string>("");

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        setReviews,
        loading,
        setLoading,
        itemId,
        setItemId,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};
export function useReviews() {
  const reviewsState = useContext(ReviewsContext);
  if (reviewsState === null)
    throw new Error("You are trying to access the context out of the scope.");
  else return reviewsState;
}
export default ReviewsContext;
