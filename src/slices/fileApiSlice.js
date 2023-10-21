import { BASE_URL } from '../constants';
import { apiSlice } from './apiSlice';


export const fileApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFiles: builder.query({
            query: () => ({
                url: `${BASE_URL}/api/upload`,
            }),
        }),
    }),
});

export const {
    useGetFilesQuery,
} = fileApiSlice;
