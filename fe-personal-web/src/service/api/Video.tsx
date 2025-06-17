import HttpnoToken from "../http/httpnoToken";
import Http from "../http/http";
export const getVideo = async (page = 0, size = 10) => {
  try {
    return HttpnoToken.get(`/api/video/all?page=${page}&size=${size}`);
  } catch (error) {
    throw new Error('Failed to fetch videos: ' + error.message);
  }
};
export const getVideoStudent = async (page = 0, size = 5) => {
  try {
    return Http.get(`/api/video/getVideoOfStudent?page=${page}&size=${size}`);
  } catch (error) {
    throw new Error('Failed to fetch videos: ' + error.message);
  }
}
export const removeVideo=async(id)=>{
  try{
    return Http.delete(`/api/video/delete/${id}`);
  }catch(error){
    throw new Error('Failed to remove videos: ' + error.message);
  }
}
export const createVideo = async (VideoDto, file) => {
  const formData = new FormData();
  Object.keys(VideoDto).forEach((key) => {
    formData.append(key, VideoDto[key]);
  })
  if (file) {
    formData.append("file", file);
  }
  try {
    const response = await Http.post("/api/video/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Lỗi khi tạo banner:" + error);
    throw error;
  }
}
export const registerVideo = async (id) => {
  try {
    return Http.post(`/api/video/register/${id}`)
  } catch (error) {
    console.log(error)
  }
}
export const findLatestVideo=async()=>{
  try{
    return Http.get(`/api/video/findLatestVideo`);
  }catch(error){
    console.log(error)
  }
}
export const getVideoById=async(id)=>{
  try{
    return Http.get(`/api/video/${id}`,{
      skipAuth:true
    })
  }catch(error){
    console.log(error)
  }
}