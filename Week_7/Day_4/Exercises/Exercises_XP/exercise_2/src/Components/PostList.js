import { useState, useEffect } from "react";
import myData from '../data/myData.json';


const PostList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(myData);
    }, []);

    return (
        data.map(item => (
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
            </div>
        )
        )
    );
}

export default PostList;