import { useEffect, useState } from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const BasicFlow = ({ data }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const nodes = data.map((d, idx) => {
      return {
        id: idx.toString(),
        position: { x: 600, y: 100 * idx + 50 },
        data: { label: d.name },
      };
    });
    setNodes(nodes);

    const edges = data.map((d, idx) => {
      return {
        id: `${idx}-${idx + 1}`,
        source: idx.toString(),
        target: (idx + 1).toString(),
        type: "straight",
      };
    });
    setEdges(edges);
  }, [data]);

  return (
    <div className="reactflow">
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default BasicFlow;
