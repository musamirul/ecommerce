export default function Register() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-grey-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full border rounded px-3 py-3" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full border rounded px-3 py-3" placeholder="you@example.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full border rounded px-3 py-2" placeholder="******" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}