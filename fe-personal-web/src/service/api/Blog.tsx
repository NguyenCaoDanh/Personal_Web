import Http from "../http/http"

export const getBlog = async (page = 0, size = 10) => {
    return Http.get(`/api/blog/all?page=${page}&size=${size}`, {
        skipAuth: true,
    })
}
export const findBlogById=async(id)=>{
    return await Http.get(`/api/blog/${id}`,{
        skipAuth:true,
    })
}
export const updateBlog=async(BlogDTO,file,id)=>{
    const formData = new FormData();
    formData.append("tieuDe", BlogDTO.tieuDe);
    formData.append("noiDung", BlogDTO.noiDung);
    if (file) {
        formData.append('file', file);
    }
    return await Http.put(`/api/blog/update/${id}`,formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }) 
}
// ✅ Tạo blog
export const createBlog = async (BlogDTO, file) => {
    const formData = new FormData();
    formData.append("tieuDe", BlogDTO.tieuDe);
    formData.append("noiDung", BlogDTO.noiDung);
    if (file) {
        formData.append('file', file);
    }
    return await Http.post("/api/blog/create", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
export const getBlogById = async (id) => {
    return Http.get(`/api/blog/${id}`, {
        skipAuth: true,
    })
}
export const getLatestBlog = async (id) => {
    return Http.get(`/api/blog/getLatest/${id}`, {
        skipAuth: true
    })
}