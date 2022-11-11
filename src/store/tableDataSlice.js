import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mockData from './mockData';

const Papa = require('papaparse');


export const loadDataFromFile = createAsyncThunk(
    'tableDataSlice/loadDataFromFile',
     async (file) => {

        const result = await new Promise((resolve, reject) => {
            try {
                Papa.parse(
                    file, 
                    {
                        worker: true,
                        header: false,
                        complete: function(r) {
                            resolve(r.data);
                        }
                    }
                )
            }
            catch (e) {
                reject(e);
            }
        });

        return result
    }
)   
            
 

 






//TODO remove //DEBUG
// const testData = [
//                     [ "Col1 Name", "Col2 Name", "Col3 Name", "Col4 Name", "Col5 Name", "Col6 Name" ],
//                     [ "Initial", "data", "from", "REDUX", "store", "V 1.0" ],
//                     [ "r2 c1", "r2 c2", "r2 c3", "r2 c4", "r2 c5", "r2 c6" ],
//                     [ "r3 c1", "r3 c2", "r3 c3", "r3 c4", "r3 c5", "r3 c6" ],
//                     [ "r4 c1", "r4 c2", "r4 c3", "r4 c4", "r4 c5", "r4 c6" ],
//                     [ "r5 c1", "r5 c2", "r5 c3", "r5 c4", "r5 c5", "r5 c6" ],
//                     [ "rN c1", "rN c2", "rN c3", "rN c4", "rN c5", "rN c6" ],
//                     [ "" ]
//                 ]


const testData2 = [
                    [ "Col1 Name", "Col2 Name", "Col3 Name", "Col4 Name", "Col5 Name", "Col6 Name" ],
                    [ "Test", "data", "from", "REDUX", "reducer", "V 1.1" ],
                    [ "r2 c1", "r2 c2", "r2 c3", "r2 c4", "r2 c5", "r2 c6" ],
                    [ "r3 c1", "r3 c2", "r3 c3", "r3 c4", "r3 c5", "r3 c6" ],
                ]

// const testData3 = [
//                     [ "Col1 Name", "Col2 Name", "Col3 Name", "Col4 Name", "Col5 Name", "Col6 Name" ],
//                     [ "Test", "data", "from", "REDUX", "asyncThunk", "V 1.2" ],
//                     [ "r2 c1", "r2 c2", "r2 c3", "r2 c4", "r2 c5", "r2 c6" ],
//                     [ "r3 c1", "r3 c2", "r3 c3", "r3 c4", "r3 c5", "r3 c6" ],
//                 ]

                


const initialState = {
    data              : mockData,
    loadingState      : 'idle',
    loadingErrorState : null,
}

export const tableDataSlice = createSlice({
    name: 'tableDataSlice',
    initialState,
    reducers: {
        addRow: (state, action) => {
//TODO remove //DEBUG
            console.log('ADD ROW REDUCER:: payload : ', action.payload)
        },
        removeRow: (state, action) => {
//TODO remove //DEBUG
            console.log('REMOVE ROW REDUCER:: payload : ', action.payload)
        },
        testReducer: (state, action) => {
//TODO remove //DEBUG
            console.log('TEST REDUCER:: payload : ', action.payload)
            state.data = testData2
        },
    },
    extraReducers : (builder) => {
        builder.addCase(loadDataFromFile.pending, (state, { payload }) => {
            state.loadingErrorState = null;
            state.loadingState = 'pending';
        })
        builder.addCase(loadDataFromFile.fulfilled, (state, { payload }) => {
            state.data = payload
            state.loadingState = 'idle';
        })
        builder.addCase(loadDataFromFile.rejected, (state, { payload }) => {
            state.loadingErrorState = payload;
            state.loadingState = 'rejected';
        })
    }, 
    
})


export const { addRow, removeRow, testReducer } = tableDataSlice.actions


export default tableDataSlice.reducer