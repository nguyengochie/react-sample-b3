import React, { useEffect, useState } from 'react'
import BoxColor from './BoxColor';

const Page11 = () => {
    const [isCheck, setCheck] = useState(false);
    const [status, setStatus] = useState(false);
    const [status2, setStatus2] = useState(false);

    const [colorCode, setColorCode] = useState("");
    const [color, setColor] = useState("grey");
    const [listPosts, setListPosts] = useState([]);
    let list = []

    useEffect(() => {
        console.log("log in useEffect");

        return () => {
            console.log("clear...");
        }
    }, [isCheck, status])

    useEffect(() => {
        switch (colorCode) {
            case "1":
                setColor("red");
                break;
            case "2":
                setColor("orange");
                break;
            case "3":
                setColor("yellow");
                break;
            default:
                break;
        }

    }, [colorCode])

    const fetchPosts = async () => {
        try {
            const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await resp.json();
            setListPosts(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (colorCode !== "1") {
            return;
        }

        fetchPosts();

    }, [colorCode])

    const renderList = () => {
        return listPosts.map((item, index) => {
            return <div key={index}>
                <h2>{item.title}</h2>
            </div>
        })
    }

    return (
        <div id="home">
            {console.log("Render id Home")
            }
            {isCheck && <BoxColor color={color} />}
            <div>
                <button onClick={() => setColorCode("1")}>red</button>
                <button onClick={() => setColorCode("2")}>orange</button>
                <button onClick={() => setColorCode("3")}>yellow</button>
            </div>

            <div>
                <button onClick={() => setCheck(!isCheck)}>toggle isCheck</button>
                <button onClick={() => setStatus(!status)}>toggle status</button>
                <button onClick={() => setStatus2(!status2)}>toggle status2</button>
            </div>

            {renderList()}
        </div>
    )
}

export default Page11