/* eslint-disable @typescript-eslint/naming-convention */
import { IFilme } from './IFilme.model';

export interface IListaFilmes {
  page?: number;
  results?: IFilme[];
  total_results?: number;
  total_pages?: number;
}
