import API from './api';

const PostsService = {
  getAllPosts: async () => {
    try {
      const response = await API.get('/posts');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPostById: async (id) => {
    try {
      const response = await API.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createPost: async (postData) => {
    try {
      const response = await API.post('/posts', postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updatePost: async (id, postData) => {
    try {
      const response = await API.put(`/posts/${id}`, postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deletePost: async (id) => {
    try {
      const response = await API.delete(`/posts/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default PostsService;