import { configureStore } from '@reduxjs/toolkit'
import tableReducer from './tableDataSlice';

import transformDataReducer from './transformDataSlice';

export const store = configureStore({
    reducer: {
        table: tableReducer,
        transform : transformDataReducer
        },
})