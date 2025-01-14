import React, { useEffect, useState } from "react";
import { fetchFriends, sendNotification, addFriend } from "../firebase/firestore";

const FriendsPage = ({ userId }) => {
  const [friends, setFriends] = useState([]);
  const [newFriendUid, setNewFriendUid] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFriends = async () => {
      const friendsData = await fetchFriends(userId);
      setFriends(friendsData);
    };
    loadFriends();
  }, [userId]);

  const handlePunch = async (friendUid, friendName) => {
    const message = `You were punched by ${friendName}! Time to work out!`;
    await sendNotification(friendUid, message);
    alert(`Punch sent to ${friendName}`);
  };

  const handleAddFriend = async () => {
    try {
      await addFriend(userId, newFriendUid);
      alert("Friend added successfully!");
      setNewFriendUid("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="friends-page">
      <h1 className="text-2xl font-bold mb-4">Your Friends</h1>

      <div className="add-friend mb-6">
        <h2 className="text-lg font-semibold">Add a Friend</h2>
        <input
          type="text"
          placeholder="Enter friend's UID"
          value={newFriendUid}
          onChange={(e) => setNewFriendUid(e.target.value)}
          className="border rounded px-3 py-2 mr-2"
        />
        <button
          onClick={handleAddFriend}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Friend
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <ul className="space-y-4">
        {friends.map((friend) => (
          <li key={friend.uid} className="flex items-center bg-gray-100 p-4 rounded shadow">
            {/* <img
              src={`avatars/${friend.avatar_level || 1}.png`}
              alt="Avatar"
              className="h-16 w-16 rounded-full"
            /> */}
            <div className="ml-4">
              <h2 className="text-lg font-bold">{friend.name}</h2>
              <p className="text-sm text-gray-500">Bio: {friend.bio || "No bio"}</p>
              <p className="text-sm">Streak: {friend.streak || 0} days</p>
              <button
                onClick={() => handlePunch(friend.uid, friend.name)}
                className="bg-red-500 text-white px-3 py-2 rounded mt-2"
              >
                Punch!
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsPage;
