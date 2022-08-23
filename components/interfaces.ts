import { StaticImageData } from 'next/image';

export interface IService {
  id: string;
  name: string;
  img?: string | StaticImageData;
  link?: string;
  desc: string;
  inEdit?: boolean;
  handleServiceDelete?: () => void;
  handleServiceAdd?: () => void;
}
