import ContentArea from "@/components/ContentArea";
import ReviewBox from "@/components/ReviewBox";

export default function Home() {
  return (
    <>
      <ContentArea>
        <ReviewBox menu={["Sushios", "Joe"]} disabled={false} reviewed={true} date={new Date(Date.now())} />
        <ReviewBox menu={["Sushios", "Joe"]} disabled={false} reviewed={false} date={new Date(Date.now())} />
        <ReviewBox menu={["Sushika", "Joe"]} disabled={true} date={new Date(Date.now())} reviewed={false} />
        <ReviewBox menu={["Sushima", "Joe"]} disabled={true} reviewed={true} date={new Date(Date.now())} />
      </ContentArea>

    </>
  );
}
