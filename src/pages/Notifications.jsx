import React from "react";
import UserImage from "/user_profile.png";

import { getNotifications } from "../services/notificationService";
import { useQuery } from "@tanstack/react-query";

export default function Notifications() {
  // const notifications = [
  //   {
  //     userImage: UserImage,
  //     actionText: "@Mosab started following you.",
  //   },
  //   {
  //     userImage: UserImage,
  //     actionText:
  //       "@Mosab started reading Harry Potter: The Prisoner of Azkaban.",
  //   },
  //   {
  //     userImage: UserImage,
  //     actionText: "@Jane added The Great Gatsby to their library.",
  //   },
  // ];

  const {
    data: notifications,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => getNotifications(localStorage.getItem("token")),
  });

  if (isLoading) return <div className="spinner"></div>;
  if (error) return <p>Error fetching notifications</p>;

  console.log(notifications);

  return (
    <div className="flex flex-col gap-md py-md">
      <h2 className="text-lg sm:text-xl md:text-2xl text-accent-v bg-clip-text text-transparent font-semibold text-center">
        Notifications
      </h2>
      <div className="flex flex-col gap-2 sm:gap-3">
        {notifications?.length > 0 ? (
          notifications?.map((notification, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 py-2 sm:py-3 px-4 sm:px-6 bg-secondary-black text-secondary-gray w-full rounded-xl"
            >
              {/* User Image */}
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={notification?.userImage}
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Text */}
              <p className="text-sm sm:text-base md:text-md text-primary-white">
                {notification?.actionText}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm sm:text-base md:text-lg text-primary-gray text-center">
            No notifications yet. Start exploring to connect with others!
          </p>
        )}
      </div>
    </div>
  );
}
