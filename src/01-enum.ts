export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
}

const firstUser: User = {
  username: 'Angel',
  role: ROLES.ADMIN
};
