import { countries } from "../data"
import { countryBasicInfo } from "../types"


export const basicInfoCountries: countryBasicInfo [] = countries.map((country) => {
    return {
        id: country.id,
        name: country.name
    }
})