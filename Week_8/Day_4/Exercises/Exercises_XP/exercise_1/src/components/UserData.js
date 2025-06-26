import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { startFetch, successFetch, failedFetch, setUsers } from "../features/users/usersSlice";
import UserItem from "./UserItem";

const UserData = () => {
    const dispatch = useDispatch();
    const { users, isLoading, error } = useSelector((state) => state.users);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(startFetch());
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                dispatch(setUsers(response.data));
                dispatch(successFetch());
            } catch (error) {
                dispatch(failedFetch(error.message));
            }
        };

        fetchData();
    }, [dispatch]);


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 my-8">Users</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {users.length === 0 && !isLoading ? (
                    <p className="text-center text-gray-500">No users found</p>
                ) : (
                    users.map((user) =>
                        <UserItem user={user} />)
                )}
            </ul>
        </div>
    );
}
export default UserData;