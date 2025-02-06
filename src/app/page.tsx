import Banner from "@/components/Banner";
import ContentArea from "@/components/ContentArea";
import ReviewBox from "@/components/ReviewBox";

export default function Home() {
  return (
    <>
      <Banner />
      <ContentArea>
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
        <ReviewBox />
      </ContentArea>

    </>
  );
}
