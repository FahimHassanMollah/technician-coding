import axios from  "../../utils/axios"
export const fetchPostsApi = async () => {
   const response = await axios.get("posts");
    return response.data;
}