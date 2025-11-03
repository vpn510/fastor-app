import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\d{10}$/.test(mobile)) {
      localStorage.setItem('mobile', mobile);
      navigate('/otp');
    } else {
      setError('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome to Fastor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;