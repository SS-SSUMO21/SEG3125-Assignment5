import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { salesData } from "../components/Data";
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { FormControl, InputLabel, Select, MenuItem, Box, Typography } from "@mui/material";

const seriesOptions = [
  { value: "One Piece", label: "One Piece" },
  { value: "Naruto", label: "Naruto" },
  { value: "Attack on Titan", label: "Attack on Titan" },
  { value: "Bleach", label: "Bleach" },
  { value: "Dragon Ball", label: "Dragon Ball" },
];

const Home = () => {
  const [series, setSeries] = useState("One Piece");
  const filteredData = salesData.filter(d => d.name === series);

return (
  <div>
    <Navbar />
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        mt: -7,
        mb: -3,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "#f5f5f5",
        p: 4,
      }}
    >
      {/* Title and Dropdown on background image */}
      <Box
        sx={{
          height: 350,
          mb: 4,
          borderRadius: 2,
          boxShadow: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/anime.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay for better text visibility */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.4)",
            borderRadius: 2,
            zIndex: 1,
          }}
        />
        {/* Content goes above overlay */}
        <Box sx={{ position: "relative", zIndex: 2, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center", color: "#fff" }}>
            Anime/Manga Sales Dashboard
          </Typography>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel sx={{ color: "#fff" }}>Series</InputLabel>
            <Select
              value={series}
              label="Series"
              onChange={e => setSeries(e.target.value)}
              sx={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.3)" }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "rgba(0,0,0,0.8)",
                    color: "#fff"
                  }
                }
              }}
            >
              {seriesOptions.map(opt => (
                <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      {/* Bar Chart Container */}
      <Box id="yearlyComparison" sx={{ border: 1, borderRadius: 2, p: 2, mb: 4, bgcolor: "#fff", boxShadow: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>Yearly Sales Comparison</Typography>
        <ResponsiveContainer width="100%" height={300}>
          {filteredData.length > 0 ? (
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" label={{ value: "Year", position: "insideBottom", offset: -5 }} />
              <YAxis
                label={{
                  value: "Sales (in thousands)",
                  angle: -90,
                  position: "insideLeft",
                  dx: -3,
                  dy: 1,
                  style: { textAnchor: "middle" }
                }}
              />
              <Tooltip />
              <Legend wrapperStyle={{ bottom: -7, left: 33 }} />
              <Bar dataKey="sales" fill="#8884d8" name={series} />
            </BarChart>
          ) : (
            <div>No data available for this selection.</div>
          )}
        </ResponsiveContainer>
      </Box>
      {/* Line Chart Container */}
      <Box id="salesOverTime" sx={{ border: 1, borderRadius: 2, p: 2, bgcolor: "#fff", boxShadow: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>Sales Trend Over Time</Typography>
        <ResponsiveContainer width="100%" height={300}>
          {filteredData.length > 0 ? (
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" label={{ value: "Year", position: "insideBottom", offset: -5 }} />
              <YAxis
                label={{
                  value: "Sales (in thousands)",
                  angle: -90,
                  position: "insideLeft",
                  dx: -3,
                  dy: 1,
                  style: { textAnchor: "middle" }
                }}
              />
              <Tooltip />
              <Legend wrapperStyle={{ bottom: -7, left: 33 }} />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" name={series} />
            </LineChart>
          ) : (
            <div>No data available for this selection.</div>
          )}
        </ResponsiveContainer>
      </Box>
    </Box>
  </div>
);
};

export default Home;