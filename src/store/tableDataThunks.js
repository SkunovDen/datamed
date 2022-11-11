import { createAsyncThunk } from "@reduxjs/toolkit";

import { usePapaParse } from 'react-papaparse';


export const parseTableDataFromFile = createAsyncThunk(
    'tableDataSlice/parseTableDataFronFile',
    async (file) => {
        const { readString } = usePapaParse();

        await file.text().then(csvString => {
            console.log('Parsed STRING : ', csvString);


            readString(csvString, {
                worker: true,
                complete: (results) => {
                    return results;
                    },
            });

        })

        return 'asyncThunk: file not parse result'
    }
)