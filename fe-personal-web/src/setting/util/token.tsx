export const getToken = ()=>{
    try {
        return localStorage.getItem("token");
        return localStorage.getItem("role");
    } catch (error) {
        console.log(error);
    }
    
}