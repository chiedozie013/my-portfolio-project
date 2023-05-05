import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
export default function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Header />
        <LandingSection />
        <ProjectSection />
        <ContactSection />
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}
