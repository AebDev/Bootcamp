
const UserItem = ({ user }) => {
    return (
        <li className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-1">@{user.username}</p>
            <p className="text-blue-500 hover:underline">{user.email}</p>
        </li>
    )
};

export default UserItem