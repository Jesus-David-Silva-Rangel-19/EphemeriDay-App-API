
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DateNavigation from "@/components/DateNavigation";
import AnniversaryCard from "@/components/AnniversaryCard";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";

interface WikiEvent {
  text: string;
  year: string;
  pages: Array<{ title: string }>;
}

const fetchAnniversaries = async (date: Date) => {
  const month = format(date, "MM");
  const day = format(date, "dd");
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/es/onthisday/all/${month}/${day}`;
  
  const response = await fetch(url, {
    headers: {
      'Api-User-Agent': 'EphemeriDay/1.0 (https://ephemeriday.com; info@ephemeriday.com)'
    }
  });
  
  if (!response.ok) {
    throw new Error('Error al cargar las efemérides');
  }
  
  const data = await response.json();
  return data.events as WikiEvent[];
};

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const { data: events, isLoading, error } = useQuery({
    queryKey: ['anniversaries', format(currentDate, 'yyyy-MM-dd')],
    queryFn: () => fetchAnniversaries(currentDate),
  });

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
          {isLoading ? (
            <p className="text-center font-labrada text-gray-600">Cargando efemérides...</p>
          ) : error ? (
            <p className="text-center font-labrada text-red-600">Error al cargar las efemérides. Por favor, intente más tarde.</p>
          ) : events ? (
            events.map((event, index) => (
              <AnniversaryCard
                key={index}
                year={parseInt(event.year)}
                description={event.text}
              />
            ))
          ) : null}
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
