export type Posts = {
  id: number;
  uuid: string;
  image: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  finished: boolean;
  isFixed: boolean;
  author: string;
  adminId: number;
  createdAt: Date;
  postTagsId: number;
};
