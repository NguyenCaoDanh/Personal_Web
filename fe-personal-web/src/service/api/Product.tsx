import HttpnoToken from "../http/httpnoToken"

export const getsanpham=async(page=0,size=10)=>{
    try{
        return HttpnoToken.get(`/api/san-pham/all?page=${page}&size=${size}`)
    }catch(error){
        console.log(error)
    }
}