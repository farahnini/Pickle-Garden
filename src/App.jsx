import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourtStatusGrid from './components/CourtStatusGrid';
import ProgramsSection from './components/ProgramsSection';
import MembershipSection from './components/MembershipSection';
import CoachesSection from './components/CoachesSection';
import InstagramFeed from './components/InstagramFeed';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

import BookingModal from './components/BookingModal';
import MembershipModal from './components/MembershipModal';
import SkillQuizModal from './components/SkillQuizModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState({});

  const [isMembershipOpen, setIsMembershipOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [isSkillQuizOpen, setIsSkillQuizOpen] = useState(false);

  const handleOpenBooking = (data = {}) => {
    setBookingData(data);
    setIsBookingOpen(true);
  };

  const handleSelectCourtFromGrid = (courtId) => {
    setBookingData({ courtId });
    setIsBookingOpen(true);
  };

  const handleOpenMembership = (plan) => {
    setSelectedPlan(plan);
    setIsMembershipOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b1a13] text-slate-100 font-sans selection:bg-pickle-500 selection:text-black">
      {/* Fixed Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenSkillQuiz={() => setIsSkillQuizOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onSelectSlot={(slot) => setBookingData(slot)}
        />

        <CourtStatusGrid
          onSelectCourt={handleSelectCourtFromGrid}
        />

        <ProgramsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        <MembershipSection
          onOpenMembershipModal={handleOpenMembership}
        />

        <CoachesSection
          onOpenBooking={() => handleOpenBooking()}
        />

        <InstagramFeed />

        <Testimonials />

        <LocationContact />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingData}
      />

      <MembershipModal
        isOpen={isMembershipOpen}
        onClose={() => setIsMembershipOpen(false)}
        selectedPlan={selectedPlan}
      />

      <SkillQuizModal
        isOpen={isSkillQuizOpen}
        onClose={() => setIsSkillQuizOpen(false)}
      />
    </div>
  );
}
