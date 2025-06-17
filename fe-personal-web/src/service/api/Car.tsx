import Http from "../http/http"
import HttpnoToken from "../http/httpnoToken"

export const GetCar=async(page=0,size=10)=>{
    try{
        return HttpnoToken.get(`/api/xe/thong-tin/all?page=${page}&size=${size}`)
    }catch(error){
        console.log(error)
    }
}
export const RemoveCar=async(id)=>{
    try{
        return Http.delete(`/api/xe/thong-tin/delete/${id}`);
    }catch(error){
        console.log(error);
    }
}
export const updateCar=async(id,carData)=>{
    try{
        const response=await Http.put(`/api/xe/thong-tin/update/${id}`,carData);
        return response.data;
    }catch(error){
        console.log(error)
    }
}
export const createCar=async(carData)=>{
    try{
        const response=await Http.post("/api/xe/thong-tin/create",carData);
        return response.data;
    }catch(error){
        console.error("Lỗi khi tạo thông tin xe:", error);
        throw error;
    }
}