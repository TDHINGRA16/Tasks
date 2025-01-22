import React from 'react';
import useFetch from '../hooks/useFetch';


const ProductList= ()=> {
    const {data,loading,error}= useFetch('https://api.escuelajs.co/api/v1/products');

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen w-screen bg-black">
                <div className="flex flex-col items-center">
                    {/* Spinner */}
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    {/* Loading Text */}
                    <p className="text-center text-lg text-blue-500 mt-4">Loading...</p>
                </div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen w-screen bg-black">
                <p className="text-center text-lg text-red-500">Error: {error}</p>
            </div>
        );
    }
    
    

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.map((product)=> (
                    <div
                    key={product.id}
                    className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <img
                        src={product.images[0]}
                        alt={product.title}
                        className='w-full h-40 object-cover rounded-lg mb-4'
                        />
                        <h2 className="texxt-xl font-semibold">{product.title}</h2>
                        <p className='text-gray-600'>${product.price}</p>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
