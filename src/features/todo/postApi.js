import axios from  "../../utils/axios"
export const fetchPostsApi = async (data) => {
   const response = await axios.post("admin/login", data);
    return response.data;
}