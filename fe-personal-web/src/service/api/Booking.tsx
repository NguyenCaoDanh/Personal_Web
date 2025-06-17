import Http from "../http/http"

export const createDatLich=async(DatlichDTo)=>{
    return await Http.post("/api/dat-lich",DatlichDTo);
}
export const GetAllAdmin=async(page=0,size=10)=>{
    return await Http.get(`/api/dat-lich/all?page=${page}&size=${size}`);
}
export const GetDetailBooking=async(id)=>{
    return await Http.get(`/api/dat-lich/${id}`)
}