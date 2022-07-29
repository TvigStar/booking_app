export interface IDoctor {
  _id: string;
  name: string;
  email: string;
  phone: string;
  photoAvatar?: string;
  type: string;
  regToken: string;
  spec: string;
  free: boolean;
  appointmentsAccepted: Record<string, any>[]
}
