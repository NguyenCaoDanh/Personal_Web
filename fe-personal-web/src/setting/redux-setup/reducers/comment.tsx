import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyId: -1,
  pagination: {
    page: 0,
    limit: 5,
    total: 0,
  },
  list: [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    // comments
    setList: (state, action) => ({ ...state, list: [...action.payload.comments] }),

    // comment
    create: (state, action) => ({ ...state, list: [action.payload.comment, ...state.list] }),

    // id, comment
    update: (state, action) => ({
      ...state,
      list: state.list.map((comment) => (comment.id === action.payload.id ? { ...action.payload.comment } : comment)),
    }),

    // id
    remove: (state, action) => ({ ...state, list: state.list.filter((comment) => comment.id !== action.payload.id) }),

    // pagination
    setPagination: (state, action) => ({ ...state, pagination: action.payload.pagination }),
    
    // companyId
    setCompanyId: (state, action) => ({ ...state, companyId: action.payload.companyId }),
  },
});

export const { setList, create, update, remove, setPagination, setCompanyId } = commentSlice.actions;

export const list = (state) => state.comment.list;
export const companyId = (state) => state.comment.companyId;
export const pagination = (state) => state.comment.pagination;

export default commentSlice.reducer;
