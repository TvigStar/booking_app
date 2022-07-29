export interface IUser {
  _id: string;
  name: string;
  email: string;
  regToken: string;
  phone: string;
  photoAvatar?: string;
  type: string;
  appointments: Record<string, any>[];
}
