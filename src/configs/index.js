import Axios from "axios"

export const baseURL = "https://api.github.com"

const server = Axios.create({ baseURL })

export default server