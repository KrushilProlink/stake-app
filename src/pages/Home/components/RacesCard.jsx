import { Card, CardContent, Typography, Button, CircularProgress, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function RacesCard() {
    // const [series, setSeries] = useState([20]);
    const [series, setSeries] = useState([70]);

    const options = {
        chart: {
            height: 150,
            type: "radialBar",
        },
        plotOptions: {
            //   radialBar: {
            //     hollow: {
            //       size: "70%",
            //     },
            //   },
            radialBar: {
                // startAngle: -90,
                // endAngle: 90,
                // track: {
                //     background: "#1E3A4B",
                //     strokeWidth: "100%",
                // },
                dataLabels: {
                    name: {
                        show: true,
                        color: "#fff",
                        fontSize: "14px",
                        offsetY: 10,
                    },
                    value: {
                        show: true,
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: 700,
                        offsetY: -20,
                        formatter: () => "2h 57m",
                    },
                },
                hollow: {
                    size: "60%",
                },
            },
        },
        labels: ["Ends in"],
    };

    return (
        <Box className="d-flex justify-content-between align-items-center py-0">

        <Card sx={{ maxWidth: 700,width:600, backgroundColor: "#213743", color: "#fff", padding: 0, borderRadius: 3 }}>
            <CardContent className="d-flex justify-content-between align-items-center py-0">
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        $100k Race
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                        Ready to race to the top?
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
                        Leaderboard
                    </Button>
                    <InfoIcon sx={{ verticalAlign: "middle", marginLeft: 1 }} />

                </Box>

                <div style={{ textAlign: "center" }}>
                    <ReactApexChart options={options} series={series} type="radialBar" height={180} />

                </div>
            </CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  padding: 15, borderTop: "1px solid #2f4553" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <EmojiEventsIcon sx={{ marginRight: 1 }} />
                    <Typography>Not entered yet</Typography>
                </div>
            </div>
        </Card >
        <Card sx={{ maxWidth: 700,width:600, backgroundColor: "#213743", color: "#fff", padding: 0, borderRadius: 3 }}>
            <CardContent className="d-flex justify-content-between align-items-center py-0">
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        $100k Race
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 2 }}>
                        Ready to race to the top?
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
                        Leaderboard
                    </Button>
                    <InfoIcon sx={{ verticalAlign: "middle", marginLeft: 1 }} />

                </Box>

                <div style={{ textAlign: "center" }}>
                    <ReactApexChart options={options} series={series} type="radialBar" height={180} />

                </div>
            </CardContent>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",  padding: 15, borderTop: "1px solid #2f4553" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <EmojiEventsIcon sx={{ marginRight: 1 }} />
                    <Typography>Not entered yet</Typography>
                </div>
            </div>
        </Card >
        </Box>

    );
}
