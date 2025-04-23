import React from 'react';
import { FaUniversalAccess, FaCode, FaChartBar, FaRocket, FaTools, FaCheckCircle, FaExclamationTriangle, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="text-6xl text-blue-400 animate-pulse">
            <FaUniversalAccess />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to <span className="text-blue-400">AccessibilityAnalyzer</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your comprehensive solution for web accessibility testing and improvement. We help make the web accessible to everyone, one page at a time.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="text-2xl text-blue-400 mr-3">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-semibold text-white">Instant Analysis</h3>
            </div>
            <p className="text-gray-300">Get immediate feedback on your web content's accessibility compliance with detailed reports and recommendations.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="text-2xl text-blue-400 mr-3">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold text-white">Multiple Input Options</h3>
            </div>
            <p className="text-gray-300">Analyze content via URL, direct HTML input, or file upload - whatever works best for your workflow.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="text-2xl text-blue-400 mr-3">
                <FaDownload />
              </div>
              <h3 className="text-xl font-semibold text-white">Export Results</h3>
            </div>
            <p className="text-gray-300">Download comprehensive reports for documentation, team sharing, and tracking improvements over time.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto mb-16 bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-white mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
              <div className="text-blue-400 mr-3">
                <FaTools />
              </div>
              What We Check
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                WCAG 2.1 Guidelines Compliance
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                Color Contrast and Readability
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                Alt Text for Images
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                Semantic HTML Structure
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                Keyboard Navigation
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
              <div className="text-blue-400 mr-3">
                <FaExclamationTriangle />
              </div>
              Common Issues We Detect
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                Missing Alternative Text
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                Insufficient Color Contrast
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                Missing Form Labels
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                Improper Heading Structure
              </li>
              <li className="flex items-start">
                <div className="text-green-400 mt-1 mr-2">
                  <FaCheckCircle />
                </div>
                Non-descriptive Link Text
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Why It Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-white">For Developers</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Catch accessibility issues early in development
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Save time with automated testing
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Improve code quality and maintainability
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Meet accessibility compliance requirements
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4 text-white">For Organizations</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Reach a wider audience
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Reduce legal risks
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Demonstrate social responsibility
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Improve SEO and user experience
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 border border-blue-500">
          <h2 className="text-3xl font-bold text-white mb-4">Start Making Your Web Content Accessible Today</h2>
          <p className="text-white text-xl mb-8">Join thousands of developers in creating a more inclusive web experience.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <div className="mr-2">
              <FaRocket />
            </div>
            Try It Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About; 