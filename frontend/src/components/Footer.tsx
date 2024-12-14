import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SKILL SPHERE</h3>
            <p className="text-gray-400">Empowering careers through skill development and job matching.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/accessibility" className="text-gray-400 hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="/agreement" className="text-gray-400 hover:text-white transition-colors">User Agreement</a></li>
              <li><a href="/policy" className="text-gray-400 hover:text-white transition-colors">Brand Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="/guidelines" className="text-gray-400 hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="/controls" className="text-gray-400 hover:text-white transition-colors">Guest Controls</a></li>
              <li><a href="/feedback" className="text-gray-400 hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                contact@skillsphere.com
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                123 Innovation Street, Tech City
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} SKILL SPHERE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}