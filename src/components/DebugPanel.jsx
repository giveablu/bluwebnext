import React, { useState } from 'react';
import { debugApiConfig, checkApiHealth, testApiEndpoints } from '../utils/apiDebug';

const DebugPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [healthStatus, setHealthStatus] = useState(null);

  const handleDebugConfig = () => {
    debugApiConfig();
  };

  const handleHealthCheck = async () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const result = await checkApiHealth(baseUrl);
    setHealthStatus(result);
  };

  const handleTestEndpoints = async () => {
    const results = await testApiEndpoints();
    setTestResults(results);
  };

  // Only show in development
  if (import.meta.env.MODE === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white px-3 py-2 rounded-full text-sm shadow-lg hover:bg-gray-700"
        title="Debug Panel"
      >
        🔧
      </button>

      {isOpen && (
        <div className="absolute bottom-12 right-0 bg-white border rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Debug Panel</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleDebugConfig}
              className="w-full bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600"
            >
              Log API Config
            </button>

            <button
              onClick={handleHealthCheck}
              className="w-full bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600"
            >
              Check API Health
            </button>

            <button
              onClick={handleTestEndpoints}
              className="w-full bg-purple-500 text-white px-3 py-2 rounded text-sm hover:bg-purple-600"
            >
              Test All Endpoints
            </button>
          </div>

          {healthStatus && (
            <div className="mt-4 p-3 rounded bg-gray-50">
              <h4 className="font-medium text-sm mb-2">Health Check:</h4>
              <div className={`text-sm ${healthStatus.status === 'healthy' ? 'text-green-600' : 'text-red-600'}`}>
                {healthStatus.status}: {healthStatus.message}
              </div>
            </div>
          )}

          {testResults && (
            <div className="mt-4 p-3 rounded bg-gray-50">
              <h4 className="font-medium text-sm mb-2">Endpoint Tests:</h4>
              <div className="space-y-2">
                {testResults.map((result, index) => (
                  <div key={index} className="text-xs">
                    <span className="font-medium">{result.name}:</span>
                    <span className={`ml-2 ${result.ok ? 'text-green-600' : 'text-red-600'}`}>
                      {result.status}
                    </span>
                    {result.requiresAuth && (
                      <span className={`ml-2 text-xs ${result.hasToken ? 'text-blue-600' : 'text-orange-600'}`}>
                        ({result.hasToken ? 'with token' : 'no token'})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 pt-3 border-t text-xs text-gray-500">
            Environment: {import.meta.env.MODE}<br />
            API URL: {import.meta.env.VITE_API_BASE_URL}
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugPanel;
