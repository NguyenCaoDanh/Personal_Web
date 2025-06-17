import Http from "../http/http";
import HttpnoToken from "../http/httpnoToken";

export const getBanner=async(page=0,size=10)=>{
    try{
        return HttpnoToken.get(`/api/banner/all?page=${page}&size=${size}`);
    }catch(error){
        throw new Error('Failed to fetch videos: ' + error.message);
    }
}
export const createBanner=async(bannerDTO,file)=>{
    const formData=new FormData();
    Object.keys(bannerDTO).forEach((key)=>{
        formData.append(key,bannerDTO[key]);
    });
    if(file){
        formData.append("file",file);
    }
    try{
        const response=await Http.post("/api/banner/create",formData,{
            headers:{
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    }catch(error){
        console.error("Lỗi khi tạo banner:"+error);
        throw error;
    }
}

export const getById=async(id)=>{
    return Http.get(`/api/banner/${id}`,{skipAuth:true})
}
export const updateBanner=async(bannerDTO,file,id)=>{
    try{
        const formData=new FormData();
        Object.keys(bannerDTO).forEach((key)=>{
            formData.append(key,bannerDTO[key]);
        });
        if(file){
            formData.append("file",file);
        }
        const response= await Http.put(`/api/banner/update/${id}`,formData,{
            headers:{
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    }catch(error){
        console.log("Lỗi khi cập nhật banner:"+error)
    }
}
export const removeBanner=async(id)=>{
    try{
        return await Http.delete(`/api/banner/delete/${id}`);
    }catch(error){
        console.log("Lỗi khi xóa banner:"+error);
        throw error;
    }
}