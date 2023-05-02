import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import { AlertProvider } from "./context/alertContext";
export default function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}
