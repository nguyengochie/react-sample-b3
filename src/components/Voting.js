import React, { useState } from 'react'

// lưu lại số vote của A và B và tính % A,B
// A /(A+B)  * 100 = %A
// B /(A+B)  * 100 = %B


const Voting = () => {
    const [voteA, setVoteA] = useState(0);
    const [voteB, setVoteB] = useState(0);
    const percentA = voteA * 100 / (voteA + voteB); // 1*100/(1+0) // 2*100/(2+0)
    const percentB = voteB * 100 / (voteA + voteB);// 0*100/(1+0) // 0*100/(2+0)

    const onVoteA = () => {
        setVoteA((prevVoteA) => {
            return prevVoteA + 1;
        })
    }
    const onVoteB = () => {
        setVoteB((prevVoteB) => {
            return prevVoteB + 1;
        })
    }

    return (
        <div style={{ border: "2px solid tomato", padding: "10px" }}>
            <div style={{ width: "80vh", border: "1px solid black", display: "flex" }}>
                <div style={{
                    background: "red", height: "50px",
                    width: `${!percentA && !percentB ? 50 : percentA}%`
                }}>
                    <h2>{!voteA ? 0 : percentA.toFixed(2)}%</h2>
                </div>
                <div style={{
                    background: "green", height: "50px",
                    width: `${!percentA && !percentB ? 50 : percentB}%`
                }}>
                    <h2>{!voteB ? 0 : percentB.toFixed(2)}%</h2>
                </div>
            </div>
            <div>
                <div>

                    <h2>{voteA}</h2>
                    <button onClick={onVoteA}>Vote A</button>
                </div>
                <div>

                    <h2>{voteB}</h2>
                    <button onClick={onVoteB}>Vote B</button>
                </div>
            </div>
        </div>
    )
}

export default Voting