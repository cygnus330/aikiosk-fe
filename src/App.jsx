import { useMemo } from "react";

import AppUI from "./AppUI";

function App() {
    const searchParams = useMemo(() => new URLSearchParams(window.location.search), []);
    const x = parseInt(searchParams.get("x")) || 0;
    const y = parseInt(searchParams.get("y")) || 0;

    const style = {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${360-x}px`,
        height: `${640-y}px`,
        backgroundColor: "#e0e0e0", // 임시 배경
        border: "1px solid #ccc",
        boxSizing: "border-box",
      };
    
  
    return (
        <div className="absolute w-[360px] h-[640px] border-2 border-solid">
            <div style={style}>
                <AppUI />
            </div>
        </div>
    );
}
export default App;