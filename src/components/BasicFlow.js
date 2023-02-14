import { useEffect, useState } from "react";
import ReactFlow, { Controls, Background,MarkerType } from "reactflow";
import "reactflow/dist/style.css";
import responseData from "../data/data"

const BasicFlow = ({ data }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [response, setResponse]=useState([])

  useEffect(() => {
    let lastId=0;
    let nodes = data.flatMap((d, idx) => {
        lastId=idx;
        if(d.ruleConfigIdentifierDefinition!==undefined) {
          return [{
            id: idx.toString()+"parent",
            position: { x: 525, y: 90 * idx + 50 },
            style: { zIndex:-2,backgroundColor: 'grey', width: 300, height: 200 },
          },{
            id: idx.toString(),
            position: { x: 75, y: 10 * idx },
            data: { label: d.name },
            shape:"round-rect",
            style : {backgroundColor : '#edbb74', },
            parentNode: idx.toString()+"parent",
          }];
        }
        else {
          return {
            id: idx.toString(),
            position: { x: 600, y: 100 * idx + 50 },
            data: { label: d.name },
            style : {backgroundColor : '#72c368' }
          };
        }
      
    });
    let a= (responseData.responseDefinition.responseMapping);
    // console.log(...a);
    const responseDefinition={ 
      id: (lastId+1).toString(),
      position: { x: 387, y: 120 * lastId+1 + 50 },
      data: {label:JSON.stringify(responseData.responseDefinition?.responseMapping, null, '\t')},
      style : {backgroundColor : 'yellow', width: "40%", height:"60%" }
    }
    console.log(JSON.stringify(responseData.responseDefinition?.responseMapping, null, '\t'))
    nodes=[...nodes,responseDefinition]
    setNodes(nodes);

    let edges = data.map((d, idx) => {
      return {
        id: `${idx}-${idx + 1}`,
        source: idx.toString(),
        target: (idx + 1).toString(),
        type: "straight",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: '#000000',
        },
      };
    });

    const lastEdge={
      id: `${lastId+1}-${lastId + 2}`,
      source: (lastId+1).toString(),
      target: (lastId + 2).toString(),
      type: "straight",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
    }
    edges=[...edges,lastEdge]
    setEdges(edges);
    console.log(nodes,edges,lastId)
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
