import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_DATA = [
  {
    id: "m1",

    image:
      "https://lh3.googleusercontent.com/sWTD5ADtX5jD9M9YOBClu2dcOK7dUJAsiqzQnhMybyYcX2cPFO4sPmxNbBP50kOr-GKz=s85",
  },
];

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  fetch(
    "https://react-getting-started-3a303-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
    });
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>ML aided Melody Generation and Scale detection</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default MainPage;
