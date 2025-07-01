import api from '../config/api';

class ApiService {
  // Authentication
  async signIn(email, password) {
    try {
      const response = await api.post('/auth/sign-in', {
        email,
        password
      });
        if (response.data.response && response.data.data?.token) {
        localStorage.setItem('blu_token', response.data.data.token);
        return response.data;
      }
      throw new Error('Invalid response format');
    } catch (error) {
      // Enhanced error handling for production
      if (error.response) {
        // Server responded with error status
        const message = error.response.data?.message || 
                       error.response.data?.error || 
                       `Server error: ${error.response.status}`;
        throw new Error(Array.isArray(message) ? message[0] : message);
      } else if (error.request) {
        // Network error
        throw new Error('Network error: Please check your internet connection');
      } else {
        // Other error
        throw new Error(error.message || 'Login failed');
      }
    }
  }  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data?.message || 
                       error.response.data?.error;
        throw new Error(Array.isArray(message) ? message.join(', ') : message || 'Registration failed');
      } else if (error.request) {
        throw new Error('Network error: Please check your internet connection');
      } else {
        throw new Error(error.message || 'Registration failed');
      }
    }
  }

  async verifyOtp(email, otp) {
    try {
      const response = await api.post('/auth/verify-otp', {
        email,
        otp
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'OTP verification failed');
    }
  }

  async resendOtp(email) {
    try {
      const response = await api.post('/auth/resend-otp', {
        email
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to resend OTP');
    }
  }

  // Donor endpoints
  async getRecipients() {
    try {
      const response = await api.get('/donor-account/home');
      return response.data;
    } catch {
      throw new Error('Failed to fetch recipients');
    }
  }

  async getDonations() {
    try {
      const response = await api.get('/donor-account/donations');
      return response.data;
    } catch {
      throw new Error('Failed to fetch donations');
    }
  }

  async getDonationDetail(id) {
    try {
      const response = await api.get(`/donor-account/donations/${id}`);
      return response.data;
    } catch {
      throw new Error('Failed to fetch donation details');
    }
  }

  // Payment/Donation
  async createDonation(recipientId, amount = 10) {
    try {
      const response = await api.post('/donor-account/payment', {
        recipient_id: recipientId,
        amount: amount
      });
      return response.data;
    } catch {
      throw new Error('Failed to create donation');
    }
  }

  // User profile
  async getProfile() {
    try {
      const response = await api.get('/donor-account/profile');
      return response.data;
    } catch {
      throw new Error('Failed to fetch profile');
    }
  }

  async updateProfile(profileData) {
    try {
      const response = await api.post('/donor-account/profile/update', profileData);
      return response.data;
    } catch {
      throw new Error('Failed to update profile');
    }
  }

  // Utility methods
  isAuthenticated() {
    return !!localStorage.getItem('blu_token');
  }

  logout() {
    localStorage.removeItem('blu_token');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  }

  getToken() {
    return localStorage.getItem('blu_token');
  }
}

export default new ApiService();
