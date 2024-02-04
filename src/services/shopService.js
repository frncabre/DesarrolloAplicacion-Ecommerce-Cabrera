import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_url } from "../firebase/database"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl:base_url}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        getProducts: builder.query({
            query: () => 'products.json',
        }),
        getProductById: builder.query({
            query: (productId) => `products/${productId}.json`,
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
        }),
        postOrder: builder.mutation({
            query: ({total, cartItems, user, createdAt, localId, orderId}) => ({
                url: `orders/${localId}.json`,
                method: 'POST',
                body: {
                    total: total,
                    cartItems: cartItems,
                    user: user,
                    createdAt: createdAt,
                    orderId: orderId
                }
            })
        }),
        getOrders: builder.query({
            query: (localId) => `orders/${localId}.json`
        }),
        putProfilePicture: builder.mutation({
            query: ({image, localId})=>({
                url:  `profilePictures/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image,
                }
            })
        }),
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json` 
        }),
        getUserLocation: builder.query({
            query: (localId) => `locations/${localId}.json`
        }),
        putUserLocation: builder.mutation({
            query: ({location, localId})=>({
                url:  `locations/${localId}.json`,
                method: 'PUT',
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address,
                }
            })
        }),

    })
})

export const {
    useGetCategoriesQuery, 
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetProductsByCategoryQuery, 
    usePostOrderMutation,
    useGetOrdersQuery,
    usePutProfilePictureMutation,
    useGetProfilePictureQuery,
    useGetUserLocationQuery,
    usePutUserLocationMutation,
} = shopApi