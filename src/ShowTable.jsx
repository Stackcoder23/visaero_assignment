import { Grid, Paper, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ShowTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://visaero-stage-backend.visaero.com/visa/getUserApplication?user_id=5fe2be19c1ff487e9789355f&start_date=2022-11-06&end_date=2022-11-21")
            .then((res) => res.json())
            .then((json) => setData(json.dataobj));
    }, [])

    return (
        <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ height: '100vh', backgroundColor: 'lightblue' }}>
            <Grid item xs={12}><Typography variant="h5">Visa Users</Typography></Grid>
            <TableContainer component={Paper} sx={{ width: '80%', height: '80%', borderRadius: 5 }}>
                <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: 'grey' }}>
                            <TableCell align="center">Application Reference Code</TableCell>
                            <TableCell align="center">Origin</TableCell>
                            <TableCell align="center">Nationality</TableCell>
                            <TableCell align="center">Travelling To (Country)</TableCell>
                            <TableCell align="center">Total Applicants</TableCell>
                            <TableCell align="center">Visa Type</TableCell>
                            <TableCell align="center">Journey Start Date</TableCell>
                            <TableCell align="center">Journey End Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.application_obj._id}
                            >
                                <TableCell component="th" scope="row">
                                    {row.application_obj.application_reference_code}
                                </TableCell>
                                <TableCell align="right">{row.application_obj.origin}</TableCell>
                                <TableCell align="right">{row.application_obj.nationality}</TableCell>
                                <TableCell align="right">{row.application_obj.travelling_to_country}</TableCell>
                                <TableCell align="right">{row.application_obj.total_applicants}</TableCell>
                                <TableCell align="right">{row.application_obj.visa_type}</TableCell>
                                <TableCell align="right">{row.application_obj.journey_start_date}</TableCell>
                                <TableCell align="right">{row.application_obj.journey_end_date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}