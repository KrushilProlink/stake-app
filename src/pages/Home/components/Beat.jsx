import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Box } from "@mui/material";
import React, { useState } from "react";
import { Container } from "@mui/material";
import CustomTabs from "./common/CustomTabs";

const Beat = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const betsData = [
        { game: "The Wildos 2", user: "Hidden", time: "11:58 AM", betAmount: "523.97", multiplier: "3.81×", payout: "1993.92", currency: "🪙" },
        { game: "Dice", user: "Hidden", time: "11:58 AM", betAmount: "2000.00", multiplier: "1.13×", payout: "2250.00", currency: "🪙" },
        { game: "Crash", user: "Hidden", time: "11:58 AM", betAmount: "₹152,000.00", multiplier: "2.27×", payout: "₹344,584.91", currency: "💰" },
        { game: "FRKN Bananas", user: "Hidden", time: "11:58 AM", betAmount: "1415863.82", multiplier: "62.77×", payout: "88869052.81", currency: "🎰" },
        { game: "Jawsome", user: "Hidden", time: "11:58 AM", betAmount: "1500.00", multiplier: "0.14×", payout: "-1291.35", currency: "🪙" }
    ];
    return (
        <Box sx={{
            display: "flex",
            margin: "0",
            flexDirection: "column",
            alignItems: "flex-start"
        }}>
            <CustomTabs setSelectedTab={setSelectedTab} />
            {selectedTab === 0 && <TableContainer component={Paper} sx={{ backgroundColor: "#1C2536", borderRadius: "8px", mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {["Game", "User", "Time", "Bet Amount", "Multiplier", "Payout"].map((head) => (
                                <TableCell key={head} sx={{ color: "#FFFFFF", fontWeight: "bold" }}>{head}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {betsData.map((bet, index) => (
                            <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#263243" } }}>
                                <TableCell sx={{ color: "white", fontWeight: "500" }}>{bet.game}</TableCell>
                                <TableCell sx={{ color: "gray", display: "flex", alignItems: "center" }}>
                                    <Avatar sx={{ width: 24, height: 24, backgroundColor: "#37474F", mr: 1 }} />
                                    {bet.user}
                                </TableCell>
                                <TableCell sx={{ color: "white" }}>{bet.time}</TableCell>
                                <TableCell sx={{ color: "white" }}>{bet.betAmount} {bet.currency}</TableCell>
                                <TableCell sx={{ color: "#4CAF50", fontWeight: "bold" }}>{bet.multiplier}</TableCell>
                                <TableCell sx={{ color: bet.payout.startsWith("-") ? "red" : "#4CAF50", fontWeight: "bold" }}>
                                    {bet.payout} {bet.currency}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
            {selectedTab === 1 && <h3 style={{ color: "white" }}>Sports Bets Coming Soon...</h3>}
            {selectedTab === 2 && <h3 style={{ color: "white" }}>Leaderboard Coming Soon...</h3>}
        </Box>
    );
};

export default Beat;



