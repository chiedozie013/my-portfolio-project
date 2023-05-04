import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectSection";
import { AlertProvider } from "./context/alertContext";
export default function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Header />
        <LandingSection />
        <ProjectSection />
      </AlertProvider>
    </ChakraProvider>
  );
}
