import axios from  "../../utils/axios"
export const fetchPostsApi = async () => {
   const response = await axios.get("posts");
    return response.data;
}
export const createPostApi = async (data) => {
   const response = await axios.post("posts",data);
    return response.data;
}