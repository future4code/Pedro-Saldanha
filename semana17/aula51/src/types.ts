export type user = {
   id: string
   name: string
   nickname: string
   email: string
   zipcode: string
   street?: string
   number: string
   complement?: string
   neighborhood?: string
   city?: string
   state?: string
}

export type addressInfo = {
   street: string,
   neighborhood: string,
   city: string,
   state: string
}