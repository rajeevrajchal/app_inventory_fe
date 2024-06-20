import { AUTH_USER } from './auth.model';

export type INSTANCE = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  name: string;
  domain: string;
  location: string;
  description: string;
  repository: string;
  branch: string;
  isParent: boolean;
  status: string;
  user: Partial<AUTH_USER>;
  subSystems: INSTANCE[];
};
