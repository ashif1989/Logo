import "./styles.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      style={{
        position: "absolute",
        top: "15%", // Keeps it near the top
        left: "50%",
        transform: "translate(-50%, 0)", // Adjusts X-axis
        zIndex: 1000,
        textAlign: "center",
        color: "#1890ff",
      }}
    >
      {/* Logo Image with animation */}
      <img
        src="/images/favicon_EngineXpress.png" // Replace with actual path
        alt="Loading Logo"
        style={{
          width: "80px",
          height: "80px",
          objectFit: "contain",
          marginBottom: "10px",
          animation: "float 2s ease-in-out infinite", // Add animation
        }}
      />

      {/* Loading Message */}
      <div
        style={{
          marginTop: "5px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {""}
      </div>

      {/* Keyframes for animation */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-50px); } /* Moves up */
          100% { transform: translateY(0px); } /* Moves back down */
        }
      `}
      </style>
    </div>
  );
}
