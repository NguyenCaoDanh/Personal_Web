import Http from '../http/http';

// ✅ Đăng nhập / Đăng xuất
export const login = (username, password) => {
  return Http.post(
    '/api/account/login',
    { username, password },
    { skipAuth: true,
      withCredentials: true,
     }
  );
};
export const Logout = () => {
  return Http.post('/auth/logout');
};

// ✅ Đăng ký tài khoản đơn giản với username và password
export const RegisUser = (username, password) => {
  return Http.post(
    'api/account/regis',
    { username, password },
    { skipAuth: true }
  );
};


export const RegisStudent = (username, password) => {
  return Http.post(
    '/api/account/register/student',
    { username, password },
    { skipAuth: true }
  );
};

// ✅ Quên mật khẩu / Reset mật khẩu
export const sendResetToken = (email) => {
  return Http.post(
    '/api/account/send-reset-token',
    { email },
    { skipAuth: true }
  );
};
export const resetPassword = (token, email, newPassword) => {
  return Http.put(
    '/api/account/reset-password',
    { token, email, newPassword },
    { skipAuth: true }
  );
};

// ✅ Đổi mật khẩu sau khi đăng nhập
export const changePassword = (oldPassword, newPassword) => {
  return Http.put(
    '/api/account/change-password',
    { oldPassword, newPassword },
    { skipAuth: true }
  );
};

// ✅ Lấy thông tin cá nhân
export const getCurrentUser = () => {
  return Http.get('/api/account/auth/me', { skipAuth: true });
};

// ✅ Cập nhật thông tin cá nhân
export const updateAccountInfo = (accountDTO) => {
  return Http.put('/api/account/auth/change-info', accountDTO, {
    skipAuth: true,
  });
};

// ✅ Lấy avatar người dùng
export const getUserAvatar = () => {
  return Http.get('/api/account/my-avatar', { responseType: 'blob' });
};

// ✅ Upload avatar mới
export const uploadUserAvatar = (formData) => {
  return Http.post('/api/account/avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
