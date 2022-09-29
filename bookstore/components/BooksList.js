import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import classes from '../styles/Books.module.css'

const BooksList = () => {
    const [data, setData] = useState()
    const sendRequest = () => {
        fetch("/api/books/")
        .then((res) => res.json())
        .then((data) => setData(data.message))
        .catch((e) => console.log(e))
    }
    useEffect(() => {
        sendRequest()
    },[])
    return <div>
            <ul className={classes.listContainer}>
                { data && 
                    data.map((item, index) => (
                        <BookItem 
                            description={item.description} 
                            name={item.name} 
                            id={item.id} 
                            imgUrl={item.imgUrl} 
                            key={index}
                        />
                ))}
            </ul>
    </div>
}

export default BooksList