import { Field, ObjectType } from "type-graphql";

export type Posts = {
  id: number;
  uuid: string;
  image?: string;
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

@ObjectType()
class PostContent {
  @Field()
  id: number;

  @Field()
  content: string;

  @Field()
  order: number;

  @Field(() => String, { nullable: true })
  reference?: string | null;

  @Field(() => Number, { nullable: true })
  size?: number | null;

  @Field()
  type: string;
}

@ObjectType()
class Users {
  @Field()
  email: string;

  @Field()
  name: string;
}

@ObjectType()
class PostTags {
  @Field()
  name: string;
}

@ObjectType()
export class PostType {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => String, { nullable: true })
  image?: string | null;

  @Field()
  finished: boolean;

  @Field()
  slug: string;

  @Field()
  author: string;

  @Field()
  isFixed: boolean;

  @Field()
  uuid: string;

  @Field()
  adminId: number;

  @Field(() => Users)
  users: Users;

  @Field(() => PostTags)
  postTags: PostTags;

  @Field(() => [PostContent])
  PostContent: PostContent[];
}

@ObjectType()
export class ResponseUser {
  @Field()
  message: string;

  @Field()
  status: number;

  @Field(() => [PostType], { nullable: true })
  data?: PostType[];
}
