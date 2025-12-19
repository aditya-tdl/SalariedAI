import GlobalWrapper from "@/components/layouts/GlobalWrapper";
import { Stack } from "@mui/material";
import Hero from "@/components/landingpage/Hero";
import PastSpeakers from "@/components/landingpage/PastSpeakers";
import GuestShowcase from "@/components/landingpage/GuestShowcase";
import Community from "@/components/landingpage/Community";
import FAQs from "@/components/FAQ/FAQs";
import EventsWorkshops from "@/components/Carousel/EventsWorkshops";

export default function Home() {
  return (
    <GlobalWrapper>
      <Hero />
      <PastSpeakers />
      <Stack spacing={0} width={"100%"}>
        <EventsWorkshops />
        <GuestShowcase />
        <Community />
      </Stack>
      <FAQs />
    </GlobalWrapper>
  );
}
