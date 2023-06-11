import { ArgsType, Field, InputType, ObjectType } from "type-graphql";

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
  @Field(() => Number)
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
  @Field(() => Number)
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
export class ResponseGetAllPosts {
  @Field()
  message: string;

  @Field()
  status: number;

  @Field(() => [PostType], { nullable: true })
  data?: PostType[];
}

@ObjectType()
export class ResponseGetOnePost {
  @Field()
  message: string;

  @Field()
  status: number;

  @Field(() => PostType, { nullable: true })
  data?: PostType;
}

@ArgsType()
export class ArgsGetOnePost {
  @Field()
  find: string;
}

@ArgsType()
export class ArgsGetAllPost {
  @Field(() => Number, { nullable: true })
  limit?: number;

  @Field(() => Number, { nullable: true })
  init?: number;
}
