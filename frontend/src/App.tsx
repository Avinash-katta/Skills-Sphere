import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { Briefcase, TrendingUp, Award, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Career Potential
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered job matching and skill development platform
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-all duration-200">
              <Briefcase className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
              <p className="text-gray-300">AI-powered job recommendations based on your skills and experience</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-all duration-200">
              <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Skill Analytics</h3>
              <p className="text-gray-300">Real-time insights into market trends and in-demand skills</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-all duration-200">
              <Award className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <p className="text-gray-300">Earn verified badges and certificates for your achievements</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-all duration-200">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-300">Connect with professionals and join mentoring programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Trends Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Trending Job Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "AI/ML Engineer",
                growth: "+45%",
                salary: "$120k - $200k",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              },
              {
                role: "Cloud Architect",
                growth: "+38%",
                salary: "$130k - $190k",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              },
              {
                role: "Data Scientist",
                growth: "+42%",
                salary: "$100k - $180k",
                image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-200">
                <img src={job.image} alt={job.role} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
                  <p className="text-green-400 mb-1">Growth: {job.growth}</p>
                  <p className="text-gray-300">Salary Range: {job.salary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;