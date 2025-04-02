import api from "./axiosConfig.js";

export const getPosts = async () => {
    try {
        const response = await api.get("/posts");
        return response.data;
    } catch (error) {
        console.error("Error al obtener los posts:", error);

        if (error.response) {
            // Error de respuesta del servidor (ej. 404, 500)
            console.warn("Respuesta del servidor:", error.response.data);
            throw new Error(`Error del servidor: ${error.response.status} - ${error.response.data.message || "Error desconocido"}`);
        } else if (error.request) {
            // Error en la solicitud (el servidor no responde)
            throw new Error("No se recibió respuesta del servidor.");
        } else {
            // Otro tipo de error (ej. error en la configuración de axios)
            throw new Error("Error en la configuración de la solicitud.");
        }
    }
};

export const createPost = async (post) => {
    if (!post.title || !post.content) {
        throw new Error("Title and content are required");
    }
    
    try {
        const response = await api.post("/posts", {...post});
        return response.data;
    } catch (error) {
        console.error("Error al obtener los posts:", error);
        throw error;
    }
};

export const updatePost = async (id, post) => {
    if (!post.title || !post.content) {
        throw new Error("Title and content are required");
    }

    const response = await api.put(`/posts/${id}`, { post });
    return response.data;
}

export const deletePost = async (id) => {
    if (!id) {
        throw new Error("no existe el post a eliminar");
    }
    try {
        const response = await api.delete(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los posts:", error);
    }
}