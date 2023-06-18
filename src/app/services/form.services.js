import axios from "axios"

const apiEndpoint = "https://api.sbercloud.ru/content/v1/bootcamp/frontend"

const apiServices = {
    post: async (payload) => {
        const {data} = await axios.post(apiEndpoint, payload)
        return data
    }
}
export default apiServices