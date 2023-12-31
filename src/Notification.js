import React, { useState } from "react";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Appointment",
      content: "You have a new appointment with Dr. Neha Bajimaya.",
    },
    {
      id: 2,
      title: "Payment Received",
      content: "Payment of Rs. 1000 has been received.",
    },
    {
      id: 3,
      title: "Reminder",
      content: "Don't forget your upcoming appointment on coming Sunday.",
    },
  ]);

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={!notification.read ? "unread" : ""}
            >
              <h3>{notification.title}</h3>
              <p>{notification.content}</p>
              {!notification.read && (
                <button onClick={() => markAsRead(notification.id)}>
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications.</p>
      )}
    </div>
  );
};

export default NotificationsPage;
