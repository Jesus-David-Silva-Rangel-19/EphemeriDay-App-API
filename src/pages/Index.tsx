
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DateNavigation from "@/components/DateNavigation";
import AnniversaryCard from "@/components/AnniversaryCard";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const mockAnniversaries = [
  { year: 1492, description: "Cristóbal Colón llega a América." },
  { year: 1810, description: "Inicio de la independencia de México con el Grito de Dolores." },
  { year: 1945, description: "Finaliza la Segunda Guerra Mundial con la rendición de Japón." },
];

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setCurrentDate(date);
      setIsCalendarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl mx-auto pt-32 pb-24 px-4">
        <DateNavigation
          currentDate={currentDate}
          onDateChange={setCurrentDate}
          onCalendarOpen={() => setIsCalendarOpen(true)}
        />
        <div className="space-y-6 mt-8">
          {mockAnniversaries.map((anniversary, index) => (
            <AnniversaryCard
              key={index}
              year={anniversary.year}
              description={anniversary.description}
            />
          ))}
        </div>
      </main>
      <Footer />

      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center font-alegreya text-xl">
              Seleccionar fecha
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center p-4">
            <Calendar
              mode="single"
              selected={currentDate}
              onSelect={handleDateSelect}
              className="rounded-md border"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
