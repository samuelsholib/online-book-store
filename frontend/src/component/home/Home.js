import React from "react";
import RecommendedBooks from "./RecommendedBooks";
import SearchBanner from "./SearchBanner";
import ContactUs from "./ContactUs";


function Home() {
  return(
    <>
      <SearchBanner />
      <RecommendedBooks />
      <ContactUs />
    </>
  );
}

export default Home;
