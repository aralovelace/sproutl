import React from "react";

export const DefaultTemplate = (props: { children: any }) => {
  return (
    <>
      <title>Sproutl tech Test</title>
      <main className="content">
        <div
          className="mx-auto block flex w-full
          max-w-screen-xl items-center justify-center"
        >
          <div className="w-full"> {props.children} </div>
        </div>
      </main>
    </>
  );
};
