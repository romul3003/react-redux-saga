import { CREATE_POST } from './types'
import { showAlert } from './actions'

const forbidden = ['fuck', 'span', 'php']

export const forbiddenWordsMiddleware = ({ dispatch }) => (next) => (
  action
) => {
  if (action.type === CREATE_POST) {
    const found = forbidden.filter((word) =>
      action.payload.title.includes(word)
    )
    if (found.length) {
      return dispatch(showAlert('Вы спамер, идите домой', 'dark'))
    }
  }
  return next(action)
}
