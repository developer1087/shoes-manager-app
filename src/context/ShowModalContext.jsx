// import { useState, createContext, useEffect } from "react";

// const ShowModalContext = createContext();

// const AppProvider = ({ children }) => {
//   const [showModal, setShowModal] = useState(false);
//   useEffect(() => {
//     function showMyModal() {
//       setShowModal(true);
//     }
//     showMyModal();
//   }, []);
//   return (
//     <ShowModalContext.Provider value={{ showModal, setShowModal }}>
//       {children}
//     </ShowModalContext.Provider>
//   );
// };

// export { AppProvider, ShowModalContext };
