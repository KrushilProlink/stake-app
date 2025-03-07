import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

const CustomTabs = ({ setSelectedTab }) => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event, newIndex) => {
        setTabIndex(newIndex);
        setSelectedTab(newIndex);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider", backgroundColor: "#121A27", borderRadius: "60px", p: 1 }}>
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                variant="fullWidth"
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                    "& .MuiTab-root": { color: "white", textTransform: "none", fontWeight: "bold", fontSize: "16px" },
                    "& .Mui-selected": { color: "#4CAF50" }
                }}
            >
                <Tab label="Casino Bets" />
                <Tab label="Sports Bets" />
                <Tab label="Race Leaderboard" icon={<span style={{ color: "green", fontSize: "8px" }}>●</span>} iconPosition="end" />
            </Tabs>
        </Box>
    );
};

export default CustomTabs;
