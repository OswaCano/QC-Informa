import {useState} from "react";
import {createPost} from "../../api/posts.js";
import {useNavigate} from "react-router-dom";

function PostForm() {

    const nav = useNavigate();

    const [post, setPost] = useState({
        title: "",
        content: "",
        image: "",
        active: true,

    });

    // Obtener userId (desde localStorage o contexto de autenticación)
    //const userId = localStorage.getItem("userId");

    const handleChange = (e) => {
        const {name, type, checked, value} = e.target;

        setPost({
            ...post,
            [name]: type === "checkbox" ? checked : value,
        });
        //copia los valores anteriores y cambia el valor de la propiedad que se esta modificando
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        /*if (!userId) {
            console.error("No hay usuario autenticado.");
            return;
        }
        Esto es para verificar el usuario antes de subir el post
         */

        try {
            const newPost = await createPost({ ...post});
            console.log("Post creado:", newPost);
            nav("/home");
        } catch (error) {
            console.error("Error al crear el post:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titulo del post"
                    name="title"
                    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    onChange={handleChange}
                />

                <textarea
                    name="content"
                    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Contenido del post"
                    onChange={handleChange}
                > </textarea>

                <label htmlFor="" className="inline-flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        name="active"
                        checked={post.active}
                        onChange={handleChange}
                        className="h-5 w-5 text-indigo-600"
                    />
                    <span>Activo</span>
                </label>

                <button type="submit" className="bg-indigo-500 text-white px-3 rounded-lg w-full block py-2">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default PostForm;