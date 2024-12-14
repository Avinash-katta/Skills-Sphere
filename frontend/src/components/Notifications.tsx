import { Bell } from 'lucide-react';

const Notifications = () => {
  return (
    <button className="p-2 rounded-full hover:bg-gray-700 transition-all duration-200">
      <Bell size={20} />
    </button>
  );
};

export default Notifications;
