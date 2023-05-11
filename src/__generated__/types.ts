import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Article = {
  __typename?: 'Article';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  text: Scalars['String'];
  thumbnail: File;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CreateUserResponse = MutationResponseIc & {
  __typename?: 'CreateUserResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type DeleteUserMutationResponse = MutationResponseIc & {
  __typename?: 'DeleteUserMutationResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  path: Scalars['String'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type FileUploadResponse = MutationResponseIc & {
  __typename?: 'FileUploadResponse';
  error?: Maybe<Scalars['String']>;
  file?: Maybe<File>;
  ok: Scalars['Boolean'];
};

export type LoginUserResponse = MutationResponseIc & {
  __typename?: 'LoginUserResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: MutationArticleResponse;
  createUser: CreateUserResponse;
  deleteArticle: MutationResponse;
  deleteUser: DeleteUserMutationResponse;
  fileDelete: MutationResponse;
  fileUpdate: FileUploadResponse;
  fileUpload: FileUploadResponse;
  loginUser?: Maybe<LoginUserResponse>;
  updateArticle: MutationArticleResponse;
  updateUser: UpdateUserResponse;
};


export type MutationCreateArticleArgs = {
  text: Scalars['String'];
  thumbnail: Scalars['Upload'];
  title: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationFileDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationFileUpdateArgs = {
  file: Scalars['Upload'];
  id: Scalars['Int'];
  path: Scalars['String'];
};


export type MutationFileUploadArgs = {
  file: Scalars['Upload'];
  path: Scalars['String'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  id: Scalars['Int'];
  text?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type MutationArticleResponse = MutationResponseIc & {
  __typename?: 'MutationArticleResponse';
  data?: Maybe<Article>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MutationResponseIc = {
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getArticle: Article;
  getArticles?: Maybe<Array<Maybe<Article>>>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetArticleArgs = {
  id: Scalars['Int'];
};


export type QueryGetArticlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryGetUsersArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type UpdateUserResponse = MutationResponseIc & {
  __typename?: 'UpdateUserResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  updatedAt: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  DeleteUserMutationResponse: ResolverTypeWrapper<DeleteUserMutationResponse>;
  File: ResolverTypeWrapper<File>;
  FileUploadResponse: ResolverTypeWrapper<FileUploadResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginUserResponse: ResolverTypeWrapper<LoginUserResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationArticleResponse: ResolverTypeWrapper<MutationArticleResponse>;
  MutationResponse: ResolverTypeWrapper<MutationResponse>;
  MutationResponseIc: ResolversTypes['CreateUserResponse'] | ResolversTypes['DeleteUserMutationResponse'] | ResolversTypes['FileUploadResponse'] | ResolversTypes['LoginUserResponse'] | ResolversTypes['MutationArticleResponse'] | ResolversTypes['UpdateUserResponse'];
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateUserResponse: ResolverTypeWrapper<UpdateUserResponse>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  Boolean: Scalars['Boolean'];
  CreateUserResponse: CreateUserResponse;
  DeleteUserMutationResponse: DeleteUserMutationResponse;
  File: File;
  FileUploadResponse: FileUploadResponse;
  Int: Scalars['Int'];
  LoginUserResponse: LoginUserResponse;
  Mutation: {};
  MutationArticleResponse: MutationArticleResponse;
  MutationResponse: MutationResponse;
  MutationResponseIc: ResolversParentTypes['CreateUserResponse'] | ResolversParentTypes['DeleteUserMutationResponse'] | ResolversParentTypes['FileUploadResponse'] | ResolversParentTypes['LoginUserResponse'] | ResolversParentTypes['MutationArticleResponse'] | ResolversParentTypes['UpdateUserResponse'];
  Query: {};
  String: Scalars['String'];
  UpdateUserResponse: UpdateUserResponse;
  Upload: Scalars['Upload'];
  User: User;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserMutationResponse'] = ResolversParentTypes['DeleteUserMutationResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileUploadResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileUploadResponse'] = ResolversParentTypes['FileUploadResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginUserResponse'] = ResolversParentTypes['LoginUserResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createArticle?: Resolver<ResolversTypes['MutationArticleResponse'], ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'text' | 'thumbnail' | 'title'>>;
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'password'>>;
  deleteArticle?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['DeleteUserMutationResponse'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  fileDelete?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationFileDeleteArgs, 'id'>>;
  fileUpdate?: Resolver<ResolversTypes['FileUploadResponse'], ParentType, ContextType, RequireFields<MutationFileUpdateArgs, 'file' | 'id' | 'path'>>;
  fileUpload?: Resolver<ResolversTypes['FileUploadResponse'], ParentType, ContextType, RequireFields<MutationFileUploadArgs, 'file' | 'path'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['LoginUserResponse']>, ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'email' | 'password'>>;
  updateArticle?: Resolver<ResolversTypes['MutationArticleResponse'], ParentType, ContextType, RequireFields<MutationUpdateArticleArgs, 'id'>>;
  updateUser?: Resolver<ResolversTypes['UpdateUserResponse'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>;
};

export type MutationArticleResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationArticleResponse'] = ResolversParentTypes['MutationArticleResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResponseIcResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponseIc'] = ResolversParentTypes['MutationResponseIc']> = {
  __resolveType: TypeResolveFn<'CreateUserResponse' | 'DeleteUserMutationResponse' | 'FileUploadResponse' | 'LoginUserResponse' | 'MutationArticleResponse' | 'UpdateUserResponse', ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<QueryGetArticleArgs, 'id'>>;
  getArticles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Article']>>>, ParentType, ContextType, Partial<QueryGetArticlesArgs>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryGetUsersArgs>>;
};

export type UpdateUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserResponse'] = ResolversParentTypes['UpdateUserResponse']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  DeleteUserMutationResponse?: DeleteUserMutationResponseResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FileUploadResponse?: FileUploadResponseResolvers<ContextType>;
  LoginUserResponse?: LoginUserResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationArticleResponse?: MutationArticleResponseResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  MutationResponseIc?: MutationResponseIcResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateUserResponse?: UpdateUserResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

