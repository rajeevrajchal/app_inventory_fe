import { $FIX_ME } from 'app/types/fix_me.type';

export type COLUMN = {
  header?: string;
  accessor_key: string;
  formatter?: {
    key: string;
    value: string;
  };
  cell?: (row: $FIX_ME) => $FIX_ME;
};
