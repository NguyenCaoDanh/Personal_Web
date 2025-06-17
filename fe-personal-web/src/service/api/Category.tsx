import Http from "../http/http"
import HttpnoToken from "../http/httpnoToken"

export const getdanhmuc=async(page=0,size=10)=>{
    try{
        return HttpnoToken.get(`/api/danh-muc/all?page=${page}&size=${size}`)
    }catch(error){
        console.log(error)
    }
}
export const getdanhsachdanhmuc=async()=>{
    try{
        return HttpnoToken.get(`/api/danh-muc/danh-sach`);
    }catch(error){
        console.log(error)
    }
}
export const createdanhmuc=async(danhmucDTO)=>{
    try{
        const response=await Http.post("/api/danh-muc/create",danhmucDTO);
        return response.data;
    }catch(error){
        console.log(error);
    }
}
export const updatedanhmuc=async(id,danhmucDTO)=>{
    try{
        const response=await Http.put(`/api/danh-muc/update/${id}`,danhmucDTO);
        return response.data;
    }catch(error){
        console.log(error);
    }
}
export const removedanhmuc=async(id)=>{
    try{
        return await Http.delete(`/api/danh-muc/delete/${id}`);
    }catch(error){
        console.log(error)
    }
}