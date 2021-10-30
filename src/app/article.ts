export interface Article {
}
// Generated by https://quicktype.io

export interface TopLevel {
  title:          string;
  slug:           string;
  body:           string;
  createdAt:      Date;
  updatedAt:      Date;
  tagList:        any[];
  description:    string;
  author:         Author;
  favorited:      boolean;
  favoritesCount: number;
}

export interface Author {
  username:  string;
  bio:       string;
  image:     string;
  following: boolean;
}