import { createAsyncThunk } from "@reduxjs/toolkit";

import { usePapaParse } from 'react-papaparse';


export const parseTableDataFromFile = createAsyncThunk(
        'tableDataSlice/parseTableDataFronFile',
        async (file) => {
            const { readString } = usePapaParse();
            console.log('THUNK PARSE FILE : ', file)
            const conf = {
                delimiter: "",	// auto-detect
                newline: "",	// auto-detect
                quoteChar: '"',
                escapeChar: '"',
                header: false,
                transformHeader: undefined,
                dynamicTyping: false,
                preview: 0,
                encoding: "",
                worker: false,
                comments: false,
                step: undefined,
                complete: undefined,
                error: undefined,
                download: false,
                downloadRequestHeaders: undefined,
                downloadRequestBody: undefined,
                skipEmptyLines: false,
                chunk: undefined,
                chunkSize: undefined,
                fastMode: undefined,
                beforeFirstChunk: undefined,
                withCredentials: undefined,
                transform: undefined,

            }


            await file.text().then(csvString => {
                console.log('Parsed STRING : ', csvString);


                readString(csvString, {
                    worker: true,
                    complete: (results) => {
                        console.log('---------------------------');
                        console.log(results);
                        console.log('---------------------------');
                        return results;
                        },
                });

            })

            return 'asunc file not parse result'
        })