import Http from "../http/http";
import HttpnoToken from "../http/httpnoToken";

export const getloaixe=async(page=0,size=10)=>{
    try{
        return HttpnoToken.get(`/api/xe/loai-xe/all?page=${page}&size=${size}`)
    }catch(error){
        console.log(error);
    }
}
export const getdsloaixe=async()=>{
    try{
        return HttpnoToken.get("/api/xe/loai-xe/danh-sach");
    }catch(error){
        console.log(error)
    }
}
export const createloaixe=async(tenLoaiXe)=>{
    try{
        const response=await Http.post("/api/xe/loai-xe/create",{tenLoaiXe});
        return response.data;
    }catch(error){
        console.log(error)
    }
}
export const updateLoaixe=async(id,tenLoaiXe)=>{
    try{
        const response=await Http.put(`/api/xe/loai-xe/update/${id}`,{tenLoaiXe});
        return response.data;
    }catch(error){
        console.log(error)
    }
}
export const removeloaixe=async(id)=>{
    try{
        const response=await Http.delete(`/api/xe/loai-xe/delete/${id}`);
        return response.data;
    }catch(error){
        console.log(error)
    }
}