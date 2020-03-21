export class ApiResponse {
  // tslint:disable-next-line:variable-name
  total_count: number;
  // tslint:disable-next-line:variable-name
  incomplete_results: boolean;
  items: Item[];
}

export class Item {
  owner: Owner;
  // tslint:disable-next-line:variable-name
  full_name: string;
  // tslint:disable-next-line:variable-name
  created_at: string;
  // tslint:disable-next-line:variable-name
  updated_at: string;
  // tslint:disable-next-line:variable-name
  stargazers_count: number;
  // tslint:disable-next-line:variable-name
  watchers_count: number;
  language: string;
  // tslint:disable-next-line:variable-name
  default_branch: string;
}

export class Owner {
  login: string;
  // tslint:disable-next-line:variable-name
  avatar_url: string;
  type: string;
}
