/* eslint-disable @typescript-eslint/naming-convention */
export interface IFilme{
  objectId?: string;
  createdAt?: string;
  updatedAt?: string;
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  iD?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}
