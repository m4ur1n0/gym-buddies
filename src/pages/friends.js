import React, { useEffect, useState } from "react";
import FriendsPage from "../components/FriendsPage";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";

const Friends = () => {
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!userId) {
    return <div>Loading...</div>;
  }

  return <FriendsPage userId={userId} />;
};

export default Friends;
