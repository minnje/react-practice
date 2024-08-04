import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./component.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
     <React.StrictMode>
          <Component
               question={"어떻게 이용하셨나요?"}
               select1={"예약 없이"}
               select2={"예약후"}
               select3={"포장/배달"}
          />
     </React.StrictMode>
);
