export default function ProductCard({ product }){
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-2 text-lg font-bold text-blue-600">RM {product.price}</div>
            <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Add to Cart
            </button>
        </div>
    );
}