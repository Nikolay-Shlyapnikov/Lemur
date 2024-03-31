import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableRow, Paper, Checkbox} from '@mui/material';
export const ArtTable = () => {

    const tableData = [
        { id: 1, name: 'Item 1', customData: 'Custom Data 1', checked: false },
        { id: 2, name: 'Item 2', customData: 'Custom Data 2', checked: false },
        { id: 3, name: 'Item 3', customData: 'Custom Data 3', checked: false },
    ];
    
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Checkbox
                                    onChange={()=> {

                                    }}
                                    checked={true}
                                ></Checkbox>
                            </TableCell>
                            <TableCell>{row.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

