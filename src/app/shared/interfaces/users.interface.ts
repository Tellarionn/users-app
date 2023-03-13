export interface IUsersResponse {
  results: IUsers[];
  info: IInfo;
}

export interface IUsers {
  gender: string;
  name: { title: string; first: string; last: string };
  location: ILocation;
  email: string;
  login: ILogin;
  dob: { date: string; age: number };
  registered: { date: string; age: number };
  phone: string;
  cell: string;
  id: { name: string; value: string };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface ILocation {
  street: { number: number; name: string };
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: { latitude: string; longitude: string };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface IInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}
