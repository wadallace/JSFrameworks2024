export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface IPaginatedUsers {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: IUser[];
}
