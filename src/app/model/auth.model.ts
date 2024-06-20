export type AUTH_USER = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  otp: string;
  auth_provider: string;
  auth_provider_id: string;
  refresh_token: string;
  reset_token: string;
  is_temp: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  otp_expiry: Date;
};
