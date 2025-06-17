import Http from "../http/http"

export const createBinhLuanTinTuc=async(TintucDTO)=>{
    try{
        return Http.post("/api/binh-luan-tin-tuc/create",TintucDTO);
    }catch(error){
        console.log(error)
    }
}
export const getTinTuc=async(id)=>{
    try{
        return Http.get(`/api/binh-luan-tin-tuc/all/${id}`,{
            skipAuth:true
        })
    }catch(error){
        console.log(error);
    }
}