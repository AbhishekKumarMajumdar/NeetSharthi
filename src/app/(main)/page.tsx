
import Image from "next/image";
import Defualt from "@/Images/Products/defult.jpg"
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";
import Review from "@/components/Review";
import Text from "@/components/Text";
import BasicCard from "@/components/BasicCard";
import CardSection from "@/components/CardSection";
import CourseSection from "@/components/CourseSection";
import Teacher from "@/components/Teacher";
import Ten from "@/Images/Banner/10.png"
import Samagra from "@/Images/Banner/Samagra.png"
import DAKSH from "@/Images/Banner/Daksh.png"
export default function Home() {

  const data = [
    {
      title: "DAKSH COURSE",
      classes: "For Class - X",
      list: [
        "Online Test Series (Monthly Test)",
        "Complete coverage of Board NCERT with special Focus on NTSE",
        "Chapter wise Tests and Major Tests",
        "Live doubt Session",
        "You can access all the above contents/tests on Mobile App and Website as well ",
        "Doubt clarification by App chat, Telegram and Live session"
      ],
      buyLink: "/",
      DemoLink: "/",
      img: Ten,
      direction: true,
    },
    {
      title: "SAMAGRA COURSE : NEET/JEE-2025",
      classes: "For Class 11th students",
      list: [
        "This subscription will be valid till 31 march 2025.",
        "Recorded Lectures of class XI syllabus",
        "10000+ quality questions prepared by20+ Top Kota faculties ",
        "DPP, Chapter-wise practice test with solutions and PYQ's",
        "Performance Analysis report to identify weak areas",
        "You can access all the above contents/tests on Mobile App and Website as well ",
        "Doubt clarification by App chat, Telegram and Live session"
      ],
      buyLink: "/",
      DemoLink: "/",
      img: Samagra,
      direction: false,
    },
    {
      title: "DAKSH COURSE",
      classes: "For Class - X",
      list: [
        "Online Test Series (Monthly Test)",
        "Complete coverage of Board NCERT with special Focus on NTSE",
        "Chapter wise Tests and Major Tests",
        "Live doubt Session",
        "You can access all the above contents/tests on Mobile App and Website as well ",
        "Doubt clarification by App chat, Telegram and Live session"
      ],
      buyLink: "/",
      DemoLink: "/",
      img: DAKSH,
      direction: true,
    },
    {
      title: "SAMAGRA COURSE : NEET/JEE-2025",
      classes: "For Class 11th students",
      list: [
        "This subscription will be valid till 31 march 2025.",
        "Recorded Lectures of class XI syllabus",
        "10000+ quality questions prepared by20+ Top Kota faculties ",
        "DPP, Chapter-wise practice test with solutions and PYQ's",
        "Performance Analysis report to identify weak areas",
        "You can access all the above contents/tests on Mobile App and Website as well ",
        "Doubt clarification by App chat, Telegram and Live session"
      ],
      buyLink: "/",
      DemoLink: "/",
      img: DAKSH,
      direction: false,
    },
  ]
  return (
    <>
      <Header />
      <Text />
      <CardSection />
      {data.map((e) => (
        <CourseSection key={e.title} data={e} />

      ))}
      <Teacher />
      <CallToAction />
      <Faq />
      <Review />
    </>
  );
}
