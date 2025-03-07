import React from "react";
import { Box, Container, Grid, Typography, Link, Select, MenuItem, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, Language } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#121A27", color: "white", py: 4 }}>
            <Box px={4}>
                {/* Logo & Copyright */}
                <Box className="d-flex justify-content-between align-items-center">
                    <Box>
                        <Typography variant="h6" sx={{ fontFamily: "cursive", mb: 2 }}>
                            Stake
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#b1bad3" }}>
                            @ 2025 Stake.com | All Rights Reserved.
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 4 }}>
                        <Box>
                            <IconButton sx={{ color: "gray" }}>
                                <Facebook />
                            </IconButton>
                            <IconButton sx={{ color: "gray" }}>
                                <Twitter />
                            </IconButton>
                            <IconButton sx={{ color: "gray" }}>
                                <Instagram />
                            </IconButton>
                            <IconButton sx={{ color: "gray" }}>
                                <YouTube />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* Footer Links */}
                <Grid container spacing={3} sx={{ mt: 3 }}>
                    {/* Casino */}
                    <Grid item xs={12} sm={6} md={1.5}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Casino
                        </Typography>
                        {["Casino Games", "Slots", "Live Casino", "Roulette", "Blackjack", "Providers", "Promos & Competitions"].map((item) => (
                            <Link key={item} href="#" display="block" sx={{ color: "#b1bad3", textDecoration: "none", mt: 1 }}>
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* Sports */}
                    <Grid item xs={12} sm={6} md={1.5}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Sports
                        </Typography>
                        {["Sportsbook", "Live Sports", "Soccer", "Basketball", "Tennis", "eSports", "Bet Bonuses", "Sports Rules", "Racing Rules"].map((item) => (
                            <Link key={item} href="#" display="block" sx={{ color: "#b1bad3", textDecoration: "none", mt: 1 }}>
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* Support */}
                    <Grid item xs={12} sm={6} md={1.5}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Support
                        </Typography>
                        {["Help Center", "Fairness", "Gambling Helpline", "Live Support", "Self Exclusion"].map((item) => (
                            <Link key={item} href="#" display="block" sx={{ color: "#b1bad3", textDecoration: "none", mt: 1 }}>
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* About Us */}
                    <Grid item xs={12} sm={6} md={1.5}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            About Us
                        </Typography>
                        {["VIP Club", "Affiliate", "Privacy Policy", "AML Policy", "Terms of Service"].map((item) => (
                            <Link key={item} href="#" display="block" sx={{ color: "#b1bad3", textDecoration: "none", mt: 1 }}>
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* Payment Info */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            Payment Info
                        </Typography>
                        {["Deposit & Withdrawals", "Currency Guide", "Crypto Guide", "Supported Crypto", "How to Use the Vault", "How Much to Bet With"].map((item) => (
                            <Link key={item} href="#" display="block" sx={{ color: "#b1bad3", textDecoration: "none", mt: 1 }}>
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    {/* How-to Guides */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            How-to Guides
                        </Typography>
                        {["How-to Guides", "Online Casino Guide", "Sports Betting Guide", "How to Live Stream Sports", "Stake VIP Guide", "House Edge Guide"].map((item) => (
                            <Link key={item} href="#" display="block" sx={{ color: "#b1bad3", textDecoration: "none", mt: 1 }}>
                                {item}
                            </Link>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Box>

                            <Box >
                                <Select defaultValue="English" fullWidth sx={{ color: "white", backgroundColor: "#1C2536", borderRadius: "5px", p: 1, my: 1 }}>
                                    <MenuItem value="English">English</MenuItem>
                                    <MenuItem value="Hindi">Hindi</MenuItem>
                                    <MenuItem value="Gujarati">Gujarati</MenuItem>
                                </Select>

                                <Select defaultValue="Decimal" fullWidth sx={{ color: "white", backgroundColor: "#1C2536", borderRadius: "5px", p: 1, my: 1 }}>
                                    <MenuItem value="Decimal">Decimal</MenuItem>
                                    <MenuItem value="Fractional">Fractional</MenuItem>
                                    <MenuItem value="American">American</MenuItem>
                                </Select>
                            </Box>
                            {/* BTC Price */}
                            <Typography variant="body2" sx={{ mt: 2, textAlign: "right", color: "#b1bad3" }}>
                                1 BTC = $83,682.01
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Social Icons & Language Select */}


            </Box>
        </Box>
    );
};

export default Footer;
