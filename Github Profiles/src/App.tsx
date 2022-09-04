import React, { useState } from "react";
import Form from "./components/Form";
import Profile from "./components/Profile";

//Todo: Fetch Repos And Fix UI When Uer Not Found. Response Status 404
function App() {
  const [userProfile, setUserProfile] = useState<any>(null);

  const setUserProfileHandler = (userProfile: any) => {
    setUserProfile(userProfile);
  };
  return (
    <>
      <Form setUserProfileHandler={setUserProfileHandler} />
      <Profile userProfile={userProfile} />
    </>
  );
}

export default App;
