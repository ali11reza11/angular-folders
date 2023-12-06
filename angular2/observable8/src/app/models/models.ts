export interface Iuser {
  id: number,
  name: string
}

export interface Iaddress {
  userid: number,
  country: string,
  state: string,
  city: string,
  street: string,
  zipcode: number,
  user?: string
}