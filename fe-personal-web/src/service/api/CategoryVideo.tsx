import Http from "../http/http";
import HttpnoToken from "../http/httpnoToken";

export const getCategoryVideo=async(page=0,size=10)=>{
    try{
        return HttpnoToken.get(`/api/danh-muc-video/all?page=${page}&size=${size}`);
    }catch(error){
        console.log(error);
    }
}
//Lấy danh sách danh mục Video không có phân trang
export const getAllCategoryVideo=async()=>{
    try{
      return HttpnoToken.get("/api/danh-muc-video/getAll");
    }catch(error){
      throw new Error('Failed to fetch videos: '+error.message);
    }
  }
export const createCategoryVideo=async(tendanhmuc)=>{
    
    try{
        const response=await Http.post(`/api/danh-muc-video/create`,{tendanhmuc});
        return response.data;
    }catch(error){
        console.error("Lỗi khi tạo danh mục video:"+error);
        throw error;
    }
}
export const removeCategoryVideo=async(id)=>{
    try{
        const response=await Http.delete(`/api/danh-muc-video/delete/${id}`);
        return response.data;
    }catch(error){
        console.error("Lỗi khi xóa danh mục video:"+error);
        throw error;
    }
}
export const updateCategoryVideo=async(id,tendanhmuc)=>{
    try{
    const response=await Http.put(`/api/danh-muc-video/update/${id}`,{tendanhmuc});
    return response.data;
    }catch(error){
        console.error("Lỗi khi cập nhật danh mục video:"+error);
    }
}