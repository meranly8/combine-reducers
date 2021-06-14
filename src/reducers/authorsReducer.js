import uuid from 'uuid'

export default function authorsReducer(state=[], action) {
    let idx
    switch(action.type) {
      case "ADD_AUTHOR":
        return {
          ...state,
          authors: [...state.authors, action.author]
        };
  
      case "REMOVE_AUTHOR":
        idx = state.authors.findIndex(author => author.id === action.id);
        return {
          ...state,
          authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]
        };
      
      case "ADD_BOOK":
        let existingAuthor = state.filter(
          author => author.authorName === action.book.authorName
        );
        if (existingAuthor.length > 0) {
          return state;
        } else {
          return [...state, { authorName: action.book.authorName, id: uuid() }];
        }
  
      default:
        return state
    }
  }