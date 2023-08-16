import React from "react";
import UserCard from "./UserCard";
export default function Ucard () {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 m-6 md:grid-cols-2 lg:grid-cols-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
