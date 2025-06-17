import Http from "../http/http"
import HttpnoToken from "../http/httpnoToken"

export const getBrandCar=async(page=0,size=10)=>{
    try{
        return HttpnoToken.get(`/api/xe/hang-xe/all?page=${page}&size=${size}`)
    }catch(error){
        console.log(error)
    }
}
export const getdshangxe=async()=>{
    try{
        return HttpnoToken.get(`/api/xe/hang-xe/danh-sach`);
    }catch(error){
        console.log(error)
    }
}
export const createBrandCar=async(tenHangXe)=>{
    try{
        const response=await Http.post("/api/xe/hang-xe/create",{tenHangXe});
        return response.data;
    }catch(error){  
        console.log(error);
    }
}
export const updateBrandCar=async(id,tenHangXe)=>{
    try{
        const response=await Http.put(`/api/xe/hang-xe/update/${id}`,{tenHangXe});
        return response.data;
    }catch(error){
        console.log(error);
    }
}
export const removeBrandCar=async(id)=>{
    try{
        const response=await Http.delete(`/api/xe/hang-xe/delete/${id}`);
        return response.data;
    }catch(error){
        console.log(error)
    }
}