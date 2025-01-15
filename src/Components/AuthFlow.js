import React, { useState, useEffect } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { useAuthStore } from "../State/AuthStore";

const AuthFlow = () => {
  const { flowState } = useAuthStore();
  const { status, credentials, token, message } = flowState;

  const [nodes, setNodes] = useState([
    {
      id: "1",
      type: "input",
      data: { label: "Login Button Clicked" },
      position: { x: 0, y: 0 },
    },
  ]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    if (status === "sending") {
      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: "2",
          data: { label: `Sending credentials: ${JSON.stringify(credentials)}` },
          position: { x: 200, y: 100 },
        },
      ]);
      setEdges((prevEdges) => [
        ...prevEdges,
        { id: "e1-2", source: "1", target: "2" },
      ]);
    }

    if (status === "success") {
      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: "3",
          data: { label: "Authentication Successful!" },
          position: { x: 400, y: 200 },
        },
        {
          id: "4",
          data: { label: `Token: ${token}` },
          position: { x: 600, y: 300 },
        },
      ]);
      setEdges((prevEdges) => [
        ...prevEdges,
        { id: "e2-3", source: "2", target: "3" },
        { id: "e3-4", source: "3", target: "4" },
      ]);
    }

    if (status === "failure") {
      setNodes((prevNodes) => [
        ...prevNodes,
        {
          id: "5",
          data: { label: `Authentication Failed: ${message}` },
          position: { x: 400, y: 200 },
        },
      ]);
      setEdges((prevEdges) => [
        ...prevEdges,
        { id: "e2-5", source: "2", target: "5" },
      ]);
    }
  }, [status, credentials, token, message]);

  return (
    <div style={{ height: 400, border: "1px solid #ccc", borderRadius: 8 }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default AuthFlow;
