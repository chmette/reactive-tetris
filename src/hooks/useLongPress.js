import { useState, useEffect } from "react";

// export default function useLongPress(callback, ms = 500) {
//   const [startLongPress, setStartLongPress] = useState(false);

//   useEffect(() => {
//     let timerId;
//     if (startLongPress) {
//       timerId = setTimeout(callback, ms);
//       console.log("long press");
//     } else {
//       clearTimeout(timerId);
//     }

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [callback, ms, startLongPress]);

//   return {
//     onKeyDown: () => setStartLongPress(true),
//     onKeyUp: () => setStartLongPress(false),
//     onKeyPress: () => setStartLongPress(true),
//     onTouchStart: () => setStartLongPress(true),
//     onTouchEnd: () => setStartLongPress(false),
//   };
// }

// with interval

export default function useLongPress(callback, ms = 300) {
  const [startLongPress, setStartLongPress] = useState(false);

  console.log(callback);

  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setInterval(callback, ms);
      console.log("press long start", timerId);
    } else {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [callback, ms, startLongPress]);

  return {
    onKeyDown: () => setStartLongPress(true),
    onKeyUp: () => setStartLongPress(false),
    onKeyPress: () => setStartLongPress(true),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
  };
}

//---------------------------------------------
//---------------------------------------------
//---------------------------------------------

// how to implement
// import useLongPress from "./useLongPress";

// function MyComponent(props) {
//   const backspaceLongPress = useLongPress(
//     props.longPressBackspaceCallback,
//     500
//   );

//   return (
//     <Page>
//       <Button {...backspaceLongPress}>Click me</Button>
//     </Page>
//   );
// }
