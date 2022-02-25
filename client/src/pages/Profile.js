import React from "react";
// import "./profile.css";

import { useQuery } from "@apollo/client";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import ToVisitList from "../components/ToVisitList";
import VisitedList from "../components/VisitedList";

import { QUERY_ME } from "../utils/queries";

const Profile = () => {
  // Check if data is returning from the `QUERY_ME` query
  const { loading, data } = useQuery(QUERY_ME);
  const profile = data?.me || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <div>
        <Header />
        <h4>
          You need to be logged in to see your profile page. Use the navigation
          links above to sign up or log in!
        </h4>
      </div>
    );
  }

  return (
    <section>
      <Header />
      <div>
        <div>
          <ToVisitList toVisitResults={profile.toVisitList} />
        </div>
        <div>
          <VisitedList visitedResults={profile.visitedList} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
