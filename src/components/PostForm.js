import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  submitHandler = (event) => {
    event.preventDefault()

    const { title } = this.state

    // eslint-disable-next-line no-unused-vars
    const newPost = {
      title,
      id: Date.now().toString(),
    }

    this.setState({ title: '' })
  }

  changeInputHandler = (event) => {
    const { name, value } = event.target
    this.setState((prevState) => ({ ...prevState, ...{ [name]: value } }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    )
  }
}

export default PostForm
