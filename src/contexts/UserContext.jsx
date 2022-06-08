import React from 'react';
const UserContext = React.createContext({
  device_id: undefined,
  chats: [],
  updateDeviceId: (device_id) => {},
});
export default UserContext;
