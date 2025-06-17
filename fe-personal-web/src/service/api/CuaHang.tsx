import Http from "../http/http"

export const getCuaHang = async () => {
    try {
        return await Http.get("/api/cua-hang/danh-sach", {
            skipAuth: true,
        })
    } catch (error) {
        console.log(error)
    }
}
export const findCuaHangById=async(id)=>{
    return await Http.get(`/api/cua-hang/${id}`,{
        skipAuth:true
    })
}
export const updateCuaHang=async(id,cuaHangDTO)=>{
    return Http.put(`/api/cua-hang/update/${id}`,cuaHangDTO);
}
export const createCuaHang = async (cuaHangDTO) => {
    return Http.post("/api/cua-hang/create", cuaHangDTO);
};
export const getAllCuaHang=async(page=0,size=6)=>{
    return Http.get(`/api/cua-hang/all?page=${page}&size=${size}`,{skipAuth:true})
}