import React from 'react'
import classes from '../styles/Form.module.css'

const AddBook = () => {
  return (
    <div className={classes.container}>
        <form className={classes.formControl}>
            <label htmlFor="name">Name</label><input type="text" name="name" />
            <label htmlFor="description">Description</label><input type="text" name="description" />
            <label htmlFor="imgUrl">Image URL</label><input type="text" name="imgUrl"/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddBook