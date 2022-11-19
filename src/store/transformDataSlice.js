import { createSlice } from '@reduxjs/toolkit'

import mockData1 from './mockData1'
import mockData2 from './mockData2'

//TODO remove //DEBUG
const testSourceData = [
                    [ "Col1 Name", "Col2 Name", "Col3 Name", "Col4 Name", "Col5 Name", "Col6 Name" ],
                    [ "Initial", "data", "from", "REDUX", "store", "V 1.0" ],
                    [ "r2 c1", "r2 c2", "r2 c3", "r2 c4", "r2 c5", "r2 c6" ],
                    [ "r3 c1", "r3 c2", "r3 c3", "r3 c4", "r3 c5", "r3 c6" ],
                    [ "r4 c1", "r4 c2", "r4 c3", "r4 c4", "r4 c5", "r4 c6" ],
                    [ "r5 c1", "r5 c2", "r5 c3", "r5 c4", "r5 c5", "r5 c6" ],
                    [ "rN c1", "rN c2", "rN c3", "rN c4", "rN c5", "rN c6" ],
                    [ "" ]
                ]

const testResultData = mockData2 //[[]]


// const testData2 = [
//                     [ "Col1 Name", "Col2 Name", "Col3 Name", "Col4 Name", "Col5 Name", "Col6 Name" ],
//                     [ "Test", "data", "from", "REDUX", "reducer", "V 1.1" ],
//                     [ "r2 c1", "r2 c2", "r2 c3", "r2 c4", "r2 c5", "r2 c6" ],
//                     [ "r3 c1", "r3 c2", "r3 c3", "r3 c4", "r3 c5", "r3 c6" ],
//                 ]

// const testData3 = [
//                     [ "Col1 Name", "Col2 Name", "Col3 Name", "Col4 Name", "Col5 Name", "Col6 Name" ],
//                     [ "Test", "data", "from", "REDUX", "asyncThunk", "V 1.2" ],
//                     [ "r2 c1", "r2 c2", "r2 c3", "r2 c4", "r2 c5", "r2 c6" ],
//                     [ "r3 c1", "r3 c2", "r3 c3", "r3 c4", "r3 c5", "r3 c6" ],
//                 ]

                


const initialState = {
    sourceData              : mockData1,
    resultData              : testResultData,
    sourceDataSelectedColumns: [],
    resultDataSelectedColumns: [],
}

export const transformDataSlice = createSlice({
    name: 'transformDataSlice',
    initialState,
    reducers: {


                        /// SOURCE DATA REDUCERS ///

        addSourceSelectedColumn: (state, action) => {
//TODO remove //DEBUG
            console.log('ADD SELECTED SOURCE COLUMN REDUCER:: payload : ', action.payload)
        },
        removeSourceSelectedColumn: (state, action) => {
//TODO remove //DEBUG
            console.log('REMOVE SELECTED SOURCE COLUMN  REDUCER:: payload : ', action.payload)
        },




                        /// RESULT DATA REDUCERS ///

        addResultSelectedColumn: (state, action) => {
//TODO remove //DEBUG
            console.log('ADD SELECTED Result COLUMN REDUCER:: payload : ', action.payload)
        },
            
            
        removeResultSelectedColumn: (state, action) => {
//TODO remove //DEBUG
            console.log('REMOVE SELECTED Result COLUMN  REDUCER:: payload : ', action.payload)
        },




                    /// TEST REDUCERS ///

        testReducer: (state, action) => {
//TODO remove //DEBUG
            console.log('TEST REDUCER:: payload : ', action.payload)
            // state.data = testData2
        },
    },
})


export const transformSourceDataSelector    = state => state.transform.sourceData
export const transformResultDataSelector    = state => state.transform.resultData

export const sourceDataSelectedColumnsSelector  = state => state.transform.sourceDataSelectedColumns
export const resultDataSelectedColumnsSelector  = state => state.transform.resultDataSelectedColumns




export const { addSourceSelectedColumn, removeSourceSelectedColumn,
               addResultSelectedColumn, removeResultSelectedColumn  } = transformDataSlice.actions


export default transformDataSlice.reducer