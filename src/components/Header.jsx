import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <Box sx={{ height: "10vh", overflow: "auto" }}>
            <AppBar position="fixed" sx={{ background: "#1b2a38", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)", zIndex: 1000 }}>
                <Box className="container">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        {/* Left Logo */}
                        <Typography variant="h5" sx={{ fontFamily: "cursive", fontWeight: "bold" }}>
                            Stake
                        </Typography>

                        {/* Wallet + Balance */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Typography sx={{ background: "#0d1b2a", padding: "5px 10px", borderRadius: "8px" }}>
                                ₹0.43 💰
                            </Typography>
                            <Button variant="contained" sx={{ background: "#1976d2", textTransform: "none" }}>
                                Wallet
                            </Button>
                        </Box>

                        {/* Icons */}
                        <Box>
                            <IconButton color="inherit">
                                <AccountCircleIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Box>
            </AppBar>
        </Box>

    );
};

export default Header;
