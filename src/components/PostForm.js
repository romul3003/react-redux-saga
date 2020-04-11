import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost, hideAlert, showAlert } from '../redux/actions'
import Alert from './alert'

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

    if (!title.trim()) {
      return this.props.showAlert(
        'Название поста не может быть пустым',
        'warning'
      )
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    }

    this.props.createPost(newPost)
    // this.props.hideAlert()
    this.setState({ title: '' })
  }

  changeInputHandler = (event) => {
    const { name, value } = event.target
    this.setState((prevState) => ({ ...prevState, ...{ [name]: value } }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && (
          <Alert
            text={this.props.alert.text}
            className={this.props.alert.className}
          />
        )}

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

const mapStateToProps = (state) => ({
  alert: state.app.alert,
})

const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
