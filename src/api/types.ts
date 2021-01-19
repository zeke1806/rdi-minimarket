import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  stock: Scalars['Float'];
  uPrice: Scalars['Float'];
};

export type CreateProductInput = {
  name: Scalars['String'];
  stock: Scalars['Float'];
  uPrice: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

