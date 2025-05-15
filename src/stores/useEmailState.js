import { create } from 'zustand';
import axios from '../lib/axios';
import { toast } from 'react-hot-toast';

export const useEmailState = create((set,get) => ({
    loading: false,

    sendEmail: async (data) => {

        set({ loading : true })

        try {
            await axios.post('/', data);
            set({ loading: false });
            return toast.success("Email sent successfully!");
        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.message || 'An error occurred');
        }
    }

   
}))
