import { $FIX_ME } from 'app/types/fix_me.type';
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
  features: $FIX_ME;
};
