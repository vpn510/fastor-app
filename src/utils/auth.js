// Check if user is logged in
export const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

// Save login state
export const loginUser = (mobile) => {
  localStorage.setItem('mobile', mobile);
  localStorage.setItem('isLoggedIn', 'true');
};

// Clear login state
export const logoutUser = () => {
  localStorage.removeItem('mobile');
  localStorage.removeItem('isLoggedIn');
};

// Get mobile number
export const getUserMobile = () => {
  return localStorage.getItem('mobile') || '';
};